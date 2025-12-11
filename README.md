This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

## ⚡ Issues Faced & Changes Made

### 1. **Network request failed / API not working**
- **Error observed:** 
- **Root cause:** `API_BASE_URL` was undefined because `.env` was incorrectly placed inside `src`.
- **Fixes implemented:**
1. Moved `.env` to the **project root**.
2. Added the correct environment variable:
   ```env
   API_BASE_URL=https://i3ty49z2ne.execute-api.us-east-2.amazonaws.com/Prod
   ```
3. Configured `babel.config.js` to load `.env` using `react-native-dotenv`:
   ```js
   plugins: [
     ['module:react-native-dotenv', { moduleName: '@env', path: '.env', allowUndefined: true }],
   ]
   ```
4. Updated `fetch` calls in `HomePage.jsx` to use `API_BASE_URL` correctly.
5. Verified the value using:
   ```js
   console.log('API_BASE_URL =', API_BASE_URL);
   ```

### 2. **Icon import issues**
- **Error observed:** `<Icon>` component not recognized.
- **Fixes implemented:**
- Replaced ambiguous `Icon` with `MaterialIcons` from `@expo/vector-icons`.
- Updated import in `HomePage.jsx`:
  ```js
  import { MaterialIcons } from '@expo/vector-icons';
  ```
- Updated search bar code:
  ```jsx
  <MaterialIcons name="search" size={18} color="#888" style={styles.searchIcon} />
  ```

### 3. **Render errors related to SafeArea and GestureHandler**
- **Error observed:** 
- **Fixes implemented:**
- Ensured `react-native-gesture-handler` is correctly installed and wrapped the root app component with `GestureHandlerRootView`.
- Correctly used `SafeAreaView` around the main content.

### 4. **Environment variable not loading**
- **Issue:** `API_BASE_URL` was undefined.
- **Fixes implemented:**
- Ensured `.env` is in **project root**, not `src`.
- Restarted Metro bundler after `.env` changes:
  ```bash
  npx expo start -c
  ```
- Confirmed working by printing `API_BASE_URL` in console.

### 5. **FlatList & Loading state improvements**
- Added conditional rendering for `FlatList`:
```jsx
ListEmptyComponent={() =>
  loading ? (
    <ActivityIndicator size="large" color="blue" />
  ) : (
    <Text>No data found</Text>
  )
}





### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
