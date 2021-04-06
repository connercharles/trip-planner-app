import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            }
          },
          Popup: {
            screens: {
              Popup: 'popup',
            },
          },
          Trip: {
            screens: {
              TripScreen: 'tripscreen',
            },
          },
          PackingList: {
            screens: {
              PackingListScreen: 'packinglist'
            }
          }
        },
      },
      NotFound: '*',
    },
  },
};
