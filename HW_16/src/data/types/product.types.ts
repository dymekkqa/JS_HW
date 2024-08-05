export interface IProduct {
  name: string;
  manufacturer: MANUFACTURERS;
  price: number;
  amount: number;
  notes?: string;
}

export const ProductDetails = {
  NAME: 'Name',
  PRICE: 'Price',
  MANUFACTURER: 'Manufacturer',
  AMOUNT: 'Amount',
  NOTES: 'Notes'
} as const;

export interface IDetails {
  NAME: string;
  PRICE: string;
  MANUFACTURER: string;
  AMOUNT: string;
  NOTES: string;
}

export enum MANUFACTURERS {
  APPLE = 'Apple',
  SAMSUNG = 'Samsung',
  GOOGLE = 'Google',
  MICROSOFT = 'Microsoft',
  SONY = 'Sony',
  XIAOMI = 'Xiaomi',
  AMAZON = 'Amazon',
  TESLA = 'Tesla'
}
