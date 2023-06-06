import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addProdcutToCart } from '../Redux/Slice/ProductSlice';
const Home = ({navigation}) => {

    const [productsList, setProductsList] = useState([]);
    const items = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        getProducts();
      }, []);
      const getProducts = () => {
        fetch('https://fakestoreapi.com/products?limit=20')
            .then(res=>res.json())
            .then(json=>{
                setProductsList(json);
            })
      }; 

  return (
    <View style={{flex:1}}>
    
        <View style={{width: "100%", height: "10%", 
            backgroundColor: "#98AFC7", 
            justifyContent: "space-between", 
            alignItems:"center",
            elevation: 5,
            flexDirection: 'row',
            }}>
            <Text style={{marginLeft: "5%",  fontSize: 24}} >Product List</Text>
            <TouchableOpacity onPress={()=>{

                navigation.navigate('Cart');
            }}>
                <Text style={{marginRight: "10%", fontSize: 24}}>Cart {items.data.length}</Text>
            </TouchableOpacity>
        </View>



        <FlatList 
            style={{backgroundColor:"#E5E4E2"}}
            data={productsList}
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
                                    ₹{item.price}
                                </Text>
                            </View>
                            <TouchableOpacity style={{ 
                            width:100,
                            elevation: 8,
                            backgroundColor: "#98AFC7",
                            borderRadius: 10,
                            paddingVertical: 10,
                            paddingHorizontal: 12,
                            marginLeft: 30
                            }}
                            onPress = {() => {
                                dispatch(addProdcutToCart({"id": item.id , "title": item.title, "price" : item.price, "image" : item.image, "quantity": 1}));
                              }}
                            >
                                <Text>Add To Cart</Text>
                            </TouchableOpacity>
                        

                    </View>
                )
            }}

        />


      
    </View>
  )
}

export default Home