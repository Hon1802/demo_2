/* eslint-disable @typescript-eslint/no-explicit-any */
export enum SalesChannel {
  ECommerce = 'Thương mại điện tử', // Sàn TMDT
  WebFacebookZalo = 'Web/Facebook/Zalo', // WEB/FACEBOOK/ZALO
  Agent = 'Đại lý', // ĐẠI LÝ
  Shop = 'Shop' // SHOP
}
export enum ECommerce {
  LAZADA = 1, // Sàn TMDT
  SHOPPE = 2, // WEB/FACEBOOK/ZALO
  TIKI = 3, // ĐẠI LÝ
  TIKTOK_SHOP = 4 // SHOP
}
export interface InfoOrder {
  method: string
  nameShop: string
  billShop?: string
  nameAgent?: string
  imageBill?: any
  imageCustomer?: any
  oderCode: string
  value: string
}

export interface UserInputType {
  fullName: string
  phoneNumber: string
  type: string | SalesChannel
  information?: InfoOrder
}
