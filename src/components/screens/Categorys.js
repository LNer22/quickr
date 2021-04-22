import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Drawer } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Categorys = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Drawer.Item
                style={{ backgroundColor: '#648bff' }}
                label="Personal"
                onPress={()=>navigation.navigate('Home',{category: 'Personal'})}
            />
            <Drawer.Item
                style={{ backgroundColor: '#64ffa5' }}
                label="Work"
                onPress={()=>navigation.navigate('Home',{category: 'Work'})}
            />
            <Drawer.Item
                style={{ backgroundColor: '#cbff64' }}
                label="Ideas"
                onPress={()=>navigation.navigate('Home',{category: 'Ideas'})}

            />
            <Drawer.Item
                style={{ backgroundColor: '#ffdd64' }}
                label="List"
                onPress={()=>navigation.navigate('Home',{category: 'List'})}

            />
        </View>
    )
}

export default Categorys

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
      }
})
