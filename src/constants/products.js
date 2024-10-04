import Toast10Flash from '/products/Toast 10 Flash.jpg';
import LdnioBTS12 from '/products/Ldnio BTS 12.jpg';
import OCD154CCTypeCCable from '/products/OCD 154 CC Type C cable.jpg';
import OCDL32LightningCable from '/products/OCD L32 Lightning cable.jpg';
import Tank3Charger from '/products/Tank 3 Charger.jpg';

import { joyRoomProducts } from './joyroom';
import { oraimoProducts } from './oraimo';
import { aweiProducts } from './awei';

export const food = [
  ...oraimoProducts,
  ...aweiProducts,
  ...joyRoomProducts,
  {
    id: 31,
    Name: 'Toast 10 Flash',
    pic: Toast10Flash,
    category: 'Power Bank',
    Price: 35,
    subTitle: '1 year warranty',
    discount: 7,
    O_price: 40,
    clicked: false,
    brand: 'unknown',
  },
  {
    id: 40,
    Name: 'BTS 12',
    pic: LdnioBTS12,
    category: 'Bluetooth Speaker',
    Price: 45,
    subTitle: '6 months warranty',
    discount: 5,
    O_price: 50,
    clicked: false,
    brand: 'Ldnio',
  },
  {
    id: 41,
    Name: '154 CC Type C',
    pic: OCD154CCTypeCCable,
    category: 'Cable',
    Price: 15,
    subTitle: '6 months warranty',
    discount: 5,
    O_price: 20,
    clicked: false,
    brand: 'OCD',
  },
  {
    id: 42,
    Name: 'OCD L32 Lightning',
    pic: OCDL32LightningCable,
    category: 'Cable',
    Price: 20,
    subTitle: '6 months warranty',
    discount: 5,
    O_price: 25,
    clicked: false,
    brand: 'OCD',
  },
  {
    id: 43,
    Name: 'Tank 3 Charger',
    pic: Tank3Charger,
    category: 'Charger',
    Price: 35,
    subTitle: '6 months warranty',
    discount: 5,
    O_price: 40,
    clicked: false,
    brand: 'Tank',
  },
];
