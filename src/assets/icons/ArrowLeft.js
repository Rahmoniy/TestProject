import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12 5.25H2.873l4.192-4.192L6 0 0 6l6 6 1.058-1.057L2.872 6.75H12v-1.5z"
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
