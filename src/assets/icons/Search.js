import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M19 19l-4.343-4.343m0 0A8 8 0 103.344 3.344a8 8 0 0011.313 11.313z"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

SvgComponent.defaultProps = {
  size: 15,
  color: '#000000',
};

export default SvgComponent;
