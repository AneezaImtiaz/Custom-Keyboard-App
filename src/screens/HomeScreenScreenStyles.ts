import { StyleSheet } from 'react-native';
import Theme from '../../Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Theme.colors.background.default,
  },
} as const);
