/*
 * @Author: Young
 * DSHARP
 * @flow 
 * @Date: 2018-02-08 17:53:17 
 * @Last Modified by: Young
 * @Last Modified time: 2018-04-08 12:15:50
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  Dimensions
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width
const ios_blue = '#007AFF'
const themeColor = '#0D1014'

import { SelectMultipleGroupButton } from './index.js'
import SimpleButton from './sample/SimpleButton'
import GroupButton from './sample/GroupButton'
import SegmentedControl from './sample/SegmentedControl'
import ListButton from './sample/ListButton'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      usageScrollView: null,
    }
  }

  render() {
    return (
      <View
        style={{ flex: 1, backgroundColor: '#15191F', }}>
        <View style={{ marginTop: 20 }}>
          <SelectMultipleGroupButton
            multiple={false}
            group={[
              { value: 'SimpleBtn' },
              { value: 'GroupBtn' },
              { value: 'Segment' },
              { value: 'List' }]}
            defaultSelectedIndexes={[0]}
            singleTap={(valueTap) => {
              switch (valueTap) {
                case 'SimpleBtn':
                  this.state.usageScrollView.scrollTo({ x: 0 * SCREEN_WIDTH, y: 0, animated: true })
                  break;
                case 'GroupBtn':
                  this.state.usageScrollView.scrollTo({ x: 1 * SCREEN_WIDTH, y: 0, animated: true })
                  break;
                case 'Segment':
                  this.state.usageScrollView.scrollTo({ x: 2 * SCREEN_WIDTH, y: 0, animated: true })
                  break;
                case 'List':
                  this.state.usageScrollView.scrollTo({ x: 3 * SCREEN_WIDTH, y: 0, animated: true })
                  break;
                default:
                  break;
              }
            }}
            buttonViewStyle={{ flex: 1, margin: 0, borderRadius: 0 }}
            highLightStyle={{
              borderColor: ios_blue, textColor: ios_blue, backgroundColor: themeColor,
              borderTintColor: ios_blue, textTintColor: 'white', backgroundTintColor: ios_blue
            }}
          />
          <ScrollView
            ref={(ref) => this.state.usageScrollView = ref}
            pagingEnabled={true}
            scrollEnabled={false}
            horizontal={true}>
            <View style={styles.horizontalView}>
              <Text style={styles.usageTitle}>
                Simple Button Usage
              </Text>
              <SimpleButton />
            </View>
            <View style={styles.horizontalView}>
              <Text style={styles.usageTitle}>
                Group Button Usage
              </Text>
              <GroupButton />
            </View>
            <View style={styles.horizontalView}>
              <Text style={[styles.usageTitle, { marginBottom: 20 }]}>
                SegmentedControl Usage
              </Text>
              <SegmentedControl />
            </View>
            <View style={styles.horizontalView}>
              <Text style={styles.usageTitle}>
                List Usage
              </Text>
              <ListButton />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  usageTitle:
    {
      color: 'white',
      marginTop: 20
    },
  horizontalView: {
    width: SCREEN_WIDTH
  },
});
