import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function Header() {

    return (
        <View style={styles.header}>
          <Image
            source={require('../assets/images/white-sun.png')}
            style={styles.logo}
            alt="logo of a sun"
          />
          <Text style={styles.title}>Solara</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
      width: 40,
      height: 40,
    },
    title: {
      fontSize: 24,
      fontWeight: 'normal',
    }
});