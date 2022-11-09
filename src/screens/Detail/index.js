import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import AddButton from '../../components/add_plus';
import {deleteNote} from '../../redux/action/NoteAction';
import Header from '../../components/Header';

class Home extends Component {
  addAddPress = () => {
    this.props.navigation.navigate('Task', {
      heading: this.props.route?.params?.title,
      type: this.props.route?.params?.type,
    });
  };

  onDeletePress = item => {
    const {route, pdeleteNote} = this.props;
    pdeleteNote(item, route?.params?.type);
  };

  onEditPress = item => {
    this.props.navigation.navigate('Task', {
      heading: this.props.route?.params?.title,
      type: this.props.route?.params?.type,
      description: item,
      editMode: true,
    });
  };

  render() {
    const {navigation} = this.props;
    const {
      taskData,
      route: {
        params: {type},
      },
    } = this.props;

    return (
      <SafeAreaView style={style.container}>
        <Header
          heading={this.props.route?.params?.title}
          navigation={navigation}
        />
        <View style={style.mainView}>
          <FlatList
            data={taskData[type]}
            renderItem={({item}) => {
              return (
                <View style={style.taskSection}>
                  <View style={style.taskDetail}>
                    <Text style={style.description}>{item}</Text>
                  </View>

                  <View style={style.operationSection}>
                    <TouchableOpacity onPress={() => this.onEditPress(item)}>
                      <Image
                        style={style.editIcon}
                        source={{
                          uri: 'https://cdn-icons-png.flaticon.com/128/1250/1250615.png',
                        }}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        borderRightWidth: 1,
                        height: 30,
                        borderColor: 'rgb(48, 31, 110)',
                      }}
                    />
                    <TouchableOpacity onPress={() => this.onDeletePress(item)}>
                      <Image
                        style={style.editIcon}
                        source={{
                          uri: 'https://cdn-icons-png.flaticon.com/128/1214/1214428.png',
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View style={{position: 'absolute', bottom: 0, right: 0}}>
          <AddButton onAddPress={this.addAddPress} />
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
  pdeleteNote: deleteNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    margin: 10,
  },
  taskSection: {
    marginBottom: 10,
    backgroundColor: '#E6E6FA',
    borderRadius: 10,
  },
  taskDetail: {
    height: 70,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  description: {
    color: 'rgb(48, 31, 107)',
    fontSize: 20,
    fontWeight: '400',
  },
  operationSection: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 32,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'rgb(48, 31, 110)',
  },
  editIcon: {
    height: 20,
    width: 20,
  },
});
