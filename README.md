
# React Native SelectMultiple Button

This library is a button (or a group buttons) supporting multiple or radio selection by building with React Native


You can specify any **Layout** and **Style** for container view,button view and text through **View Style Props**, **Layout Props** and **Text Style Props** supporting by React Native


## Example running in iOS and Andorid(captured by GIPHY CAPTURE)

![captured by GIPHY CAPTURE](https://github.com/danceyoung/react-native-selectmultiple-button/blob/master/screenCapture/ios-screencapture.gif)

## Instruction

 - SelectMultipleButton    
 - SelectMultiple**Group**Button

### SelectMultipleButton

You need to set the props **selected** for highlighting button'status and manage the data selected by **singleTap(valueTap)** event through hard coding yourself.

### SelectMultipleGroupButton
You needn't to set these settings like using SelectMultipleButton,because these features are build in the SelectMultipleGroupButton.what you do is set the event **singleTap(valueTap)** for holding the value tap and the event **onSelectedValuesChange(selectedValues)** for holding the values selected array. 

## Installation

cd your project root direction

    $ npm install react-native-selectmultiple-button --save

## Usage

code example


    
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
    import { SelectMultipleButton, SelectMultipleGroupButton } from 'react-native-selectmultiple-button'
    
    const themeColor = '#0D1014'
    const ios_blue = '#007AFF'
    const textColor = '#D3D3D3'
    const multipleData = ['running', 'riding', 'reading', 'coding', 'Niuer']
    const radioData = ['Female', 'Male', 'Other', 'Rather not say']
    
    const multipleGroupData = [{ value: 'running' }, { value: 'riding' }, { value: 'reading' }, { value: 'coding' }, { value: 'Niuer' }]
    const radioGroupData = [{ value: 'Female', displayValue: 'F' }, { value: 'Male', displayValue: 'M' }, { value: 'Other', displayValue: 'O' }, { value: 'Rather not say', displayValue: 'R' }]
    
    export default class App extends Component {
    
      constructor(props) {
        super(props)
        this.state = {
          multipleSelectedData: [],
          radioSelectedData: '',
    
          multipleSelectedData_group: [],
          radioSelectedData_group: '',
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
                    selectMultiple={true}
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
              I'm {this.state.radioSelectedData}
            </Text>
            <View
              style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
              {
                radioData.map((gender) =>
                  <SelectMultipleButton
                    key={gender}
                    selectMultiple={false}
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
              I'm {this.state.radioSelectedData_group}
            </Text>
            <SelectMultipleGroupButton
              selectMultiple={false}
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

## Props

### SelectMultipleButton

|props  |type  |required  |desc  |
|--|--|--|--|
|`selectMultiple`  |bool  |no  |default is true.the `selectMultiple` prop determines multiple or radio selection  |
|`selected`  |bool  |no  |default is false.the `selected` prop determines whether the button is highlighted  |
|`value`  |one of types(string,number)  |yes  |button's id,or your object id/code   |
