# react-native-web_improved
batteries-included version of `react-native-web`

This module piggy-back on top of
[react-native-web](https://github.com/necolas/react-native-web) adding support
for the missing Components and APIs availables in vanilla React Native.

Currently it add support for `Alert`, `AlertIOS`, `DrawerLayoutAndroid`,
`Modal`, `RefreshControl`, `Slider`, `StatusBar`, `TabBarIOS` and `WebView`,
being the main missing ones `TouchableNativeFeedback` and `NavigatorIOS`. If
there's some API you are missing and know of a module that "polyfill" its
functionality or you can implement it yourself, don't exhitate to create an
issue asking to include it. Pull-requests are welcome :-)

## How to use

Just include `react-native-web_improved` as dependency of your project instead
of `react-native-web`, and do the alias pointing to it. After that, everything
should work as usual. If you are using the `react-native-web` Babel plugin you
would need to change it's references to use `react-native-web_improved` instead,
no more.
