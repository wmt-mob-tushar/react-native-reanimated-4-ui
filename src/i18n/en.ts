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
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark',
    language: 'Language',
  },
  errors: {
    invalidEmail: 'Invalid email address.',
  },
  lessonsScreen: {
    title: 'Letters',
    subtitle: 'Learn ABC with fun sounds',
    lessons: '26 lessons',
    duration: '1hr 30 min',
    aiBuddyLabel: 'Your A.i buddy',
    aiBuddyMessage: "You're learning great today!",
    replay: 'Replay',
    continue: 'Continue',
    startLesson: 'Start Lesson',
    aAppleTitle: 'A for Apple',
    aAppleDesc: 'Learn the sound of A and objects that start with A',
    bBallTitle: 'B for Ball',
    bBallDesc: 'Recognize the letter B and its phonetic sound',
    dDogTitle: 'D for Dog',
    dDogDesc: 'Hear and repeat the D sound',
    cCatTitle: 'C for Cat',
    cCatDesc: 'Learn the "C" sound with fun animations',
    eElephantTitle: 'E for Elephant',
    eElephantDesc: 'Learn the "E" sound with fun animations',
  },
};

export default en;
export type Translations = typeof en;
