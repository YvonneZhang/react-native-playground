/**
 * @file Day 01 - Simple counter
 * @author YvonneZhang(yvonnezhang.github.io)
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.reset = this.reset.bind(this)
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }

  reset() {
    this.setState({count: 0})
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.counter}>
          {this.state.count}
        </Text>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={this.handleClick}>
            <Text style={styles.button}>
              Tap me!
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.reset}>
            <Text style={styles.button}>
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Main/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  app: {
    flexDirection: 'column',
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 100
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 30
  },
  button: {
    width: 180,
    textAlign: 'center',
    fontSize: 30,
    color: '#05aaf1'
  }
})

export default App
