
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
[App.js](https://github.com/danceyoung/react-native-selectmultiple-button/blob/master/App.js)

code snap

    import { SelectMultipleButton, SelectMultipleGroupButton } from 'react-native-selectmultiple-button'
    
   
    <SelectMultipleButton
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

## Props

### SelectMultipleButton

|props  |type  |required  |desc  |
|--|--|--|--|
|`selectMultiple`  |bool  |no  |default is true.the `selectMultiple` prop determines multiple or radio selection  |
|`selected`  |bool  |no  |default is false.the `selected` prop determines whether the button is selected and highlighted  |
|`value`  |one of types(string,number)  |yes  |your business key   |
|`displayValue`  |one of types(string,number)  |no  |default is == `value` prop if not set `displayValue` prop. displayed as button's text |
|`singleTap`  |function(valueTap)  |no  |handler to be called when the user taps the button.the button's props `value` is passed as an argument to the callback hanlder   |

### SelectMultipleGroupButton
|props  |type  |required  |desc  |
|--|--|--|--|
|`selectMultiple`  |bool  |no  |default is true.the `selectMultiple` prop determines the grouped buttons are multiple or radio selection  |
|`group`  |array of `{value,displayValue}`  |yes  |just a plain array,`value` and `displayValue` props are akin to `value` and `displayValue` props of **SelectMultipleButton**.  |

