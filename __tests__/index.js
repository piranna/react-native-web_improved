import {
  Alert,
  AlertIOS,
  DrawerLayoutAndroid,
  Modal,
  RefreshControl,
  Slider,
  StatusBar,
  TabBarIOS,
  WebView
} from '..'


test('exports', function()
{
  expect(Alert.alert.name).toBe('alert')
  expect(AlertIOS.alert.name).toBe('alert')
  expect(AlertIOS.prompt.name).toBe('prompt')
  expect(DrawerLayoutAndroid.name).toBe('DrawerLayout')
  expect(Modal.name).toBe('Modal')
  expect(RefreshControl.name).toBe('RefreshControl')
  expect(Slider.name).toBe('Slider')
  expect(StatusBar.name).toBe('StatusBar')
  expect(TabBarIOS.name).toBe('TabBarIOS')
  expect(WebView.name).toBe('_class')
})
