import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../pages/login/Login';
import StoreContent from '../pages/store/StoreContent';
import SingUp from '../pages/singUp/SingUp';
import Confimation from '../pages/confirmation/Confimation';
import Home from '../pages/home/Home';
import Campaign from '../pages/campaign/Campaign';
import AddressChoose from '../pages/addresChoose/AddressChoose';
import AddressMap from '../pages/addressMap/AddressMap';
import ProductDetail from '../pages/productDetail/ProductDetail';
import AddressSearch from '../pages/addressSearch/AddressSearch';
import Search from '../pages/search/Search';
import Profile from '../pages/profile/Profile';
import FavoriteProduct from '../pages/favoriteProduct/FavoriteProduct';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AnaSayfa from '../a';
import DrawerContent from './DrawerContent';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
function HomeRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddressChoose" component={AddressRouter} />
      <Stack.Screen name="StoreContent" component={StoreRouter} />
    </Stack.Navigator>
  );
}
function AddressRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="AddressChoose" component={AddressChoose} />
      <Stack.Screen name="AddressSearch" component={AddressSearch} />
      <Stack.Screen name="AddressMap" component={AddressMap} />
    </Stack.Navigator>
  );
}
function LoginRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SingUp" component={SingUp} />
    </Stack.Navigator>
  );
}
function ProfileRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Login" component={LoginRouter} />
      <Stack.Screen name="AddressChoose" component={AddressRouter} />
      <Stack.Screen name="FavoriteProduct" component={FavoriteProduct} />
    </Stack.Navigator>
  );
}

function StoreRouter() { //ok
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="StoreContent" component={StoreContent} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Confimation" component={Confimation} />
    </Stack.Navigator>
  );
}
function TabRoutes({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user-alt' : 'user-alt';
          } else {
            iconName = focused ? 'gift' : 'gift'
          }
          return <Icon name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#522C01',
        inactiveTintColor: 'gray',
        showLabel: true,
        tabStyle: {
          backgroundColor: 'white',
          padding: 5,
        }
      }}
      initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeRouter} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="AnaSayfa" component={AnaSayfa}
        options={{
          tabBarButton: () =>
            <View >
              <TouchableOpacity
                activeOpacity={100}
                style={{ height: 70, width: 70, borderRadius: 35, backgroundColor: "white", bottom: 25, borderWidth: 5, borderColor: "#e9e9e9", justifyContent: "center", alignItems: "center" }}
                onPress={() => {
                  navigation.navigate("AnaSayfa")
                }}>
                <Icon name="coffee" size={30} color={"#522C01"} />
              </TouchableOpacity>
            </View>
        }} />
      <Tab.Screen name="Profile" options={{ showLabel: false }} component={ProfileRouter} />
      <Tab.Screen name="Campaign" component={Campaign} />
    </Tab.Navigator>
  );
}
function DrawerRoutes({ navigation }) {
  //Aşağıda name lütfen tab ve drawerContent içindekiyle farklı verin yoksa tab bar gözükmez.
  return (
    < Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
      <Drawer.Screen name="Home" component={TabRoutes} />
      <Drawer.Screen name="CampaignScreen" component={Campaign} />
    </Drawer.Navigator >
  );
}

export default class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <NavigationContainer>
        {<Stack.Navigator initialRouteName="Home"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} />

        </Stack.Navigator>}

      </NavigationContainer>
    );
  }
}