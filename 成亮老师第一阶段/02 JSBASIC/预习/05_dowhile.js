//练习：声明变量保存密码123456，(无限)循环弹出提示框输入密码，如果输入正确结束循环。
var upwd='123456';
/*
do{
  var str=prompt('input password');
  //判断输入的是否正确
  if(str===upwd){
    break;
  }
}while(true);
*///
do{
  var str=prompt('input password');
}while(str!==upwd);//当输入的不正确继续执行循环体
//'123' !== '123456' //true
//'123456' !== '123456' //false


