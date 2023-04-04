import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {chatList} from '../../../constant/datalist';

const Chats = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'black', height: '100%'}}>
      <View style={styles.search}>
        <TouchableOpacity style={styles.searchIcon}>
          <FontAwesome5 name="search" color={'white'} size={25} />
        </TouchableOpacity>
        <Text style={styles.text}>Chat Room</Text>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/images/download.jpeg')}
            style={styles.profileImg}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.listProfile}
      >
        {chatList.map((data, index) => {
          return (
            <View key={index}>
              <Image source={data.image} style={styles.image} />
              <Text style={{fontSize: 16, color: 'white', marginLeft: 8}}>
                {data.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <ScrollView style={styles.listStyle} showsVerticalScrollIndicator={false}>
        {chatList.map((data, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => {}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: 24,
                  justifyContent: 'space-between',
                  paddingHorizontal: 24,
                }}
              >
                <View style={{flexDirection: 'row'}}>
                  <Image source={data.image} style={styles.profileImg} />
                  <View>
                    <Text style={styles.title}>{data.name}</Text>
                    <Text style={styles.message}>What are you doing now?</Text>
                  </View>
                </View>
                <Text>9:20pm</Text>
              </View>
              <View
                style={{
                  width: '100%',
                  borderWidth: 0.4,
                  borderColor: 'gray',
                  marginTop: 24,
                }}
              ></View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chats;

const styles = StyleSheet.create({
  searchIcon: {
    // display: 'flex',
    // position: 'absolute',
    padding: 11,
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    fontWeight: '400',
    marginTop: 12,
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  listProfile: {
    marginTop: 20,
    marginBottom: 24,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
    margin: 12,
  },
  listStyle: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 24,
    // marginTop: 10,
  },
  message: {
    fontSize: 16,
    marginLeft: 24,
    marginTop: 10,
  },
});
