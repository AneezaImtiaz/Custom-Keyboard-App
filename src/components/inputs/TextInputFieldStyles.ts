import { StyleSheet } from 'react-native';
import Theme from '../../../Theme';
import Responsive from '../../utils/Responsive';

export default StyleSheet.create({
  displayArea: {
    borderWidth: 1,
    borderColor: Theme.colors.gray.border,
    borderRadius: 5,
    justifyContent: 'center',
    marginHorizontal: Theme.spacing.default,
    padding: Theme.spacing.half,
    height: Responsive.font(50),
    marginVertical: Theme.spacing.large
  },
  displayText: {
    fontSize: Theme.text.size.default,
    color: Theme.colors.text.default,
  },
} as const);
