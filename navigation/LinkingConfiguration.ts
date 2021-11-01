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
          Map: {
            screens: {
              MapScreen: 'mapscreen',
            },
          },
          PackingList: {
            screens: {
              PackingListScreen: 'packinglist'
            }
          },
          TicketHolder: {
            screens: {
              TicketHolderScreen: 'ticketholder'
            },
          },
          TicketScreen: {
            screens: {
              TicketScreen: 'ticketscreen'
            },
          },
          IdeasBrowserScreen: {
            screens: {
              IdeasBrowserScreen: 'ideasbrowserscreen'
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
