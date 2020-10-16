import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types.js'

export default{
  //方法一
  addCart(context,product){
    return new Promise((resolve,reject)=>{
      let IsNo=null
      for(let item of context.state.cartList){
        if(item.iid===product.iid){
          IsNo=item;
        }
      }
      if(IsNo){
        context.commit(ADD_COUNTER,IsNo)
        resolve("商品+1！")
      }else{
        product.count=1
        context.commit(ADD_TO_CART,product)
        resolve("增加了新的商品！")
      }
    })
  },
  // 原mutation的方法二
  // addCart(state, product) {
  //   let oldProduct = state.cartList.find(item => item.iid === product.iid)
  //   if (oldProduct) {
  //     oldProduct.count += 1
  //   } else {
  //     product.count = 1
  //     state.cartList.push(product)
  //   }
  // }
}
