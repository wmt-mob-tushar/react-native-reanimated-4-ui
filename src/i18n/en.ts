const en = {
  common: {
    ok: 'OK',
    cancel: 'Cancel',
    back: 'Back',
    logOut: 'Log Out',
  },
  loginScreen: {
    title: 'Sign In',
    subtitle: 'Enter your details below to continue.',
    emailFieldLabel: 'Email',
    passwordFieldLabel: 'Password',
    emailFieldPlaceholder: 'Enter your email address',
    passwordFieldPlaceholder: 'Enter your password',
    tapToLogIn: 'Tap to log in',
  },
  tabs: {
    home: 'Home',
    profile: 'Profile',
    settings: 'Settings',
  },
  homeScreen: {
    title: 'Home',
    welcome: 'Welcome back!',
  },
  profileScreen: {
    title: 'Profile',
  },
  settingsScreen: {
    title: 'Settings',
    language: 'Language',
  },
  errors: {
    invalidEmail: 'Invalid email address.',
  },
};

export default en;
export type Translations = typeof en;
