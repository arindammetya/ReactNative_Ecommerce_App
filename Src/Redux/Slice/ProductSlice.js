import {createSlice} from '@reduxjs/toolkit';

export const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
  },
  reducers: {
    addProdcutToCart(state, action) {

      let myIndex = -1;

      state.data.map((item,index)=>{

        if(item.id == action.payload.id){

          myIndex = index;

        }
      });
      if(myIndex == -1 ){
      state.data.push(action.payload);
      }else{
        state.data[myIndex].quantity = state.data[myIndex].quantity + 1;
      }
      
    },
    updateProductToCartIncrement(state, action){

      let myIndex = -1;

      state.data.map((item,index)=>{

        if(item.id == action.payload.id){

          myIndex = index;

        }
      });

      state.data[myIndex].quantity = state.data[myIndex].quantity + 1;
    
    },
    updateProductToCartDecrement(state, action){
      let myIndex = -1;

      state.data.map((item,index)=>{

        if(item.id == action.payload.id){

          myIndex = index;

        }
      });

      if(action.payload.quantity == 1){

        let tempData = state.data;
        let temp = tempData.filter((item, index) => {

          if(action.payload.id != item.id){
            return item;
          }
        });
        state.data = temp;
        
      }else{

        state.data[myIndex].quantity = state.data[myIndex].quantity - 1;
      }

      
    },
    removeProductFromCart(state, action){

        let tempData = state.data;
        let temp = tempData.filter((item, index) => {

          if(action.payload.id != item.id){
            return item;
          }
        });
        state.data = temp; 
    }
  },
});
export const {addProdcutToCart, updateProductToCartIncrement, updateProductToCartDecrement, removeProductFromCart } = ProductSlice.actions;

export default ProductSlice.reducer;