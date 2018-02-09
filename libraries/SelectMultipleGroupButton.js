/*
 * @Author: Young
 * DSHARP
 * @flow 
 * @Date: 2018-02-07 14:08:34 
 * @Last Modified by: Young
 * @Last Modified time: 2018-02-09 14:14:11
 */
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import PropTypes from 'prop-types'
import _ from 'lodash'
import SelectMultipleButton from './SelectMultipleButton'

const ios_blue = '#007AFF'

export default class SelectMultipleGroupButton extends Component {

  static propTypes = {
    selectMultiple: PropTypes.bool,

    group: PropTypes.arrayOf(PropTypes.shape({
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
    })).isRequired,

    highLightStyle: PropTypes.shape({
      borderColor: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      textColor: PropTypes.string.isRequired,
      borderTintColor: PropTypes.string.isRequired,
      backgroundTintColor: PropTypes.string.isRequired,
      textTintColor: PropTypes.string.isRequired,
    }),
    containerViewStyle: PropTypes.object,
    buttonViewStyle: PropTypes.object,
    textStyle: PropTypes.object,

    singleTap: PropTypes.func,
    onSelectedValuesChange: PropTypes.func,
  }

  static defaultProps = {
    selectMultiple: true,
    singleTap: (valueTap) => { },
    onSelectedValuesChange: (selectedValues) => { }
  }

  constructor(props) {
    super(props)

    this.state = {
      multipleSelectedData: [],
      radioSelectedData: ''
    }
  }

  _singleTapMultipleSelectedButtons(valueTap) {
    if (this.props.selectMultiple) {
      if (this.state.multipleSelectedData.includes(valueTap)) {
        _.remove(this.state.multipleSelectedData, (item) => { return item === valueTap })
      } else {
        this.state.multipleSelectedData.push(valueTap)
      }


      this.props.onSelectedValuesChange(this.state.multipleSelectedData)

      this.setState(
        {
          multipleSelectedData: this.state.multipleSelectedData
        }
      )
    } else {
      this.setState(
        {
          radioSelectedData: valueTap
        }
      )
    }

    this.props.singleTap(valueTap)

  }

  _selectedStatus(value) {
    if (this.props.selectMultiple) {
      return this.state.multipleSelectedData.includes(value)
    } else {
      return this.state.radioSelectedData === value
    }
  }

  render() {
    return (
      <View
        style={
          [
            {
              flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'
            },
            this.props.containerViewStyle
          ]
        }>
        {
          this.props.group.map((ele, index) =>
            <SelectMultipleButton
              key={ele.value + index}
              buttonViewStyle={this.props.buttonViewStyle}
              textStyle={this.props.textStyle}
              highLightStyle={this.props.highLightStyle}
              selectMultiple={this.props.selectMultiple}
              value={ele.value}
              displayValue={ele.displayValue}
              selected={this._selectedStatus(ele.value)}
              singleTap={(valueTap) => this._singleTapMultipleSelectedButtons(valueTap)} />
          )
        }
      </View>
    )
  }
}

