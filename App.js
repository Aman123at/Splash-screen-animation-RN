import React, {useRef, useEffect} from 'react';
import {StyleSheet, Animated, Easing,Text} from 'react-native';
export default function App() {
   const backgroundFade = useRef(new Animated.Value(0)).current;
   const logoFade = useRef(new Animated.Value(0)).current;
   
   const insideFade = useRef(new Animated.Value(0)).current;
   const logoMovement = useRef(new Animated.Value(0)).current;
   const insideMovement = useRef(new Animated.Value(250)).current;
   useEffect(() => {
      Animated.timing(backgroundFade, {
         toValue: 1,
         duration: 2000,
         useNativeDriver: true,
      }).start();
      Animated.timing(logoFade, {
         toValue: 1,
         duration: 2000,
         useNativeDriver: true,
      }).start();
      
      setTimeout(() => {
         Animated.timing(logoMovement, {
               toValue: -200,
               duration: 2000,
               easing: Easing.inOut(Easing.exp),
               useNativeDriver: true,
              
         }).start();
        }, 2250);
        setTimeout(() => {
        Animated.timing(insideMovement, {
              toValue: 0,
              duration: 2000,
              easing: Easing.inOut(Easing.exp),
              useNativeDriver: true,
             
        }).start();
        Animated.timing(insideFade, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
       }).start();
        
      }, 3000);
   }, []);

   const styles = StyleSheet.create({
      container: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: 'orange',
        
      },
      logo: {
         color: 'white',
         fontSize: 48,
         fontWeight: 'bold',
      
         transform: [{translateY: logoMovement}],
      },
      insideText:{
        width:200,
        height:200,
        backgroundColor:'red',
        transform: [{translateY: insideMovement}],
      }
   });
   return (
      <Animated.View style={[styles.container,{
        // Bind opacity to animated value
        opacity: backgroundFade
      }]}>
         <Animated.Text style={[styles.logo,{
        // Bind opacity to animated value
        opacity: logoFade
      }]}>Logo</Animated.Text>
      <Animated.View style={[styles.insideText,{
        opacity:insideFade
      }]}>
        <Text>This is the text after</Text>
      </Animated.View>
      </Animated.View>
   );
}