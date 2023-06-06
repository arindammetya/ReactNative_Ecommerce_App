import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import {useDispatch, useSelector} from 'react-redux';
import { updateProductToCartIncrement, updateProductToCartDecrement, removeProductFromCart } from '../Redux/Slice/ProductSlice';
import React, {useEffect , useState} from 'react'

const Cart = ({navigation}) => {

  const items = useSelector(state => state.products);
  const dispatch = useDispatch();


  return (
    <View style={{flex:1}}>
    
        <View style={{width: "100%", height: "10%", 
            backgroundColor: "#98AFC7", 
            justifyContent: "space-between", 
            alignItems:"center",
            elevation: 5,
            flexDirection: 'row',
            }}>
            <Text style={{marginLeft: "5%",  fontSize: 24}} >Items ({items.data.length})</Text>
            <TouchableOpacity onPress={()=>{

                navigation.navigate('Checkout');
            }}>
                <Text style={{marginRight: "10%", fontSize: 24}}>Checkout</Text>
            </TouchableOpacity>
        </View>
          
        <FlatList 
            style={{backgroundColor:"#E5E4E2"}}
            data={items.data}
            renderItem= {({item})=>{
                return(
                    <View style={{
                        width: "100%",
                        alignSelf: 'center',
                        marginTop: 10,
                        height: 150,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 10,
                        borderRadius: 30,
                        backgroundColor:"white"
                        }}>

                            <Image
                                source={{uri: item.image}}
                                style={{width: "20%", height: 90}}
                            />
                            <View style={{width:"40%", marginLeft:10}}>
                                <Text style={{fontSize:16, marginBottom:10}}>
                                    {item.title}
                                </Text>
                                <Text style={{fontSize:25}}>
                                    ₹{item.price * item.quantity}
                                </Text>
                            </View>
                            <View style={{flex:1, marginLeft: "10%", marginBottom:5, marginTop:5 }}>
                              <TouchableOpacity  onPress = {() => {
                                dispatch(updateProductToCartIncrement(item));
                              }}>
                                  {/* <Text style={{fontSize: 40}}>+</Text> */}
                                  <Image style={{width:30,height:30, marginTop:10}} source={require('../Images/plus.png')}/>
                              </TouchableOpacity >
                                {/* <View style={{marginLeft:"10%",marginTop:10, fontSize: 24}}>

                                    <Text style={{marginLeft: "-10%",  fontSize: 24}} >{item.quantity}</Text> 

                                </View> */}
                                
                                <Text style={{fontSize: 24, marginLeft:8}} >{item.quantity}</Text> 

                              <TouchableOpacity onPress = {() => {
                                dispatch(updateProductToCartDecrement(item));
                              }}>
                                  {/* <Text style={{marginLeft: "1%",  fontSize: 50,}}>-</Text> */}
                                  <Image style={{width:30,height:30}} source={require('../Images/minus.png')}/>
                              </TouchableOpacity>
                            </View>
                            <View>

                              <TouchableOpacity onPress={()=>{dispatch(removeProductFromCart(item))}}>
                                <Image style={{width:30, height:30, marginRight:"5%"}} source={require('../Images/trash.png')}/>
                              </TouchableOpacity>

                            </View>


                    </View>
                )
            }}

        />

    </View>
  )
}

export default Cart