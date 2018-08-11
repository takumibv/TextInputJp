# TextInput

A `<TextInput>` component for react-native

TextInputの日本語入力時に変換ができなくなる問題を解消.
React Nativeのバージョンが0.54以降で発生するバグらしく、0.53.0以前に戻せば解決するが、
バージョンを戻さずに解決する方法として、このコンポーネントを使用する。

iOSにて以下を対応. Androidは未確認.
- 日本語入力で変換をできるようにする。
- x印をタップするとクリアする。
- フォーカス時にスタイルを変える。

### dependency
- `react-native` >= "0.55",
- `native-base` >= "2.4.0",

### Usage

```js

constructor() {
  ...

  this.state = {
    value: '',
  };

  ...
}

...

render() {
  ...
  return(
    ...
    <TextInput
      onChangeText={value => this.setState({ value })}
      placeholder="テキストを入力"
      value={value}
    />
    ...
  );
}
```
