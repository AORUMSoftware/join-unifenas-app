import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default props => {
    if(props.test) {
        return props.children
    } else {
        return false
    }
}