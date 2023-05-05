import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { ArViewerView } from "react-native-ar-viewer";

export default function App() {
  return (
      <ArViewerView 
        style={{flex: 1}}
        model={Platform.OS === 'android' ? 'dice.glb' : 'dice.usdz'}
        lightEstimation
        manageDepth
        allowRotate
        allowScale
        allowTranslate
        disableInstantPlacement
        onStarted={() => console.log('started')}
        onEnded={() => console.log('ended')}
        onModelPlaced={() => console.log('model displayed')}
        onModelRemoved={() => console.log('model not visible anymore')}
        planeOrientation="both" />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
