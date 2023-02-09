import React, { Component } from 'react';
import {View, ScrollView, TouchableHighlight, TouchableOpacity, Image, Text} from 'react-native';
class Home extends Component {

  render () {
    return (
      <View>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style= {{
            padding: 10, width: '100%', backgroundColor: '#8ABADF', height: 150
          }}>
            <TouchableOpacity>
              <Image source={require('./assets/arrow.png')}
              style={{ width: 30, height: 30}}></Image>
              <View></View>
              <View></View>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center'}}>
            <Image source={require('./assets/user.png')} style={{
              width: 140, height: 140,
              borderRadius: 100, marginTop: -70}}></Image>
              <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 10 }}>Lopon John Dago</Text>
              <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 10}}>27, Gender-Other</Text>

          </View>


          <View style={{
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#fff',
            width: '90%',
            padding: 20,
            borderBottom: 22,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 20
          }}>
            <Image source={require('./assets/user-avatar.png')}
            style={{ width: 20, height: 20 }}></Image>
            <Text style={{ fontSize: 15, color: '#818181', fontWeight: 'bold', marginLeft: 10 }}>Edit Profile</Text>


          </View>

          <View style={{
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#fff',
            width: '90%',
            padding: 20,
            borderBottom: 22,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 20,

          }}>
          <Image source={require('./assets/settings.png')}
          style={{ width: 20, height: 20 }}></Image>
          <Text style={{ fontSize: 15, color: '#818181', fontWeight: 'bold', marginLeft: 10 }}>Settings</Text>
          </View>

          <TouchableOpacity style={{
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#fff',
            width: '90%',
            padding: 20,
            borderBottom: 22,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 20,
            marginBottom: 40,
          }}>
          <Image source={require('./assets/share.png')}
          style={{ width: 20, height: 20}}></Image>
          <Text style={{ fontSize: 15, color: '818181', fontWeight: 'bold', marginLeft: 10 }}>Share</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#fff',
            width: '90%',
            padding: 20,
            borderBottom: 22,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            backgroundColor: '#8ABADF'
          }}>
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', marginLeft: 10 }}>Logout</Text>
          </TouchableOpacity>
           </ScrollView>

      </View>
    );
  }
}

export default Home;