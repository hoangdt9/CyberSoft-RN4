/* eslint-disable */
import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from './styles';

export default class DemoStyle extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.purle, styles.block]} />
                <View style={[styles.blue, styles.block]} />
                <View style={[styles.yellow, styles.block]} />
                <View style={[styles.green, styles.block]} />
            </View>
        );
    }
}