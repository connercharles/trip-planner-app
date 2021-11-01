import React, { PureComponent, useEffect, useState } from "react";
import { View, StyleSheet, Text, Dimensions, Platform } from "react-native";
import * as ReactPermissions from 'react-native-permissions'
import { SafeAreaView } from "react-native-safe-area-context";
import Banner from '../components/Banner';
import Colors from '../constants/Colors';
import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.pageBackground,
      },
})

export default function MapScreen({ navigation, route }: { navigation: any, route: any }) {

    //const {location, history, distance} = useTracking(true);
    const [currLoc, setCurrLoc] = useState({lat:null, long:null})

    const newLoc = (lat, long) => {
      setCurrLoc({lat, long}) 
    }

    const locationEnabledTest = Location.hasServicesEnabledAsync().then((res) => console.log(res + " value"))

    const locationEnabled = Promise.resolve(locationEnabledTest).then();
    console.log(locationEnabled + "after promise resolve")

    const _reqLocPerm = async () => {
      let resp = await Location.requestPermissionsAsync();
      return resp;
    }

    const _getLocationAsync = async () => {
      let {status} = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        console.log("permissions not granted");
        _reqLocPerm();
      }
      
      /*
      var permission;
      if (Platform.OS === 'ios') {
        permission =
            ReactPermissions.PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
            console.log("BG Permission: " + permission)
      }
      */


      console.log("Running Get Location...")
      let location = await Location.getCurrentPositionAsync({})
      newLoc(location.coords.latitude, location.coords.longitude)
      console.log(location);
    }

    _getLocationAsync()

    const CondText = () => {
      return(
      <View>
        {locationEnabled ? <Text>location enabled</Text> : <Text>location NOT enabled</Text>}
        <Text>Current Location</Text>
        <Text>Latitude: {currLoc.lat} Longitude: {currLoc.long}</Text>
      </View>
      )
    }
    return (
        <SafeAreaView style={styles.container}>
          <Banner showBack={true}/>
          <CondText/>
          <Text>TESTINGGG location</Text>
        </SafeAreaView>
    );
};

/*
class MapScreen extends PureComponent {
    static navigationOptions = {
      header: null
    }
  
    
    constructor(props) {
      this.state = {
        region: null,
        locations: [],
        stationaries: [],
        isRunning: false
      };
  
      this.goToSettings = this.goToSettings.bind(this);
    }
    
  
    componentDidMount() {
      console.log('map did mount');
  
      function logError(msg:any) {
        console.log(`[ERROR] getLocations: ${msg}`);
      }
      
      
      const handleHistoricLocations = locations => {
        let region = null;
        const now = Date.now();
        const latitudeDelta = 0.01;
        const longitudeDelta = 0.01;
        const durationOfDayInMillis = 24 * 3600 * 1000;
  
        const locationsPast24Hours = locations.filter(location => {
          return now - location.time <= durationOfDayInMillis;
        });
  
        if (locationsPast24Hours.length > 0) {
          // asume locations are already sorted
          const lastLocation =
            locationsPast24Hours[locationsPast24Hours.length - 1];
          region = Object.assign({}, lastLocation, {
            latitudeDelta,
            longitudeDelta
          });
        }
        this.setState({ locations: locationsPast24Hours, region });
      };
      
  
      // BackgroundGeolocation.getValidLocations(
      //   handleHistoricLocations.bind(this),
      //   logError
      // );
  
      BackgroundGeolocation.getCurrentLocation(lastLocation => {
        let region = this.state.region;
        const latitudeDelta = 0.01;
        const longitudeDelta = 0.01;
        region = Object.assign({}, lastLocation, {
          latitudeDelta,
          longitudeDelta
        });
        this.setState({ locations: [lastLocation], region });
      }, (error) => {
        setTimeout(() => {
          console.log('Error obtaining current location', JSON.stringify(error));
        }, 100);
      });
  
      BackgroundGeolocation.on('start', () => {
        // service started successfully
        // you should adjust your app UI for example change switch element to indicate
        // that service is running
        console.log('[DEBUG] BackgroundGeolocation has been started');
        this.setState({ isRunning: true });
      });
  
      BackgroundGeolocation.on('stop', () => {
        console.log('[DEBUG] BackgroundGeolocation has been stopped');
        this.setState({ isRunning: false });
      });
  
      BackgroundGeolocation.on('authorization', status => {
        console.log(
          '[INFO] BackgroundGeolocation authorization status: ' + status
        );
        if (status !== BackgroundGeolocation.AUTHORIZED) {
          // we need to set delay after permission prompt or otherwise alert will not be shown
          setTimeout(() =>
            Alert.alert(
              'App requires location tracking',
              'Would you like to open app settings?',
              [
                {
                  text: 'Yes',
                  onPress: () => BackgroundGeolocation.showAppSettings()
                },
                {
                  text: 'No',
                  onPress: () => console.log('No Pressed'),
                  style: 'cancel'
                }
              ]
          ), 1000);
        }
      });
  
      BackgroundGeolocation.on('error', ({ message }) => {
          
        Alert.alert('BackgroundGeolocation error', message);
        
        console.log('[DEBUG] error', message);
      });
  
      BackgroundGeolocation.on('location', location => {
        console.log('[DEBUG] BackgroundGeolocation location', location);
        
        BackgroundGeolocation.startTask(taskKey => {
          requestAnimationFrame(() => {
            const longitudeDelta = 0.01;
            const latitudeDelta = 0.01;
            const region = Object.assign({}, location, {
              latitudeDelta,
              longitudeDelta
            });
            const locations = this.state.locations.slice(0);
            locations.push(location);
            this.setState({ locations, region });
            BackgroundGeolocation.endTask(taskKey);
          });
        });
        
      });
  
      BackgroundGeolocation.on('stationary', (location) => {
        console.log('[DEBUG] BackgroundGeolocation stationary', location);
        
        BackgroundGeolocation.startTask(taskKey => {
          requestAnimationFrame(() => {
            const stationaries = this.state.stationaries.slice(0);
            if (location.radius) {
              const longitudeDelta = 0.01;
              const latitudeDelta = 0.01;
              const region = Object.assign({}, location, {
                latitudeDelta,
                longitudeDelta
              });
              const stationaries = this.state.stationaries.slice(0);
              stationaries.push(location);
              this.setState({ stationaries, region });
            }
            BackgroundGeolocation.endTask(taskKey);
          });
        });
        
      });
  
      BackgroundGeolocation.on('foreground', () => {
        console.log('[INFO] App is in foreground');
      });
  
      BackgroundGeolocation.on('background', () => {
        console.log('[INFO] App is in background');
      });
  
      BackgroundGeolocation.checkStatus(({ isRunning }) => {
        console.log('[DEBUG] is running', isRunning);
         
        this.setState({ isRunning });
        if (isRunning) {
          BackgroundGeolocation.start();
        }
        
      });
    }
  
    componentWillUnmount() {
      BackgroundGeolocation.events.forEach(event =>
        BackgroundGeolocation.removeAllListeners(event)
      );
    }
  
    toggleTracking() {
      BackgroundGeolocation.checkStatus(({ isRunning, locationServicesEnabled, authorization }) => {
        if (isRunning) {
          BackgroundGeolocation.stop();
          return false;
        }
  
        if (!locationServicesEnabled) {
          console.log(
            'Location services disabled',
            'Would you like to open location settings?',
            [
              {
                text: 'Yes',
                onPress: () => BackgroundGeolocation.showLocationSettings()
              },
              {
                text: 'No',
                onPress: () => console.log('No Pressed'),
                style: 'cancel'
              }
            ]
          );
          return false;
        }
  
        if (authorization == 99) {
          // authorization yet to be determined
          BackgroundGeolocation.start();
        } else if (authorization == BackgroundGeolocation.AUTHORIZED) {
          // calling start will also ask user for permission if needed
          // permission error will be handled in permisision_denied event
          BackgroundGeolocation.start();
        } else {
          console.log(
            'App requires location tracking',
            'Please grant permission',
            [
              {
                text: 'Ok',
                onPress: () => BackgroundGeolocation.start()
              }
            ]
          );
        }
      });
    }
  
    render() {
      const { height, width } = Dimensions.get('window');
      return (
        <SafeAreaView style={styles.container}>
            <Banner showBack={false}/>
            <Text>Location Services</Text>
        </SafeAreaView>
      );
    }
}
  
export default MapScreen;

*/
