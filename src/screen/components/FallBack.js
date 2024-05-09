import { StyleSheet, Text, View, Image} from 'react-native'
import React, { useState,useEffect } from 'react';

const FallBack = () => {
    const [text, setText] = useState('');
    const sentence = "Start Adding Your Task...";
    const typingSpeed = 100;

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
          setText(sentence.substring(0, currentIndex + 1));
          currentIndex++;
    
          if (currentIndex === sentence.length) {
            currentIndex = 0; 
          }
        }, typingSpeed);
    
        return () => clearInterval(typingInterval);
      }, []);


  return (
    <View style={styles.view}>
     <Image source={require("../../../assets/todo.png")} style={styles.imageView}/>
     <Text style={styles.textTask}>{text}</Text>
    </View>
  )
}

export default FallBack

const styles = StyleSheet.create({

    view: {
       alignItems: "center", 
       paddingBottom: 100
       
    },

    imageView: {
        height:300,
        width:300,

    },
    textTask:{
        marginTop: 10,
        fontSize:20,
        fontWeight: "bold",
        color:"#5e53bd",
    }
})