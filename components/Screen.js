import React, { Component } from 'react';
import { Text,TouchableOpacity } from 'react-native';
import {connect} from "react-redux"
import {Set_Date} from "../store/action/index"
class Screen extends React.Component {

  render() {

    console.log("render_date",this.props)
    return (
      <TouchableOpacity 
      onPress={()=>this.props.Set_Date()}
      >
        <Text style={{color:"black",backgroundColor:"pink",width:200,height:200}}>Save_Me</Text>
      </TouchableOpacity>
    );
  }
}


const mapStateToPrpos=(state)=>({
  name:state.name
})


const MapDispatchToPropse=(dispatch)=>({
  Set_Date:()=> dispatch(Set_Date())
})
 
export default  connect(mapStateToPrpos,MapDispatchToPropse)(Screen)