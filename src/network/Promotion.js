import {request} from "./request";

export function getCode(mobile){
  return request({
    url:'/poetry/random',
    params:{
      mobile:mobile
    }
  })
}

export function promotionRegister(mobile,vcode){
  return request({
    url:'/poetry/random',
    params:{
      mobile:mobile,
      vcode:vcode
    }
  })
}
