export function genWeatherIcons(code){
  return `https://s5.sencdn.com/web/icons/black/${code}@2x.png`;
}

// 生成两个数之间的随机数，包括边界值
export function genRandomNum(min, max) {
  return Math.floor(Math.random() * 3);
}
