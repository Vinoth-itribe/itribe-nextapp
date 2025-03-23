import type React from "react"
import Lottie from "react-lottie-player"
import lottieJson from "../../public/Lottie/lottie-animation-03.json"

const LottieIcon3: React.FC<{ width?: number; height?: number }> = ({ width = 64, height = 64 }) => {
  return <Lottie loop animationData={lottieJson} play style={{ width, height }} />
}

export default LottieIcon3

