/*
 * @Author: Young
 * DSHARP
 * @flow 
 * @Date: 2018-02-08 17:53:17 
 * @Last Modified by: Young
 * @Last Modified time: 2018-02-12 11:32:29
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView
} from 'react-native';
import _ from 'lodash'
import { SelectMultipleButton, SelectMultipleGroupButton } from './index.js'

const themeColor = '#0D1014'
const ios_blue = '#007AFF'
const textColor = '#D3D3D3'
const multipleData = ['running', 'riding', 'reading', 'coding', 'Niuer']
const radioData = ['Female', 'Male', 'Other', 'Rather not say']

const multipleGroupData = [{ value: 'running' }, { value: 'riding' }, { value: 'reading' }, { value: 'coding' }, { value: 'Niuer' }]
const radioGroupData = [{ value: 'Female', displayValue: 'F' }, { value: 'Male', displayValue: 'M' }, { value: 'Other', displayValue: 'O' }, { value: 'Rather not say', displayValue: 'R' }]

const defaultSelectedIndex_group_insterest = [0,1,4]
const defaultSelectedIndex_group_gender = [1]

export default class App extends Component {

  constructor(props) {
    super(props)

    var selectedValues1=[]
    defaultSelectedIndex_group_insterest.map((item)=>{
      selectedValues1.push(multipleGroupData[item].value)
    })

    this.state = {
      multipleSelectedData: [],
      radioSelectedData: '',

      multipleSelectedData_group: selectedValues1,
      radioSelectedData_group: radioGroupData[defaultSelectedIndex_group_gender[0]].value,
    }
  }

  _singleTapMultipleSelectedButtons(interest) {
    if (this.state.multipleSelectedData.includes(interest)) {
      _.remove(this.state.multipleSelectedData, (ele) => { return ele === interest })
    } else {
      this.state.multipleSelectedData.push(interest)
    }

    this.setState(
      {
        multipleSelectedData: this.state.multipleSelectedData
      }
    )
  }

  _singleTapRadioSelectedButtons(valueTap, gender) {
    // Alert.alert('', valueTap)
    this.setState({
      radioSelectedData: gender
    })
  }

  _groupButtonOnSelectedValuesChange(selectedValues) {
    this.setState(
      {
        multipleSelectedData_group: selectedValues
      }
    )
  }

  _onRadioGroupButtonSingleTap(valueTap) {
    this.setState(
      {
        radioSelectedData_group: valueTap
      }
    )
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ justifyContent: 'center', height: 40, backgroundColor: '#15191F', marginTop: 20 }} >
          <Text style={{ fontSize: 18, color: 'white', }}>SelectMultipleButton</Text>
        </View>
        <Text style={styles.welcome}>
          implement the multiple-select buttons demo by SelectMultipleButton
        </Text>
        <Text style={{ color: ios_blue, marginLeft: 10 }}>
          I like {_.join(this.state.multipleSelectedData, ', ')}
        </Text>
        <View
          style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
          {
            multipleData.map((interest) =>
              <SelectMultipleButton
                key={interest}
                buttonViewStyle={{
                  borderRadius: 10,
                  height: 40
                }}
                textStyle={{
                  fontSize: 15,
                }}
                highLightStyle={{
                  borderColor: 'gray',
                  backgroundColor: 'transparent',
                  textColor: 'gray',
                  borderTintColor: ios_blue,
                  backgroundTintColor: ios_blue,
                  textTintColor: 'white',
                }}
                multiple={true}
                value={interest}
                selected={this.state.multipleSelectedData.includes(interest)}
                singleTap={(valueTap) => this._singleTapMultipleSelectedButtons(interest)} />
            )
          }
        </View>
        <View style={{ height: 1, backgroundColor: 'gray', marginTop: 20 }} />

        <Text style={styles.welcome}>
          implement the radio-select buttons demo by SelectMultipleButton
        </Text>
        <Text style={{ color: ios_blue, marginLeft: 10 }}>
          I am {this.state.radioSelectedData}
        </Text>
        <View
          style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
          {
            radioData.map((gender) =>
              <SelectMultipleButton
                key={gender}
                multiple={false}
                value={gender}
                displayValue={gender + '.'}
                selected={this.state.radioSelectedData === gender}
                singleTap={(valueTap) => this._singleTapRadioSelectedButtons(valueTap, gender)} />
            )
          }
        </View>
        <View style={{ height: 1, backgroundColor: 'gray', marginTop: 20 }} />
        <View style={{ justifyContent: 'center', height: 40, backgroundColor: '#15191F', marginTop: 20 }} >
          <Text style={{ color: 'white', fontSize: 18 }}>
            SelectMultipleGroupButton</Text>
        </View>

        <Text style={styles.welcome}>
          implement the multiple-select buttons demo by SelectMultipleGroupButton
        </Text>
        <Text style={{ color: ios_blue, marginLeft: 10 }}>
          I like {_.join(this.state.multipleSelectedData_group, ', ')}
        </Text>
        <SelectMultipleGroupButton
          defaultSelectedIndexes={defaultSelectedIndex_group_insterest}
          containerViewStyle={{
            justifyContent: 'flex-start'
          }}
          highLightStyle={{
            borderColor: 'gray',
            backgroundColor: 'transparent',
            textColor: 'gray',
            borderTintColor: ios_blue,
            backgroundTintColor: 'transparent',
            textTintColor: ios_blue,
          }}
          onSelectedValuesChange={(selectedValues) => this._groupButtonOnSelectedValuesChange(selectedValues)}
          group={multipleGroupData} />
        <View style={{ height: 1, backgroundColor: 'gray', marginTop: 20 }} />

        <Text style={styles.welcome}>
          implement the radio-select buttons demo by SelectMultipleGroupButton
        </Text>
        <Text style={{ color: 'green', marginLeft: 10 }}>
          I am {this.state.radioSelectedData_group}
        </Text>
        <SelectMultipleGroupButton
          multiple={false}
          defaultSelectedIndexes={defaultSelectedIndex_group_gender}
          containerViewStyle={{
            flexDirection: 'column',
            width: 100
          }}
          highLightStyle={{
            borderColor: 'gray',
            backgroundColor: 'transparent',
            textColor: 'gray',
            borderTintColor: 'green',
            backgroundTintColor: 'green',
            textTintColor: 'white',
          }}
          buttonViewStyle={{
            width: 40,
            height: 40,
            borderRadius: 20
          }}
          singleTap={(valueTap) => { this._onRadioGroupButtonSingleTap(valueTap) }}
          group={radioGroupData} />
        <View style={{ height: 1, backgroundColor: 'gray', marginTop: 20 }} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor,
  },
  welcome: {
    margin: 10,
    marginTop: 30,
    color: textColor
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
