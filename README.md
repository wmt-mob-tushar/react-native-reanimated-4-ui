# KbApp

A bare React Native (TypeScript) boilerplate built for iOS and Android, with Redux Toolkit for global state, React Navigation for typed routing, i18n, and full light/dark theming.

## Stack

| Concern | Choice |
| --- | --- |
| Framework | React Native 0.86 (bare workflow, New Architecture) |
| Language | TypeScript |
| State | Redux Toolkit + React Redux + redux-persist (AsyncStorage) |
| Navigation | React Navigation v7 (native-stack root + bottom-tabs) |
| Styling | `StyleSheet` per-component `styles.ts` + theme tokens (no inline styles) |
| Theming | Light / Dark / System, stored in Redux |
| i18n | i18next + react-i18next + react-native-localize (RTL aware) |
| Icons | react-native-vector-icons (Ionicons) |
| Networking | axios instance with auth + 401 interceptors |

## Prerequisites

- Node.js >= 20
- Bun (used as the package manager) — https://bun.sh
- Watchman (recommended on macOS)
- **Android:** JDK 17, Android Studio + SDK, an emulator or device
- **iOS (macOS only):** Xcode, CocoaPods (`sudo gem install cocoapods`)

Follow the official environment setup if needed: https://reactnative.dev/docs/set-up-your-environment

## Setup

```bash
bun install

# iOS only (macOS):
cd ios && bundle install && bundle exec pod install && cd ..
```

## Run

Start Metro:

```bash
bun start
```

In a second terminal:

```bash
bun android    # build & launch on Android emulator/device
bun ios        # build & launch on iOS simulator (macOS)
```

## Quality checks

```bash
bun run typecheck   # tsc --noEmit
bun run lint        # eslint
bun test            # jest
```

## Project structure

```
src/
├── api/                axios instance, request helpers, endpoints
├── component/          reusable UI (component/ui/*), each with its own styles.ts
│   └── ui/             Text, Button, Screen
├── config/             env config (base/dev/prod)
├── i18n/               i18next setup, translate(), en/es resources
├── reduxToolkit/       store, typed hooks, slices (auth, theme)
├── router/             typed navigation (Routes, navigationTypes, stacks, tabs)
├── screens/            Authenticated/* and UnAuthenticated/*, each with styles.ts
├── theme/              colors, colorsDark, spacing, typography, theme, useAppTheme, useStyles
└── utils/              global types/enums + helpers
```

## Styling approach

There are no inline styles. Every component and screen has a sibling `styles.ts` exporting
`createStyles(theme)` which returns a `StyleSheet`. Components consume it with the `useStyles`
hook, so styles automatically react to the active light/dark theme:

```ts
const styles = useStyles(createStyles);
```

## State management

- `reduxToolkit/store.ts` configures the store and persists `auth` + `theme` to AsyncStorage.
- `reduxToolkit/hooks.ts` exports typed `useAppDispatch` / `useAppSelector`.
- Slices: `authSlice` (token, user, isAuthenticated) and `themeSlice` (light/dark/system).

Authentication is gated at the root navigator: when `auth.isAuthenticated` is true the bottom-tab
app renders, otherwise the Login stack renders.

## Theming

`useAppTheme()` resolves the active `Theme` from the persisted scheme (`light` / `dark` / `system`,
where `system` follows the OS via `Appearance`). Change it from the Settings screen.

## Internationalization

Translations live in `src/i18n/en.ts` and `src/i18n/es.ts`. Use the typed `tx` prop on `Text` /
`Button`, or call `translate('namespace:key')`. The device locale is detected at startup and RTL
layouts are enabled automatically for RTL languages.
