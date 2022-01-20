/* eslint-disable */
const React = require('react-native');
const { StyleSheet } = React;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: "space-around",

    height: 350,
    backgroundColor: '#A1c99A',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  yellowItem: {
    height: 100,
    borderRadius: 20,
    marginHorizontal: 30,
    marginVertical: 35,
    backgroundColor: '#ffffc2',
  },

  gapCenter: {
    height: 20
  },
  body: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",

    height: 350,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: '#c8c8fA',
  },

  blueItem: {
    backgroundColor: '#4f82c0',
    height: 130,
    width: 130,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 15,
  },
});
