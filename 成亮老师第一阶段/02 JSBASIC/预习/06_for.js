/*
//打印1~10之间所有整数
for(var i=1;i<=10;i++){
  console.log(i);
}

//打印80 75 70 65 60
for(var i=80;i>=60;i-=5){
  console.log(i);
}
//计算1~100之间所有奇数的和
var sum=0;
for(var i=1;i<=100;i++){
  //判断i是否为奇数
  if(i%2===1){
    sum+=i;
  }
}
console.log(sum);

//计算1~20之间所有能3整除的数字的乘积
var num=1;
for(var i=1;i<=20;i++){
  //所有能被3整除的数字
  if(i%3===0){
    num*=i;
  }
}
console.log(num);

//能被4整除，并且不能被100整除，或者能被400整除
//打印2000~2100之间所有的闰年
//产生所有的年份i
for(var i=2000;i<=2100;i++){
  //判断所有的年份i是否为闰年，如果是打印
  if(i%4===0 && i%100!==0 || i%400===0){
    console.log(i); 
  }
}

//12345
var str='';//'123'
for(var i=1;i<=5;i++){
  //console.log(i);
  //把i拼接到str中
  //str在原来基础之上拼接i
  str+=i;  //str = str+i
}
console.log(str);
*/
/*
1*1=1
1*2=2 2*2=4
1*3=3 2*3=6 3*3=9

12345
1*5=5 2*5=10 3*5=15 4*5=20 5*5=25
*/
//var str='';
for(var i=1,str='';i<=5;i++){
  str+=i+'*5='+(i*5)+' ';
}
console.log(str);




