//循环打印10次'hello'
//0~9  
/*
var i=0;
while(i<10){//循环条件
  //循环体
  //console.log('hello');
  console.log(i);
  //i变化起来
  i++;
}

//循环打印11~20之间所有整数
var i=11;//3.初始值
while(i<=20){//1.循环条件
  //2.循环体
  console.log(i);
  //每打印完，往后加1
  i++;//4.增量
}
//结束循环的时候，i的值21
console.log('结束时i的值为'+i);

//练习：打印40 38 36 34 32 30
var i=40;//初始值
while(i>=30){
  console.log(i);
  //每次减2
  i-=2;
}

//练习：打印1~100之间所有的奇数
//循环产生1~100之间所有整数
var i=1;
while(i<=100){
  //判断i是否为奇数，如果是打印
  if(i%2==1){
    console.log(i);
  }
  i++;
}

//练习：计算1~100之间所有整数的和
//需要准备变量并初始化为0，来保存所有的整数，每次产生的整数都加到变量中
var i=1;
//声明变量，用于保存所有整数的和
var sum=0;//0+1+2...+100
while(i<=100){
  //i代表1~100之间所有整数
  //把i加到sum中，sum在原来基础上加i
  sum+=i;
  //console.log(sum);
  i++;
}
console.log(sum);
*/
//练习：计算1~100之间所有偶数的和
var i=1;
var sum=0;
while(i<=100){
  //判断i是否为偶数，如果是加到sum中
  if(i%2===0){
    sum+=i;
  }
  i++;
}
console.log(sum);




