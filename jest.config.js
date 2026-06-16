module.exports = {
  preset: '@react-native/jest-preset',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|@react-navigation|@reduxjs/toolkit|redux|redux-persist|reselect|immer|react-redux)/)',
  ],
};
