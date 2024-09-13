import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Dimensions, Text } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProfileScreen() {
  const user = {
    name: "Victoria Robertson",
    nickname: "Vicky",
    location: "Manila",
    age: "30 yrs Old",
    occupation: "Electronics and Communication Engineer",
  };
  
  const profilePhoto = require('../../assets/images/sample-profile.png')
  
  return (
    <LinearGradient colors={['#333E6C', '#2D3142']} style={styles.linearGradient}>
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
          <Text style={styles.profileName}>{user.name}</Text>
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
            <Text style={styles.info}>{user.name}</Text>
            <Text style={styles.label}>Nickname:</Text>
            <Text style={styles.info}>{user.nickname}</Text>
            <Text style={styles.label}>Location:</Text>
            <Text style={styles.info}>{user.location}</Text>
            <Text style={styles.label}>Age:</Text>
            <Text style={styles.info}>{user.age}</Text>
            <Text style={styles.label}>Occupation:</Text>
            <Text style={styles.info}>{user.occupation}</Text>
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
            <TouchableOpacity style={styles.optionButton}>
              <Ionicons name="log-out-outline" size={30} color="#FF4D4D"></Ionicons>
            </TouchableOpacity>
            <Text style={styles.optionButtonText}>Logout</Text>
          </View>
        </View>
        </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  photoAndEditContainer: {
    alignItems: 'center',
  },
  profilePhotoContainer: {
    borderRadius: Dimensions.get('window').width * 0.2,
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 10,
  },
  profilePhoto: {
    width: '90%',
    height: '90%',
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
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20,
    color: "#fff",
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
    fontSize: 15,
  },
  info: {
    fontWeight: "bold",
    color: "#333",
    fontSize: 17,
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

