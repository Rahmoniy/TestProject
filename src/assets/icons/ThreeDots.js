import * as React from "react"
import Svg, { Path } from "react-native-svg"
import colors from '../style/colors'

function SvgComponent(props) {
  return (
    <Svg
      fill={props.color}
      width={props.size}
      height={props.size}
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zM13 26c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zM13 6c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z" />
    </Svg>
  )
}
SvgComponent.defaultProps = {
  size: 15,
  color: colors.lightBlack,
}
export default SvgComponent
