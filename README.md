# Development Codebase for the ElectrifAI app


## React Native Development Environment Setup
You can visit the https://reactnative.dev/docs/set-up-your-environment for the offical documentaion for setting up your local environment.

## Prerequisites
Before you begin, make sure you have the following installed:
- **Node.js** (Recommended LTS version)
- **Java Development Kit (JDK)** (Recommended version: JDK 17)
- **Android Studio** (For Android development)

## Installation of prerequisites
### **Node.js (@latest)** 
- use chocolatey to install the nodejs-lts version 
- the nodejs bin folder from your program files in the environmental varialbles PATH
### **Java Development Kit (@17)** 
- go to https://www.oracle.com/java/technologies/downloads/#jdk17-windows if youre using windows
- Download the x64 MSI installer, launch the installer and follow the default instructions given. 
- After the installation go to the Java folder in your Program Files and navigate to the bin folder copy the path address
- Go to your environmental variable to System variable click PATH, click Edit, click New, and put the path address to the PATH variable 
- Create a New User Variables with a variable name "JAVA_HOME", for the variable value simply paste the path address but this time remove the '\bin' on the path
### **Android Studio Code (@latest)**
- Install the Android SDK latest
- Go to SDK manager, check "Show Package Details", go to "Android 12.0 (S)" and install the following: Android SDK Platform 31, Intel x86 Atom_64 System Image
- Go to SDK tools, check "Show Package Details" and install 31.0.0
- Create a New User Variables with a variable name "ANDROID_HOME", for the variable value check in File Explorer:
"C:\Users\<username>\AppData\Local\Android\Sdk"
- to Confirm, open powershell type the command "Get-ChildItem -Path Env:\", Verify ANDROID_HOME has been added
- Go to your envromental variables again select Path, click Edit, click New and paste this ""C:\Users\<username>\AppData\Local\Android\Sdk\platforms-tools""

## Development
- for installing the package run "npm install"
- for the development run "npm start" or "npm android"