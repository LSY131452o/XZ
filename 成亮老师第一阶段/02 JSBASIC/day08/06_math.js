//console.log( Math.PI ); //圆周率
// 5 - 10  absolute
//console.log( Math.abs(5-10) );//绝对值
//parseInt()
//console.log( Math.floor(3.8) );//向下
//console.log( Math.ceil(3.8) );//向上
//console.log( Math.round(3.4) );//四舍五入

//console.log( Math.max(9,23,45,6,78) );//取最大
//console.log( Math.min(9,23,45,6,78) );//取最小
//console.log( Math.pow(3,2) );//x的y次幂
//console.log( 3**2 );
//取随机数 0~1 包含0，不包含1
//console.log( Math.random() );
//练习：随机产生0~9之间的一个整数
//0~1 * 10   0~9.9999   0~9
//var num=Math.floor(Math.random()*10);
//console.log(num);
//练习：创建数组，包含5个元素，随机取出两个元素
var arr=['烤羊腿','麻辣小龙虾','啤酒','烤鱼','羊肉串'];
for(var i=0;i<3;i++){
  //取0~4随机整数
  //随机数乘以5，向下取整
  var index=Math.floor(Math.random()*5);
  console.log(arr[index]);
}




