import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';

const ListItem = (props) => {
  return (
    <TouchableOpacity key={props.id} 
        style={[styles.container, { borderTopWidth: props.index === 0 ? 0 : 1}]} 
        onPress={props.onPress}>
        <Text style={styles.title}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
    container:{
        padding: 20,
        marginBottom: 10,
        width: '100%',
        borderColor: Colors.gray7
    },
    title: {
        fontSize: 20,
        color: Colors.gray2
    }
});
