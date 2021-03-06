import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
   const [isLoadingComplete, setLoadingComplete] = useState(false);

   // Load any resources or data that we need prior to rendering the app
   useEffect(() => {
      async function loadResourcesAndDataAsync() {
         try {
            SplashScreen.preventAutoHideAsync();

            // Load fonts
            await Font.loadAsync({
               ...Ionicons.font,
               'cairoExtraLight': require('../assets/fonts/Cairo-ExtraLight.ttf'),
               'cairoLight': require('../assets/fonts/Cairo-Light.ttf'),
               'cairoRegular': require('../assets/fonts/Cairo-Regular.ttf'),
               'cairoSemiBold': require('../assets/fonts/Cairo-SemiBold.ttf'),
               'cairoBold': require('../assets/fonts/Cairo-Bold.ttf'),
            });
         } catch (e) {
            // We might want to provide this error information to an error reporting service
            console.warn(e);
         } finally {
            setLoadingComplete(true);
            SplashScreen.hideAsync();
         }
      }

      loadResourcesAndDataAsync();
   }, []);

   return isLoadingComplete;
}
