import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {addNote, editNote} from '../../redux/action/NoteAction';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: props?.route?.params?.heading,
      description: props?.route?.params?.description,
    };
  }

  addTask = () => {
    const {dTaskData} = this.props;
    this.props.navigation.goBack();
    if (this.props?.route?.params?.editMode) {
      this.props.editNote(
        this.state.description,
        this.props.route?.params?.type,
      );
    } else {
      dTaskData(this.state.description, this.props.route?.params?.type);
    }
  };

  render() {
    return (
      <SafeAreaView style={style.container}>
        <View style={style.txtInputView}>
          <TextInput
            style={style.input}
            onChangeText={text => {
              this.setState({heading: text});
            }}
            value={this.state.heading}
            editable={false}
            placeholder="Title"
            keyboardType="default"
          />
          <TextInput
            style={style.input}
            onChangeText={text => {
              this.setState({description: text});
            }}
            value={this.state.description}
            placeholder="Note"
            keyboardType="default"
          />
        </View>
        <View style={style.button}>
          <TouchableOpacity onPress={this.addTask}>
            <Text style={style.buttonTxt}>ADD TASK</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    taskData: state.NoteReducer,
  };
};

const mapDispatchToProps = {
  dTaskData: addNote,
  editNote: editNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 20,
  },
  txtInputView: {
    width: '90%',
    paddingBottom: 10,
  },
  input: {
    borderBottomColor: 'rgb(130,131,137)',
    borderWidth: 1,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    margin: 15,
    fontSize: 20,
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#f94449',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTxt: {
    color: 'white',
    fontWeight: 'bold',
  },
});
