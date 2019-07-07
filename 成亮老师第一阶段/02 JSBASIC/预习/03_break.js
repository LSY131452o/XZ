/*
var i=1;
while(true){
  console.log(i);
  //当打印完100，强制结束循环
  if(i===100){
    break;
  }
  i++;
}

//使用无限循环计算1~10之间所有整数的乘积
var i=1;
//初始化变量为1，用于保存所有数字的乘积
var num=1;
while(true){
  //i就代表1~10
  //把i乘以到num中
  num*=i;
  //当i为10的时候，结束循环
  if(i===10){
    break;
  }
  i++;
}
console.log(num);
*/
//练习：声明变量保存任意一个数字，无限循环的循环体中弹出提示框输入数字，如果输入的数字大于保存的数字，使用警示框弹出'big';如果小于保存的数字，弹出'small'；否则弹出'right',并结束循环。
var num=12;
//无限循环弹出提示框

while(true){
  //输入的值，类型为字符串
  var str=prompt('input a number');
  //如果输入的值大于保存的
  if(str>num){
    alert('big');
  }else if(str<num){//如果输入的小于保存的
    alert('small');
  }else{ //否则相同
    //判断str是否为NaN
	//isNaN()
    if( isNaN(str) ){//如果值为NaN
	  alert('please input a number');
	}else{
	  //不是NaN
	  alert('right');
	  break;
	}
  }
}

//直接点确定，返回''，点击取消返回 null
//Number('')  //0
//Number(null) //0
//var n=prompt();
//console.log(n,typeof n);
//console.log( Number(n) );





