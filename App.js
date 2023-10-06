const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Ranking from "./screens/Ranking";
import Register1 from "./screens/Register1";
import Judge from "./screens/Judge";
import Login1 from "./screens/Login1";
import OTP from "./screens/OTP";
import DetailsAtTheEvent from "./screens/DetailsAtTheEvent";
import Notification1 from "./screens/Notification1";
import Notification2 from "./screens/Notification2";
import VaccinationAdd from "./screens/VaccinationAdd";
import AddEvents from "./screens/AddEvents";
import Event1 from "./screens/Event1";
import Vaccine from "./screens/Vaccine";
import Register2 from "./screens/Register2";
import SizeSmallSelectedNo from "./components/SizeSmallSelectedNo";
import Property1sexMobile from "./components/Property1sexMobile";
import Property1withLabelPhone from "./components/Property1withLabelPhone";
import Property1Form from "./components/Property1Form";
import Vaccine1 from "./screens/Vaccine1";
import VaccineAvailVaccination from "./screens/VaccineAvailVaccination";
import VaccineAvailVaccination2 from "./screens/VaccineAvailVaccination2";
import VaccineAvailList from "./screens/VaccineAvailList";
import Scoring from "./screens/Scoring";
import KaDogDashboard from "./screens/KaDogDashboard";
import KaDogDashboard1 from "./screens/KaDogDashboard1";
import KaDogDashboard2 from "./screens/KaDogDashboard2";
import KaDogEventList from "./screens/KaDogEventList";
import KaDogEventModify from "./screens/KaDogEventModify";
import Profile from "./screens/Profile";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Arapey-Regular": require("./assets/fonts/Arapey-Regular.ttf"),
    "Antonio-Bold": require("./assets/fonts/Antonio-Bold.ttf"),
    "FontdinerSwanky-Regular": require("./assets/fonts/FontdinerSwanky-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
    "DMSans-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ranking"
              component={Ranking}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register1"
              component={Register1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Judge"
              component={Judge}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login1"
              component={Login1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTP"
              component={OTP}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetailsAtTheEvent"
              component={DetailsAtTheEvent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification1"
              component={Notification1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification2"
              component={Notification2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VaccinationAdd"
              component={VaccinationAdd}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddEvents"
              component={AddEvents}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Event1"
              component={Event1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Vaccine"
              component={Vaccine}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register2"
              component={Register2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Vaccine1"
              component={Vaccine1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VaccineAvailVaccination"
              component={VaccineAvailVaccination}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VaccineAvailVaccination2"
              component={VaccineAvailVaccination2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VaccineAvailList"
              component={VaccineAvailList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Scoring"
              component={Scoring}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KaDogDashboard"
              component={KaDogDashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KaDogDashboard1"
              component={KaDogDashboard1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KaDogDashboard2"
              component={KaDogDashboard2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KaDogEventList"
              component={KaDogEventList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KaDogEventModify"
              component={KaDogEventModify}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
