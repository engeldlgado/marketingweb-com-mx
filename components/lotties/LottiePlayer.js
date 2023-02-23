import { replaceColor } from 'lottie-colorify'
import Lottie from 'lottie-react'
import MarketingLottie from '../lotties/marketing.json'

const LottieMkw = ({ color }) => {
  if (color === 'dark') {
    return (
      <Lottie
        className='w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-[1000px] lg:max-w-none'
        animationData={replaceColor([231, 115, 0], '#BBBBBB', MarketingLottie)}
        loop
      />
    )
  } else {
    return (
      <Lottie
        className='w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-[1000px] lg:max-w-none'
        animationData={replaceColor([231, 115, 0], '#e77300', MarketingLottie)}
        loop
      />
    )
  }
}

export default LottieMkw
