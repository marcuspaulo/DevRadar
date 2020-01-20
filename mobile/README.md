yarn global add expo-cli

Após a instalação, é necessário realizar essa configuração do Expo-cli (Yarn)

https://yarnpkg.com/lang/en/docs/cli/global/

```sh
export PATH="$(yarn global bin):$PATH"

```

# Criando um projeto em Expo-cli

```sh
expo init mobile
```

#Install React-Navigate https://reactnavigation.org/docs/en/getting-started.html

```sh
yarn add react-navigation
# or with npm
# npm install react-navigation
```

```sh
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
```
### React-Navigation Stack 
```sh
$ yarn add react-navigation-stack
```

```sh
$ yarn add react-navigation-stack @react-native-community/masked-view react-native-safe-area-context
```
# Install MAPView - https://docs.expo.io/versions/latest/sdk/map-view/
```sh
$ expo install react-native-maps
```

### Install Expo Location
```sh
$ expo install expo-location
```

### Instal WebView
```sh
$ expo install react-native-webview
```
# Help 
https://github.com/Rocketseat/expo-common-issues