import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Screens
import LandingPage from './src/screens/landingPage.jsx';
import Login from './src/screens/Login.jsx';
import NewRegistreation from './src/screens/NewRegistreation.jsx';
import HomePage from './src/screens/HomePage.jsx';
import MoreDetail from './src/screens/MoreDetail.jsx';
import ReservePage from './src/screens/ReservePage.jsx';
import NoOfSlot from './src/screens/NoOfSlot.jsx';
import BottomNav from './src/screens/BottomNav.jsx';
import DashboardPage from './src/screens/DashboardPage.jsx';
import ProfileInfo from './src/screens/profileInfo.jsx';
import SettingPage from './src/screens/SettingPage.jsx';
import LoginAndSecurityScreen from './src/screens/LoginAndSecurityScreen.jsx';
import PaymenAndPayout from './src/screens/PaymenAndPayout.jsx';
import CarbinAdvertiserOnboarding from './src/screens/CarbinAdvertiserOnboarding.jsx';
import CarbinTermsScreen from './src/screens/CarbinTermsScreen.jsx';
import OpenSourceLicensesScreen from './src/screens/OpenSourceLicensesScreen.jsx';
import PrivacyPolicyScreen from './src/screens/PrivacyPolicyScreen.jsx';
// import CarbinFeedback from './src/screens/CarbinFeedback.jsx';
// import HelpScreen from './src/screens/HelpScreen.jsx';
// import CarbinNotificationSettings from './src/screens/CarbinNotificationSettings.jsx';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="NewRegistreation" component={NewRegistreation} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="MoreDetail" component={MoreDetail} />
        <Stack.Screen name="ReservePage" component={ReservePage} />
        <Stack.Screen name="NoOfSlot" component={NoOfSlot} />
        <Stack.Screen name="BottomNav" component={BottomNav} />
        <Stack.Screen name="DashboardPage" component={DashboardPage} />
        <Stack.Screen name="ProfileInfo" component={ProfileInfo} />
        <Stack.Screen name="SettingPage" component={SettingPage} />
        <Stack.Screen name="LoginAndSecurityScreen" component={LoginAndSecurityScreen} />
        <Stack.Screen name="PaymenAndPayout" component={PaymenAndPayout} />
        <Stack.Screen name="CarbinAdvertiserOnboarding" component={CarbinAdvertiserOnboarding} />
        <Stack.Screen name="CarbinTermsScreen" component={CarbinTermsScreen} />
        <Stack.Screen name="OpenSourceLicensesScreen" component={OpenSourceLicensesScreen} />
        <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />

        {/* Optional future screens */}
        {/* <Stack.Screen name="CarbinFeedback" component={CarbinFeedback} /> */}
        {/* <Stack.Screen name="HelpScreen" component={HelpScreen} /> */}
        {/* <Stack.Screen name="CarbinNotificationSettings" component={CarbinNotificationSettings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
