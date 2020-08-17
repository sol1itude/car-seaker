import {request} from "./request";
export function getOpenId(code){
  return request({
    headers:{
      'Access-Control-Allow-Origin':'*',
      "Origin":'yingyanchaxun.com',
      "Referer":'yingyanchaxun.com'
    },
    url:'/api/search_vehicle_index.php?s=/Home/User/getopenid',
    method:'post',
    data:{
      code:code
    }
  })
}

export function getUserInfo(openId){
  return request({
    url:'',
    params:{
      s:'/Home/User/login',
      openid:openId
    }
  })
}

export function getGoodsDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid,
    }
  })
}

export class Goods{
  constructor(itemInfo,columns,services) {
    this.title=itemInfo.title;
    this.desc=itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice=itemInfo.oldPrice;
    this.discount=itemInfo.discountDesc;
    this.columns=columns;
    this.services=services;
    this.realPrice=itemInfo.lowNowPrice;
  }
}

export class Shop{
  constructor(shopInfo) {
    this.logo=shopInfo.shopLogo;
    this.name=shopInfo.name;
    this.fans=shopInfo.cFans;
    this.sells=shopInfo.cSells;
    this.score=shopInfo.score;
    this.goodsCount=shopInfo.cGoods;
  }
}
