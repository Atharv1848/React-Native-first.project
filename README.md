# React-Native-first.project

A simple React Native Project using following

1. React-Navigation (https://reactnavigation.org/docs/getting-started/)

2. React Hooks

3. React Native Paper for Design Native Elements (https://callstack.github.io/react-native-paper/index.html) .Used DataTable and Button for react native elements

4. Axios for http Requests

# In order to run the app do npm install

#In order to run the app with tunnel expo start --tunnel


# Build the Project
# In order to build the app with expo and create expo build
  set the eas.json in project root like this
  
  {
    "build": {
      "preview": {
        "android": {
          "buildType": "apk"
        }
      },
      "preview2": {
        "android": {
          "gradleCommand": ":app:assembleRelease"
        }
      },
      "preview3": {
        "developmentClient": true
      },
      "production": {}
    }
  }
  
 # Then Run
 1. Install eas cli - npm install -g eas-cli
 2. expo login (Enter Expo username and password)
 3. expo build:configure
 4. eas build -p android --profile preview

