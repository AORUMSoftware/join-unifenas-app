# join-unifenas-app
Aplicativo oficial XXIX JOIN, 2018.

# Run Android device on Windows
- adb reverse tcp:8081 tcp:8081 && react-native run-android
- adb reverse tcp:8081 tcp:8081 && react-native run-android --variant=release
- gradlew assembleRelease
- cd android && gradlew clean