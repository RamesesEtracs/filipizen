import React from 'react';
import { Dimensions } from 'react-native';
import {StyleSheet} from 'react-native';

const {width} = Dimensions.get('window')

const dialPadSize = width * .2
const dialPadTextSize = dialPadSize * .4
import { color, textColor, font } from "../../constants"



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8EB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dialpadtext: {
        fontSize: dialPadTextSize,
        color: 'white',
        
    },
    mpin: {
        marginTop: 40,
        fontWeight: '600',
        color: '#3D3D3D',
        fontSize: 19,
    },
    image: {
        marginTop: 30,
        width: 195,
        height: 55,
        marginBottom: 50,
    },
    forgotmpin: {
        marginTop: 50,
        color: '#3D3D3D',
        fontWeight: '400',
    },
    account: {
        marginTop: 5,
        color: '#3D3D3D',
        flexDirection: 'row',
        gap: 5,      
    },
    text: {
        fontWeight: '700',
        color: '#3D3D3D',
        
    },
    signup: {
        color: '#F2BB4E',
        fontWeight: '700',
    }

    
});
export default styles;
