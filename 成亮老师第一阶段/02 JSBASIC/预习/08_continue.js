//打印1 2 3 4  6 7 8 9 10
/*
for(var i=1;i<=10;i++){
  //当i为5的时候，不执行循环体后边的语句，直接执行增量
  if(i===5){
	//跳过循环体后边语句
	continue;
	//break;
  }
  console.log(i);
}
//练习:计算1~100之间所有偶数的和，如果遇到奇数就跳过
for(var i=1,sum=0;i<=100;i++){
  //当遇到奇数跳过
  if(i%2===1){
    continue;
  }
  //console.log(i);
  sum+=i;
}
console.log(sum);
*/
//练习：打印1~100之间所有整数，不包含能被3或者能被4整除的数字
for(var i=1;i<=100;i++){
  //如果能被3或者能被4整除
  if(i%3===0 || i%4===0){
    continue;
  }
  console.log(i);
}









