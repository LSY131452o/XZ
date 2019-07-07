//弹出提示框，输入商品的价格和数量
var price=prompt('input price');
var count=prompt('input count');
//console.log(price,count);
//获取总价
var total=price*count;
//满500打九折
if(total>=500){
  total*=0.9;
}
//console.log(total);
//声明变量保存当前账户余额
var money=1000;
//判断余额是否足以支付商品总价
if(money>=total){
  console.log('pay success');
}else{
  console.log('pay error');
}











