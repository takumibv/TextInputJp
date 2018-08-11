import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, Button, Input } from 'native-base';
import { styles } from './styles';

export default class TextInput extends Component {
  constructor() {
    super();

    this.state = {
      focus: false,
    };

    this.on_focus_bind = this.onFocus.bind(this);
    this.on_blur_bind = this.onBlur.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const { value } = this.props;

    if (nextProps.value !== '' && value !== nextProps.value) {
      return false;
    }

    return true;
  }

  onFocus() {
    const { onFocus } = this.props;

    if (onFocus) {
      onFocus();
    }

    this.setState({ focus: true });
  }

  onBlur() {
    const { onBlur } = this.props;

    if (onBlur) {
      onBlur();
    }

    this.setState({ focus: false });
  }

  render() {
    const {
      value,
      style: inputStyleOverrides,
      onChangeText,
      ...props
    } = this.props;
    const { focus } = this.state;

    return (
      <View style={{ position: 'relative' }}>
        <Input
          style={[
            focus ? styles.input_focus : styles.input,
            inputStyleOverrides,
          ]}
          {...props}
          onChangeText={text => onChangeText(text)}
          onFocus={this.on_focus_bind}
          onBlur={this.on_blur_bind}
          placeholderTextColor="rgba(0,0,0,0.3)"
          value={value}
        />
        {value !== '' && (
          <Button
            style={styles.clear_button}
            transparent
            onPress={() => onChangeText('')}
          >
            <Icon type="Ionicons" name="ios-close-circle-outline" />
          </Button>
        )}
      </View>
    );
  }
}
