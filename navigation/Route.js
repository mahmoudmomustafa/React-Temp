import 'react-native-gesture-handler';
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { signedIn } from '../redux/actions/AuthActions';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainScreens } from './MainScreens';
import Colors from "../constants/Colors";
import Styles from "../constants/Styles";
import SignInScreen from '../screens/AuthScreens/SignInScreen';

const Stack = createStackNavigator();

const Route = () => {
  const isSignedIn = useSelector(state => state.user.userToken)
  const dispatch = useDispatch()

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken = await AsyncStorage.getItem('Jwt');
      dispatch(signedIn(userToken))
      getData
    };

    bootstrapAsync();
  }, []);

  const getData = React.useMemo(async () => {
    if (isSignedIn) {
      // get user data

    }
  }, [isSignedIn]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {
          isSignedIn != null ? <HomeStack /> : <AuthStack />
        }
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: Colors.white } }}>
      {Object.entries(MainScreens).map(([name, { component, header, title }]) => {
        return (
          <Stack.Screen
            key={`screen_${name}`}
            name={name} component={component}
            options={header ?
              ({ navigation, route }) => RightHeader(navigation, title ? title : name)
              : { ...headerOptions, title: "" }
            } />
        )
      })}
    </Stack.Navigator>
  )
}

function RightHeader(navigation, title) {
  return (
    {
      headerRight: () => (
        <View style={styles.container}>
          {/* notification */}
          <TouchableOpacity
            style={{ margin: 7 }}>
            {/* <NotificationIcon /> */}
          </TouchableOpacity>
        </View>
      ),
      ...headerOptions,
      title: title
    }
  )
}
const headerOptions = {
  headerTitleAlign: 'center',
  headerTitleStyle: {
    ...Styles.header,
    fontSize: 25,
  },
  headerBackTitleVisible: false,
  headerTintColor: Colors.white,
  headerStyle: styles.headerStyle
}

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16
  },
  headerStyle: {
    borderBottomWidth: 0,
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  }
}
export default Route;