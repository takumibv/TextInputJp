import { StyleSheet } from 'react-native';

const inputStyle = {
  fontSize: 18,
  textAlign: 'left',
  height: 50,
  borderBottomColor: 'rgba(0, 0, 0, .3)',
  borderBottomWidth: 0.5,
  marginBottom: 30,
  paddingRight: 32,
};

export const styles = StyleSheet.create({
  input: {
    ...inputStyle,
  },
  input_focus: {
    ...inputStyle,
    borderBottomColor: 'rgba(46, 127, 213, 1)',
  },
  clear_button: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
