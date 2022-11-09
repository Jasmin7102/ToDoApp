import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {data} from '../../utils/data';

class Home extends Component {
  date = () => {
    var now = new Date().toLocaleDateString('en-us', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
    return now;
  };

  render() {
    return (
      <View style={style.container}>
        <Text style={style.helloTxt}>Hello</Text>
        <Text style={style.nameTxt}>Jasmin</Text>
        <Text style={style.dateTxt}>{this.date()}</Text>
        <View style={style.flatListView}>
          <FlatList
            horizontal={false}
            data={data}
            numColumns={2}
            keyExtriactor={index => index.toString()}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={style.flatView}
                  onPress={() =>
                    this.props.navigation.navigate('Details', {
                      type: item.type,
                      title: item.title,
                    })
                  }>
                  <View style={style.imgTxtView}>
                    {item.img && (
                      <Image
                        source={{uri: item.img}}
                        style={style.flatImgIcons}
                      />
                    )}

                    {!!item.title && (
                      <View style={style.txtView}>
                        <Text style={style.flatTxt}>{item.title}</Text>
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

export default connect()(Home);

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  helloTxt: {
    fontSize: 45,
    color: 'rgb(57,49,120)',
  },
  nameTxt: {
    fontWeight: '400',
    fontSize: 50,
    color: 'rgb(35,29,119)',
  },
  dateTxt: {
    color: 'rgb(194,192,202)',
  },
  flatListView: {
    marginVertical: 20,
  },
  flatView: {
    width: 150,
    height: 100,
    borderColor: 'rgb(130,131,137)',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
  },
  imgTxtView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
  },
  flatImgIcons: {
    height: 20,
    width: 20,
  },
  txtView: {
    width: '50%',
  },
  flatTxt: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgb(155,156,174)',
  },
});
