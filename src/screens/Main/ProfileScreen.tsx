import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Dimensions, Text } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProfileScreen() {
  const user = {
    name: "Victoria Robertson",
    nickname: "Vicky",
    location: "Manila",
    age: "30 yrs Old",
    occupation: "Electronics and Communication Engineer",
    profilePhoto: "path/to/profile/photo.jpg", // replace with the actual path to the profile photo
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.photoAndEditContainer}>
          {/* Circular Profile Photo Frame */}
          <View style={styles.profilePhotoContainer}>
            <Image source={{ uri: user.profilePhoto }} style={styles.profilePhoto} />
          </View>
          {/* Edit Profile Photo Icon */}
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile Photo</Text>
          </TouchableOpacity>
        </View>
        {/* Profile Name */}
        <Text style={styles.profileName}>{user.name}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Personal Information</Text>
        <View style={styles.infoContent}>
          <Text><Text style={styles.label}>Name: </Text>{user.name}</Text>
          <Text><Text style={styles.label}>Nickname: </Text>{user.nickname}</Text>
          <Text><Text style={styles.label}>Location: </Text>{user.location}</Text>
          <Text><Text style={styles.label}>Age: </Text>{user.age}</Text>
          <Text><Text style={styles.label}>Occupation: </Text>{user.occupation}</Text>
        </View>
        <TouchableOpacity style={styles.editInfoButton}>
          <Text>
          <Ionicons name="pencil-outline" size={16}></Ionicons>
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.moreContainer}>
        <Text style={styles.moreTitle}>More</Text>
        <Text style={styles.moreSubtitle}>What would you like to do?</Text>
        <View style={styles.moreOptions}>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionButtonText}>General Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionButtonText}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={() => {/* Add your logout logic here */ }}>
            <Text style={styles.optionButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA500", // orange background
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
    borderRadius: Dimensions.get('window').width * 0.2, // Half of width/height to make it circular
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
    backgroundColor: '#fff', // White background similar to the example
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Ensure image stays within the circular frame
    marginBottom: 10,
  },
  profilePhoto: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  editButton: {
    marginTop: 5, // Space between the circle and the edit text
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
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5, // For Android shadow
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoContent: {
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    color: "#333",
  },
  editInfoButton: {
    alignItems: "flex-end",
  },
  editInfoButtonText: {
    color: "#00f",
    fontWeight: "bold",
  },
  moreContainer: {
    width: "90%",
    paddingVertical: 20,
  },
  moreTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
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
  optionButton: {
    width: "30%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3, // For Android shadow
  },
  optionButtonText: {
    color: "#000",
  },
});

