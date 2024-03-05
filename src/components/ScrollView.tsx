import {
  View as DefaultView,
  ScrollView as Sw,
  ScrollViewProps,
} from 'react-native';
export type SViewProps = DefaultView['props'] & ScrollViewProps;

export function ScrollView(props: SViewProps) {
  const {style, ...otherProps} = props;

  return <Sw style={[style]} {...otherProps} />;
}
