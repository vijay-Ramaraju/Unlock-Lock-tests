// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  ImageIcon,
  LockedPara,
  LockContainer,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [start, setStart] = useState(false)

  const onButtonClick = () => {
    setStart(prevState => !prevState)
  }

  const images = start
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const text = start ? 'Unlocked' : 'Locked'
  const buttonText = start ? 'Lock' : 'Unlock'
  const altText = start ?   'unlock' :'lock'
  return (
    <MainContainer>
      <LockContainer>
        <ImageIcon src={images} alt={altText} />
        <LockedPara>Your Device is {text}</LockedPara>
      </LockContainer>

      <LockButton onClick={onButtonClick}>{buttonText}</LockButton>
    </MainContainer>
  )
}
export default Unlock
