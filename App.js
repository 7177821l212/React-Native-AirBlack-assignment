import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TextInput, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  { id: '1', title: 'India’s No.1 Online Makeup Course' },
  { id: '2', title: 'Learn by LIVE Do-it-Together Classes' },
  { id: '3', title: 'Unlimited Practise Session to master skills' },
];

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image 
          source={require('./assets/beauty.png')} 
          style={styles.image} 
        />
        <Image 
          source={require('./assets/airblack_logo.png')} 
          style={styles.image2} 
        />
        <Text style={styles.text}>PRESENTS</Text>
        <Text style={styles.text1}>Professional Online Makeup Course</Text>
        <StatusBar style="auto" />

        <View style={styles.certificationContainer}>
          <Image 
            source={require('./assets/medal.png')} 
            style={styles.image3} 
          />
          <Text style={styles.text3}>Certification Programme</Text>
        </View>

        <View style={styles.rating}>
          <Image 
            source={require('./assets/star.png')} 
            style={styles.image4} 
          />
          <Text style={styles.text4}>Rated 4.85/5</Text>
        </View>

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Icon name="check" size={20} color="white" style={styles.listItemIcon} />
              <Text style={styles.listItemText}>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          style={styles.list}
        />

        <View style={styles.contactFormContainer}>
          <Text style={styles.contactFormTitle}>Fill the form below to enquire</Text>
          <Text style={styles.name}>*Enter your name</Text>
          <TextInput
            style={styles.input}
            placeholder="Eg. Aneesha Mehra"
            placeholderTextColor="#ccc"
          />
          <Text style={styles.name}>*Enter Your WhatsApp Number</Text>
          <TextInput
            style={styles.input1}
            placeholder="+91  Eg. 0000000000"
            placeholderTextColor="#ccc"
          />
          <Text style={styles.name}>*Select your profession</Text>
          <TextInput
            style={styles.input1}
            placeholder="Choose the most relevant option"
            placeholderTextColor="#ccc"
          />
          <Text style={styles.name}>*Select your goal</Text>
          <TextInput
            style={styles.input1}
            placeholder="Choose the most relevant option"
            placeholderTextColor="#ccc"
          />
          <Text style={styles.name}>*Select your city</Text>
          <TextInput
            style={styles.input1}
            placeholder="Choose the most relevant option"
            placeholderTextColor="#ccc"
          />
          <Button title="Submit" />
        </View>
<View style={styles.bottomcontainer}>
<Image source={require('./assets/bottom.jpg')} style={styles.bottom}></Image>
<Text style={styles.bottomtext}>Why Should You Join Airblack?</Text>
<Image source={require('./assets/zoom.png')} style={styles.zoom}></Image>
<Text style={styles.zoomtext}>Do-it-together,{'\n'}live on zoom</Text>

<Image source={require('./assets/rating.png')} style={styles.rating2}></Image>
<Text style={styles.ratingtext}>4.8 /5 Rated{'\n'}Classes</Text>

<Image source={require('./assets/members.png')} style={styles.members}></Image>
<Text style={styles.memberstext}>35000+{'\n'}Members</Text>
          <Text style={styles.apply}>Apply Now</Text>
</View>
  
       <Text style={styles.certificate}>Get Certified From India’s Biggest{'\n'}Beauty Platform</Text>
      <View style={styles.certifycontainer}>
      <Image source={require('./assets/certificate.jpg')} style={styles.certify}></Image>
      </View>
      <View style={styles.social}>
        <Image source={require('./assets/bottom.jpg')} style={styles.socialimg}></Image>
        <Text style={styles.img}>Join our growing community of 35,000+ alumni</Text>

        <Text style={styles.apply2}>Apply Now</Text>

        <Image style={styles.insta} source={require('./assets/insta.png')}></Image>
        <Image style={styles.face} source={require('./assets/face.png')}></Image>
        <Image style={styles.link} source={require('./assets/link.png')}></Image>
        <Image style={styles.twitter} source={require('./assets/twitter.png')}></Image>

       
      </View>
      
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  text: {
    position:'absolute',
    top:150,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text1: {
    marginTop: 20,
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    opacity: 0.4,
  },
  image2: {
    width: '70%',
    height: 100,
    resizeMode: 'cover',
    position:'absolute',
    top:20,
    opacity: 0.5,
    borderRadius: 8,
  },
  image3: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    marginRight: 10,
  },
  image4: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    marginRight: 10,
  },
  text2: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
  },
  text3: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'sans-serif-medium',
  },
  text4: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'sans-serif-medium',
  },
  certificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b3d3c',
    padding: 7,
    borderRadius: 8,
   position:"absolute",
   top:270,
   left:20,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    position:"absolute",
    top:280,
    right:50
  },
  list: {
    marginTop: 80,
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  listItemIcon: {
    marginRight: 10,
  },
  listItemText: {
    color: 'white',
    fontSize: 18,
  },
  contactFormContainer: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    width: '90%',
  },
  contactFormTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 10,
  },
  input: {
    backgroundColor: 'white',
    borderColor:'black',
    borderWidth:1,
    color: 'white',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  input1: {
    backgroundColor: 'white',
    borderColor:'black',
    borderWidth:1,
    color: 'white',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  textArea: {
    height: 100,
  },
  name: {
    color: 'black',
    fontSize: 20,
  },

  //bottom

  bottomcontainer: {
    height: 500,
    width: '100%',
    backgroundColor: 'lightgray', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    marginTop:40,
  },
  bottom:{
    flex: 1,
    width: '100%',
    height: '100%',
    opacity:0.6,
  },
  bottomtext:{
       fontSize:50,
       color:'white',
       fontWeight:'bold',
       textAlign:'center',
       fontFamily:'sans-serif',
       position:'absolute',
       top:60,

  },

  zoom:{
   position:'absolute',
   width: 50,
    height: 50,
    resizeMode: 'cover',
    left:40,
  },
  zoomtext:{
    position:'absolute',
    fontSize:25,
    left:10,
    top:300,
    color:'white',
  },
  rating2:{
    position:'absolute',
   width: 50,
    height: 50,
    resizeMode: 'cover',
    left:200,
  },
  ratingtext:{
    position:'absolute',
    fontSize:25,
    left:170,
    top:300,
    color:'white',
  },
  members:{
    position:'absolute',
    width: 50,
     height: 50,
     resizeMode: 'cover',
     left:350,
  },
  memberstext:{
    position:'absolute',
    fontSize:25,
    left:330,
    top:300,
    color:'white',
  },
  //button
  btn:{
    position:'absolute',
    top:100,

  },
  apply:{
    position:'absolute',
    top:400,
    backgroundColor:'blue',
    padding:10,
    width:300,
    borderRadius:10,
    textAlign:'center',
    color:'white',
  },
//certificate
  certifycontainer: {
    height: 500,
    width: '100%',
    backgroundColor: 'lightgray', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    marginTop:40,
  },
  certify:{
    flex: 1,
    width: '100%',
    height: '100%',
  },
  certificate:{
    color:'white',
    fontSize:28,
   fontWeight:'bold',
   marginTop:10,
   fontFamily:'sana-serif',
  },

  //social
  social:{
    height: 500,
    width: '100%',
    backgroundColor: 'lightgray', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    marginTop:40,
  },
  socialimg:{
    flex: 1,
    width: '100%',
    height: '100%',
    opacity:0.6,
  },
  img:{
    color:'white',
    position:'absolute',
    top:60,
    fontSize:30,
    fontWeight:'bold',
  },
  apply2:{
    position:'absolute',
    top:200,
    backgroundColor:'blue',
    padding:10,
    width:350,
    borderRadius:10,
    textAlign:'center',
    color:'white',
  },

  //images of social
    insta:{
      position:'absolute',
    width: 50,
     height: 50,
     resizeMode: 'cover',
     left:50,
     top:300,
    },
    face:{
      position:'absolute',
    width: 50,
     height: 50,
     resizeMode: 'cover',
     left:140,
     top:300,
    },
    link:{
      position:'absolute',
    width: 50,
     height: 50,
     resizeMode: 'cover',
     left:230,
     top:300,
    },
    twitter:{
      position:'absolute',
    width: 50,
     height: 50,
     resizeMode: 'cover',
     left:330,
     top:300,
    },

});
