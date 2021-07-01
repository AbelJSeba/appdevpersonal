import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      steps: "",
      minutes: "",
      walkLogs: [],
    };
  }
  render() {
    const recordWalkLogsHandler = () => {
      if (this.state.minutes && this.state.steps && this.state.date) {
        this.setState({
          walkLogs: [
            ...this.state.walkLogs,
            {
              when: this.state.date,
              distance: this.state.steps,
              time: this.state.minutes,
              speed: Math.round(this.state.steps / this.state.minutes),
            },
          ],
        });
        this.setState({
          date: "",
          steps: "",
          minutes: "",
        });
        Keyboard.dismiss();
      }
    };

    const clearLogHandler = () => {
      this.setState({
        walkLogs: [],
      });
    };

    return (
      <View style={styles.container}>
        <View
          style={{
            alignItems: "center",
            paddingVertical: 10,
            backgroundColor: "#AAAAAA",
          }}
        >
          <Text style={{ fontSize: 20, color: "#1200FF" }}>
            Quiz 3M: Walking Log
          </Text>
        </View>
        <View>
          <Text style={{ fontWeight: "bold" }}>
            Create this app as a single component classed WalkingLog with no
            props.The user enters the date, the number of steps they took, and
            the time and when they press the "Record Walk" button it stores om
            teh FlatList, where it also displays the speed in steps per minute
          </Text>
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 25, marginTop: 20 }}>
          Log your Walk
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <TextInput
              placeholder="Date (e.g 6/29)"
              value={this.state.date}
              onChangeText={(value) =>
                this.setState({
                  ...this.state,
                  date: value,
                })
              }
            />
            <TextInput
              placeholder="Steps (e.g 10000)"
              value={this.state.steps}
              onChangeText={(value) =>
                this.setState({
                  ...this.state,
                  steps: value,
                })
              }
            />
            <TextInput
              placeholder="Minutes (e.g 75)"
              value={this.state.minutes}
              onChangeText={(value) =>
                this.setState({
                  ...this.state,
                  minutes: value,
                })
              }
            />
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#1200FF",
                padding: 10,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={recordWalkLogsHandler}
            >
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
                RECORD WALK
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#FF0000",
                padding: 10,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}
                onPress={clearLogHandler}
              >
                CLEAR LOG
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 25, marginTop: 20 }}>
          Log of all Walks
        </Text>
        <View style={{ flex: 1, marginTop: 20, marginBottom: 10 }}>
          <FlatList
            data={this.state.walkLogs}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>When: {item.when}</Text>
                  <Text>Distance:{item.distance}</Text>
                  <Text>Minutes: {item.minutes}</Text>
                  <Text>Speed: {item.speed}</Text>
                </View>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 25,
  },
});
