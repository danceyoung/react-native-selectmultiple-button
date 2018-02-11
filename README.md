
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
