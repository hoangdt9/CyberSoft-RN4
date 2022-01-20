/* eslint-disable */
import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import styles from './styles';

export default function Buoi3() {
    return <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.header}>
                <View style={styles.yellowItem} />
                <View style={styles.yellowItem} />
            </View>
            <View style={styles.gapCenter}></View>
            <View style={styles.body}>
                <View style={styles.blueItem} />
                <View style={styles.blueItem} />
                <View style={styles.blueItem} />
                <View style={styles.blueItem} />
            </View>
        </ScrollView>
    </SafeAreaView>
}