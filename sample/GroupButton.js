/*
 * @Author: Young
 * DSHARP
 * @flow 
 * @Date: 2018-04-07 11:13:31 
 * @Last Modified by: Young
 * @Last Modified time: 2018-08-31 09:56:30
 */
import React, { Component } from "react";

import { View, Text, StyleSheet } from "react-native";

import _ from "lodash";
import { SelectMultipleGroupButton } from "../index.js";

const multipleGroupData = [
  { value: "running" },
  { value: "riding" },
  { value: "reading" },
  { value: "coding" },
  { value: "Niuer" }
];
const radioGroupData = [
  { value: "Female", displayValue: "F" },
  { value: "Male", displayValue: "M" },
  { value: "Other", displayValue: "O" },
  { value: "Rather not say", displayValue: "R" }
];

const defaultSelectedIndex_group_insterest = [0, 1, 4];
const defaultSelectedIndex_group_gender = [1];

const ios_blue = "#007AFF";

export default class GroupButton extends Component {
  constructor(props) {
    super(props);

    var selectedValues1 = [];
    defaultSelectedIndex_group_insterest.map(item => {
      selectedValues1.push(multipleGroupData[item].value);
    });

    this.state = {
      multipleSelectedData: [],
      multipleSelectedDataLimited: [],
      radioSelectedData: "",
      multipleSelectedData_group: selectedValues1,
      multipleSelectedData_group_limited: [],
      radioSelectedData_group:
        radioGroupData[defaultSelectedIndex_group_gender[0]].value
    };
  }

  render() {
    return (
      <View style={{ flex: 1, }}>
        <Text style={styles.welcome}>
          implement the multiple-select buttons demo by
          SelectMultipleGroupButton
        </Text>
        <Text style={{ color: ios_blue, marginLeft: 10 }}>
          I like {_.join(this.state.multipleSelectedData_group, ", ")}
        </Text>
        <SelectMultipleGroupButton
          defaultSelectedIndexes={defaultSelectedIndex_group_insterest}
          containerViewStyle={{ justifyContent: "flex-start" }}
          highLightStyle={{
            borderColor: "gray",
            backgroundColor: "transparent",
            textColor: "gray",
            borderTintColor: ios_blue,
            backgroundTintColor: "transparent",
            textTintColor: ios_blue
          }}
          onSelectedValuesChange={selectedValues =>
            this._groupButtonOnSelectedValuesChange(selectedValues)
          }
          group={multipleGroupData}
        />

        <Text style={{ color: "gray", marginLeft: 10, marginTop: 20 }}>
          Maximum 3(by yourself) limited
        </Text>
        <Text style={{ color: ios_blue, marginLeft: 10 }}>
          I like {_.join(this.state.multipleSelectedData_group_limited, ", ")}
        </Text>
        <SelectMultipleGroupButton
          containerViewStyle={{ justifyContent: "flex-start" }}
          highLightStyle={{
            borderColor: "gray",
            backgroundColor: "transparent",
            textColor: "gray",
            borderTintColor: ios_blue,
            backgroundTintColor: "transparent",
            textTintColor: ios_blue
          }}
          maximumNumberSelected={3}
          onSelectedValuesChange={selectedValues =>
            this._groupButtonOnSelectedValuesChange_limited(selectedValues)
          }
          group={multipleGroupData}
        />
        <View style={{ height: 1, backgroundColor: "gray", marginTop: 20 }} />

        <Text style={styles.welcome}>
          implement the radio-select buttons demo by SelectMultipleGroupButton
        </Text>
        <Text style={{ color: "green", marginLeft: 10 }}>
          I am {this.state.radioSelectedData_group}
        </Text>
        <SelectMultipleGroupButton
          multiple={false}
          defaultSelectedIndexes={defaultSelectedIndex_group_gender}
          containerViewStyle={{ flexDirection: "column", width: 100 }}
          highLightStyle={{
            borderColor: "gray",
            backgroundColor: "transparent",
            textColor: "gray",
            borderTintColor: "green",
            backgroundTintColor: "green",
            textTintColor: "white"
          }}
          buttonViewStyle={{ width: 40, height: 40, borderRadius: 20 }}
          singleTap={valueTap => {
            this._onRadioGroupButtonSingleTap(valueTap);
          }}
          group={radioGroupData}
        />
      </View>
    );
  }

  _groupButtonOnSelectedValuesChange(selectedValues) {
    this.setState({
      multipleSelectedData_group: selectedValues
    });
  }

  _groupButtonOnSelectedValuesChange_limited(selectedValues) {
    this.setState({
      multipleSelectedData_group_limited: selectedValues
    });
  }

  _onRadioGroupButtonSingleTap(valueTap) {
    this.setState({
      radioSelectedData_group: valueTap
    });
  }
}

const styles = StyleSheet.create({
  welcome: {
    margin: 10,
    // marginTop: 30,
    color: "gray"
  }
});
