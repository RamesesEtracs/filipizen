import {View, Text, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import styles from './createaccount.style';


export default function CreateAccount() {
    return(
        <View style={styles.container}>
            <View style={styles.back}>
            <Ionicons name="chevron-back" size={30} color="black" />
            <Image source={require('../../../../assets/images/createacc.png')}
            style={styles.image}
            />
            </View>
        </View>
    );
}