import type React from "react"
import Lottie from "react-lottie-player"
import lottieJson from "../../public/lottie/wired-outline-212-arrow-1-rounded-hover-pinch.json"

interface LottieIconProps {
  width?: number
  height?: number
}

const LottieIcon: React.FC<LottieIconProps> = ({ width = 64, height = 64 }) => {
  return <Lottie loop animationData={lottieJson} play style={{ width, height }} />
}

export default LottieIcon

