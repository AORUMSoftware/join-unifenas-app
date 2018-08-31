# join-unifenas-app
Aplicativo para JOIN 2018.

# Run Android device on Windows
- adb reverse tcp:8081 tcp:8081 && react-native run-android
- gradlew assembleRelease
- react-native run-android --variant=release
- cd android && gradlew clean