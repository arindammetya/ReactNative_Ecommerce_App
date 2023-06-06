import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from '../Slice/ProductSlice'


const Store = configureStore({
  reducer: {
    products: ProductSlice
  },
})

export default Store