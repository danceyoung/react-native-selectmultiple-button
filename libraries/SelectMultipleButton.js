/*
 * @Author: Young
 * DSHARP
 * @flow
 * @Date: 2018-02-06 13:54:25
 * @Last Modified by: Young
 * @Last Modified time: 2018-08-31 14:03:36
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Alert,
  StyleSheet,
} from 'react-native'

const ios_blue = '#007AFF'

export default class SelectMultipleButton extends Component {

  static propTypes = {
    selected: PropTypes.bool,

    value: PropTypes.oneOfType(
      [
        PropTypes.string,
        PropTypes.number
      ]
    ).isRequired,
    displayValue: PropTypes.oneOfType(
      [
        PropTypes.string,
        PropTypes.number
      ]
    ),

    highLightStyle: PropTypes.shape({
      borderColor: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      textColor: PropTypes.string.isRequired,
      borderTintColor: PropTypes.string.isRequired,
      backgroundTintColor: PropTypes.string.isRequired,
      textTintColor: PropTypes.string.isRequired,
    }),

    buttonViewStyle: PropTypes.object,
    textStyle: PropTypes.object,
    singleTap: PropTypes.func,

  }

  static defaultProps = {
    selected: false,
    highLightStyle: {
      borderColor: 'gray',
      backgroundColor: 'transparent',
      textColor: 'gray',
      borderTintColor: ios_blue,
      backgroundTintColor: 'transparent',
      textTintColor: ios_blue,
    },

    singleTap: (valueTap) => { },
  }

  constructor(props) {
    super(props)
    this.state = {
      selected: false,
    }
  }

  componentDidMount() {
    this.setState({
      selected: this.props.selected,
    })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.selected !== nextProps.selected) {
      return {
        selected: nextProps.selected
      }
    }
    return null;
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.singleTap(this.props.value)
        }
        }>

        <View
          style={
            [
              styles.button,
              this.props.buttonViewStyle,
              {
                borderColor: this.state.selected ? this.props.highLightStyle.borderTintColor : this.props.highLightStyle.borderColor,
                backgroundColor: this.state.selected ? this.props.highLightStyle.backgroundTintColor : this.props.highLightStyle.backgroundColor,
              }
            ]
          }>
          <Text style={
            [
              styles.text,
              this.props.textStyle,
              { color: this.state.selected ? this.props.highLightStyle.textTintColor : this.props.highLightStyle.textColor }
            ]
          }>
            {this.props.displayValue === undefined ? this.props.value : this.props.displayValue}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 5,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1
  },
  text: {
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  }
})
