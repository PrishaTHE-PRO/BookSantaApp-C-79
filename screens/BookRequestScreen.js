import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';

import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';



export default class BookRequestScreen extends Component{
    constructor(){
        super();
        this.state={
            userId:firebase.auth().currentUser.email,
            bookName:'',
            reasonToRequest:""
        }
    }
render(){
    return(
        <View style={{flex:1,}}>
            <MyHeader title='Request Book'/>
<KeyboardAvoidingView style={styles.keyBoardStyle}>
    <TextInput style={styles.formTextInput}
    placeholder={'Enter Book Name'}
    onChangeText={(text)=>{
        this.setState({
            bookName:text
        })
    }}
    value={this.state.bookName}/>

<TextInput style={[styles.formTextInput, {height:300}]}
multiline
numberOfLines={10}
    placeholder={'Why do you need the book?'}
    onChangeText={(text)=>{
        this.setState({
            description:text
        })
    }}
    value={this.state.description}/>
    <TouchableOpacity style={styles.button}
    onPress={()=>{

    }}>
        <Text> Request </Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
        </View>
    )
}
}

const styles=StyleSheet.create({
    formTextInput:{
        width:'75%',
        height:35,
        alighSelf:'center',
        borderColor:'blue',
        borderRadius:10,
        borderWidth:2,
        marginTop:20,
        padding:10
    },
    button:{
        width:'75%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'#ff5722',
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:8
        },
        shadowOpacity:0.44,
        shadowRadius:10.32,
        elevation:16,
        marginTop:20
    }
})