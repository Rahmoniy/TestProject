import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={15}
      height={14}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M14.087 3.226L11.274.413a.563.563 0 00-.399-.163h-9A1.125 1.125 0 00.75 1.375v11.25a1.125 1.125 0 001.125 1.125h11.25a1.125 1.125 0 001.125-1.125v-9a.563.563 0 00-.163-.4zM5.25 1.375h4.5v2.25h-4.5v-2.25zm4.5 11.25h-4.5v-4.5h4.5v4.5zm1.125 0v-4.5A1.125 1.125 0 009.75 7h-4.5a1.125 1.125 0 00-1.125 1.125v4.5h-2.25V1.375h2.25v2.25A1.125 1.125 0 005.25 4.75h4.5a1.125 1.125 0 001.125-1.125v-2.02l2.25 2.25v8.77h-2.25z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
