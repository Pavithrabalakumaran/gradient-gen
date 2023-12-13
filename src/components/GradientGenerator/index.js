import {Component} from "react"

import GradientDirectionItem from "../GradientDirectionItem"

import {GradientGeneratorContainer, ResponsiveContainer, Heading, SpecificDirection} from "./styledComponents"

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
        fromColor:  #8ae323;
        toColor:  #014f7b;
        gradientValue: `to ${gradientDirectionsList[0].value}, fromColor, toColor,`
    }
    render() {
        const {activeGradientDirection, fromColor, toColor,gradientValue} = this.state 

        return (
            <GradientGeneratorContainer data-testid = "gradientGenerator"
            gradientValue = {gradientValue}>
            <ResponsiveContainer>
                <Heading>Create a CSS Color Gradient</Heading>
                <SpecificDirection> Choose Direction </SpecificDirection>
            </ResponsiveContainer>
            </GradientGeneratorContainer>
        )
    }
}
