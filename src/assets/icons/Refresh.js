import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6 0C3.445 0 1.309 1.58.437 3.813l.922.374C2.088 2.32 3.856 1 6 1c1.62 0 3.067.795 3.969 2H8v1h3.5V.5h-1v1.547A5.964 5.964 0 006 0zm4.64 7.813C9.912 9.68 8.145 11 6 11c-1.638 0-3.079-.806-3.985-2H4V8H.5v3.5h1V9.953A5.995 5.995 0 006 12c2.555 0 4.691-1.58 5.563-3.813l-.923-.374z"
        fill="#088395"
      />
    </Svg>
  );
}

export default SvgComponent;
