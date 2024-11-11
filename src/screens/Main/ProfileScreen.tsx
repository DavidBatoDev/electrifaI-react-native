import React from 'react';
import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, Image, TouchableOpacity, View, Dimensions, Text } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import { signOut } from '../../services/authService';
import { Alert } from 'react-native';
import { useNavigation, CommonActions } from "@react-navigation/native";
import { RootStackNavigationProp } from "../types";

import { fetchUserProfile } from '../../services/userService';
import { createDummyConsumptions } from '../../utils/dummyDataUtils';
import { getTotalConsumptionThisMonth, getTotalConsumptionToday } from '../../services/consumptionService';

// Define an interface for user data
interface User {
  name: string;
  nickname: string;
  location: string;
  age: number;
  occupation: string;
}

export default function ProfileScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  fetchUserProfile(); // FOR TESTING
  // createDummyConsumptions(); // FOR TESTING
  getTotalConsumptionToday(); // FOR TESTING
  getTotalConsumptionThisMonth(); // FOR TESTING
  const [user, setUser] = useState<User | null>(null); // User state

  const getUserData = async () => {
    try {
      const documentSnapshot = await firestore()
        .collection('user')
        .doc('dummy-data')
        .get();

      if (documentSnapshot.exists) {
        const data = documentSnapshot.data();

        // Check if data is defined
        if (data) {
          const fetchedUser: User = {
            name: data.firstName + ' ' + data.lastName,
            nickname: data.nickName,
            location: data.location,
            age: data.age, // Ensure this matches the type in the interface
            occupation: data.occupation,
          };

          setUser(fetchedUser); // Set the user state
        } else {
          console.log('Data is undefined');
        }
      } else {
        console.log('User does not exist');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleLogout = async () => {
    const error: string = await signOut();
    if (error) {Alert.alert("Error Code", error); return;};
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Auth', 
            params: {screen: 'Login'
          } },
        ],
      })
    );
  };

  useEffect(() => {
    getUserData(); // Fetch user data when the component mounts
  }, []);
  
  const profilePhoto = require('../../assets/images/sample-profile.png')
  
  return (
    <LinearGradient colors={['#333E6C', '#2D3142']} style={styles.linearGradient}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.profileHeader}>
          <View style={styles.photoAndEditContainer}>
            {/* Circular Profile Photo Frame */}
            <View style={styles.profilePhotoContainer}>
              <Image source={profilePhoto} style={styles.profilePhoto} />
            </View>
            {/* Edit Profile Photo Icon */}
            <TouchableOpacity style={styles.editPhotoButton}>
              <Text style={styles.editButtonText}>Edit Profile Photo</Text>
            </TouchableOpacity>
          </View>
            {/* Profile Name */}
            <Text style={styles.profileName}>{user ? user.name : 'Loading...'}</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.editInfoRow}>
            <Text style={styles.infoTitle}>Personal Information</Text>
            <TouchableOpacity style={styles.editButtonInfo}>
              <Ionicons name="pencil-outline" size={25} color="#FFFFFF"></Ionicons>
            </TouchableOpacity>
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.info}>{user ? user.name : 'Loading...'}</Text>
            <Text style={styles.label}>Nickname:</Text>
            <Text style={styles.info}>{user ? user.nickname : 'Loading...'}</Text>
            <Text style={styles.label}>Location:</Text>
            <Text style={styles.info}>{user ? user.location : 'Loading...'}</Text>
            <Text style={styles.label}>Age:</Text>
            <Text style={styles.info}>{user ? user.age : 'Loading...'} yrs old</Text>
            <Text style={styles.label}>Occupation:</Text>
            <Text style={styles.info}>{user ? user.occupation : 'Loading...'}</Text>
          </View>
        </View>
        <View style={styles.moreContainer}>
          <Text style={styles.moreTitle}>More</Text>
          <Text style={styles.moreSubtitle}>What would you like to do?</Text>
          <View style={styles.moreOptions}>
          <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.optionButton}>
              <Ionicons name="settings-outline" size={30} color="#6C6F83"></Ionicons>
            </TouchableOpacity>
            <Text style={styles.optionButtonText}>General Settings</Text>
          </View>
          <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.optionButton}>
              <Ionicons name="call-outline" size={30} color="#61DE70"></Ionicons>
            </TouchableOpacity>
            <Text style={styles.optionButtonText}>Contact Us</Text>
          </View>
          <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.optionButton} onPress={handleLogout}>
              <Ionicons name="log-out-outline" size={30} color="#FF4D4D"></Ionicons>
            </TouchableOpacity>
            <Text style={styles.optionButtonText}>Logout</Text>
          </View>
        </View>
        </View>
      </ScrollView>  
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 20,
    flexGrow: 1,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photoAndEditContainer: {
    alignItems: 'center',
  },
  profilePhotoContainer: {
    borderRadius: Dimensions.get('window').width * 0.2,
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').width * 0.3,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 10,
  },
  profilePhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 80,
    resizeMode: 'cover',
  },
  editPhotoButton: {
    paddingVertical: 5,
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    marginLeft: 20,
    width: "60%",
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    elevation: 2,
    height: 300,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  infoContent: {
    marginBottom: 10,
    marginLeft: 10,
  },
  label: {
    color: "#333",
    fontSize: 14,
  },
  info: {
    fontWeight: "bold",
    color: "#333",
    fontSize: 15,
    marginBottom: 5,
  },
  editInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButtonInfo: {
    marginLeft: 'auto',
    height: 35,
    width: 35,
    backgroundColor: '#828284',
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius: 15, 
  },
  editInfoButtonText: {
    color: "#00f",
    fontWeight: "bold",
  },
  moreContainer: {
    paddingVertical: 10,
  },
  moreTitle: {
    fontSize: 18,
    fontWeight: "bold",

    color: "#fff",
  },
  moreSubtitle: {
    color: "#fff",
    marginBottom: 20,
  },
  moreOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  optionButton: {
    backgroundColor: "#fff",
    width: 100,
    height: 70,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3,
  },
  
  optionButtonText: {
    textAlign: 'center',
    color: "#fff",
    paddingVertical: 10,
  },
});
