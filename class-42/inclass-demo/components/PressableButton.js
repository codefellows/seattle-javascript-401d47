import styled from 'styled-components/native'

const ButtonContainer = styled.TouchableOpacity`
  border-radius: 10px;
  width: 150px;
  background-color: #155e75;
  display: flex;
  justify-content: center;
`

const ButtonText = styled.Text`
  color: #000;
  font-size: 20px;
  text-align: center;
  text-transform: capitalize;
`


const PressableButton = (bgColor, textColor, children) => {
  return (
    <ButtonContainer bgColor={bgColor}>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  )
}

export default PressableButton;
