module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src',
          '@assets': './assets',
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    ],
    ['react-native-unistyles/plugin', { root: 'src', autoProcessPaths: ['App.tsx'] }],
    // react-native-worklets/plugin (Reanimated 4) MUST be listed last.
    'react-native-worklets/plugin',
  ],
};
