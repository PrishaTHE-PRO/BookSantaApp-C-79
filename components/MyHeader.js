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
import {Header} from 'react-native-elements';

const MyHeader=props=>{
return(
    <Header
    centerComponent={{text:props.title,style:{color:'#90a5a9',fontSize:20,fontWeight:'bold'}}}
    backgroundColor='#cafafe'
    />    
    )
}
export default MyHeader