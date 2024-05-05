import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4.333 5.667h-4V4.333h4v-4h1.334v4h4v1.334h-4v4H4.333v-4z"
        fill={props.color}
      />
    </Svg>
  );
}

SvgComponent.defaultProps = {
  size: 15,
  color: '#ffffff',
};

export default SvgComponent;
