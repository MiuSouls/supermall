import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types.js'

export default {
  [ADD_COUNTER](state,product){
    product.count += 1
  },
  [ADD_TO_CART](state,product){
    state.cartList.push(product)
  }

}


//临时
// export default{
//   addCart(state, product) {
//     let oldProduct = state.cartList.find(item => item.iid === product.iid)
//     if (oldProduct) {
//       oldProduct.count += 1
//     } else {
//       product.count = 1
//       state.cartList.push(product)
//     }
//   }
// }
