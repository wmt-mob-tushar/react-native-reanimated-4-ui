module.exports = {
  preset: '@react-native/jest-preset',
  setupFiles: ['./jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|@react-navigation|@reduxjs/toolkit|redux|redux-persist|reselect|immer|react-redux|react-native-unistyles|react-native-nitro-modules|react-native-edge-to-edge)/)',
  ],
};
