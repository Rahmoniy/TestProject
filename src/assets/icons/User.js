import * as React from 'react';
import Svg, {G, Circle, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G fill={props.color}>
        <Circle cx={12} cy={6} r={4} />
        <Path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5z" />
      </G>
    </Svg>
  );
}

SvgComponent.defaultProps = {
  size: 20,
  color: '#000000',
};

export default SvgComponent;
