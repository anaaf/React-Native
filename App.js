import React from 'react';
import {Text, View, TextInput, Button, TouchableOpacity, ScrollView} from 'react-native';
import {Font} from 'expo';
// import './App.css';
// import Person from './Person/Person';

class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'Montserrat': require('./assets/Montserrat-Regular.ttf'),
    });
  }
  state = {
    text: "",
    todo: []
  }
  addTodo = () => {
   var newTodo = this.state.text;
   var arr = this.state.todo;
   arr.push(newTodo);
   this.setState({todo : arr, text : ""});
  }
  deleteTodo = (todo) => {
    var arr = this.state.todo;
    var pos = arr.indexOf(todo);
    arr.splice(pos,1);
    this.setState({todo : arr});
  }
    renderTodo = () => {
  return this.state.todo.map(text => {
        return(
         <TouchableOpacity key={text}>  
        <Text 
          style={styles.textStyle}
        onPress={() => {this.deleteTodo(text)}}
        >
          {text}
          </Text>
         </TouchableOpacity>
        )
      })
    }
  render() {
    return (
      <ScrollView style={styles.wholeView}>
      <View style={styles.viewStyle}>
      <Text style={styles.header}>Todo App</Text> 
      <TextInput 
      style={styles.inputStyle}
      onChangeText={(text)=>this.setState({text})}
      value={this.state.text}
      /> 
      <Button
      color="#32cb00"
      title='Add todo'
      onPress={this.addTodo}
      />
      <View style={{marginTop: 70}}/>
      {this.renderTodo()} 
       </View>
      </ScrollView>
    );
  }
}

const styles = {
  textStyle: {fontSize: 30, color: '#32cb00', fontFamily: 'Montserrat'},
  wholeView : {backgroundColor: '#37474f', flex: 1},
  header: {color: '#32cb00', fontSize: 30, fontWeight: 'bold', marginBottom:10 },
  viewStyle: {margin: 20, marginTop: 40, alignItems: 'center', justifyContent: 'center'},
  inputStyle: {height: 40, borderColor: 'gray', borderWidth: 1, paddingRight: 100, paddingLeft: 100, paddingTop: 0, paddingBottom: 0, marginBottom: 15},

};

export default App;
