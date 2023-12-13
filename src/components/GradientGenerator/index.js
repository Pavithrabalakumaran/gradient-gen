import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  ResponsiveContainer,
  Heading,
  SpecificDirection,
  GradientDirectionList,
  ColorPickerDes,
  ColorPickerContainer,
  CustomInputAndColorContainer,
  ColorValue,
  CustomInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColor: '#8ae323',
    toColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b,`,
  }

  onGenerate = () => {
    const {fromColor, toColor, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColor}, ${toColor}`,
    })
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }

  onChangeToColor = event => {
    this.setState({toColor: event.target.value})
  }

  onChangeFromColor = event => {
    this.setState({fromColor: event.target.value})
  }

  render() {
    const {
      activeGradientDirection,
      fromColor,
      toColor,
      gradientValue,
    } = this.state

    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <SpecificDirection> Choose Direction </SpecificDirection>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                gradientDirectionDetails={eachDirection}
                isActive={activeGradientDirection === eachDirection.value}
                clickGradientDirectionItem={this.clickGradientDirectionItem}
              />
            ))}
          </GradientDirectionList>

          <ColorPickerDes>Pick the Colors</ColorPickerDes>
          <ColorPickerContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{fromColor}</ColorValue>
              <CustomInput
                onChange={this.onChangeFromColor}
                value={fromColor}
                type="color"
              />
            </CustomInputAndColorContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{toColor}</ColorValue>
              <CustomInput
                onChange={this.onChangeToColor}
                value={toColor}
                type="color"
              />
            </CustomInputAndColorContainer>
          </ColorPickerContainer>

          <GenerateButton onClick={this.onGenerate}>Generate</GenerateButton>
        </ResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
