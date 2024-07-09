import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M10 12v5M14 12v5M4 7h16M6 10v8a3 3 0 003 3h6a3 3 0 003-3v-8M9 5a2 2 0 012-2h2a2 2 0 012 2v2H9V5z" />
      </G>
    </Svg>
  )
}
SvgComponent.defaultProps = {
  size: 15,
  color: '#ffffff',
};
export default SvgComponent
