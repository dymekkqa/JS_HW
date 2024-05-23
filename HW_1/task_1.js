const ITEM_1 = 5;
console.log(ITEM_1);

const ITEM_2 = 3;
console.log(ITEM_2);

let ITEM_3 = ITEM_1 + ITEM_2;
console.log(ITEM_3);

const ITEM_4 = "Yolochka";
console.log(ITEM_4);
console.log(ITEM_3 + ITEM_4);
console.log(ITEM_3 * ITEM_4); // Здесь будет ошибка из-за попытки умножения числа на строку

let ITEM_5 = ITEM_3;
const ITEM_6 = 15;
let ITEM_6_TYPE = typeof ITEM_6;
console.log('ITEM_6==' + ITEM_6, 'ITEM_6_TYPE==' + ITEM_6_TYPE);

let ITEM_7 = '' + ITEM_6;
let ITEM_7_TYPE = typeof ITEM_7;
console.log('ITEM_7==' + ITEM_7, 'ITEM_7_TYPE==' + ITEM_7_TYPE);