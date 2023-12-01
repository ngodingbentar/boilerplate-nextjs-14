interface IMain {
  main : {
    count: number
  }
}

interface IUserStore {
  users: {
    users: any,
    loading: boolean,
    userStore: object
  }
}

interface IUser {
  id: string
  name: string
  email: string
  country_name: string
  device_id: string
  bitcoin_address: string
  avatar: string
  login_ip: string
  active_device_mac: string
  notes: string
  age: number
  referral_id: number
  locale: string
  favorite_music: string
  phone_number: string
  twitter_username: string
  job: string
  invoice_email_address: string
  hmac_secret: string
  favorite_quote: string
  primary_color: string
  secondary_color: string
  material: string
  shipping_address: string
  zip_code: string
  latitude: string
  longitude: string
  favorite_animal: string
  app_version: string
  timezone: string
}

interface ISales {
  id: number
  name: string
  consumen_name: string
  item_id: number
  qty: number
  sales_id: string
  transaction_date: string
}

export type { IMain, IUserStore, IUser, ISales }