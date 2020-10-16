import {
  request
} from './request.js'

export function Getdetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

//获取详情页推荐数据
 export function GetRecommend(){
  return request({
    url:'/recommend'
  })
 }

//抽离封装详情信息的数据
export class DetailContent {
  constructor(itemInfo, services, columns) {
    this.title = itemInfo.title,
    this.desc = itemInfo.desc,
    this.newPrice = itemInfo.price,
    this.oldPrice = itemInfo.oldPrice,
    this.discount = itemInfo.discountDesc,
    this.realPrice = itemInfo.lowNowPrice,
    this.services = services,
    this.columns = columns
  }
}

//抽离商家信息的数据
export class ShopInfomation{
  constructor(shopInfo){
    this.logo=shopInfo.shopLogo,
    this.name=shopInfo.name,
    this.fans=shopInfo.cFans,
    this.sells=shopInfo.cSells,
    this.score=shopInfo.score,
    this.goodsCount=shopInfo.cGoods
  }
}

//数据信息的数据
export class GoodsParam{
  constructor(info,rule){
    this.image=info.images?info.image[0]:'';
    this.infos=info.set;
    this.sizes=rule.tables;
  }
}
