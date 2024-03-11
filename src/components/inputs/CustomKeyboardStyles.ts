import { StyleSheet } from 'react-native';
import Theme from '../../../Theme';
import Responsive from '../../utils/Responsive';

export default StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.gray.light,
    padding: Theme.spacing.half,
    justifyContent: 'center',
  },
  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  key: {
    width: Responsive.font(30),
    height: Responsive.font(45),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Theme.spacing.half,
    marginHorizontal: Responsive.font(3),
    backgroundColor: Theme.colors.background.default,
    borderRadius: 5,
  },
  keyText: {
    fontSize: Theme.text.size.large,
  },
  toggleKey: {
    flexGrow: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.gray.dark,
    borderRadius: 5,
  },
} as const);
