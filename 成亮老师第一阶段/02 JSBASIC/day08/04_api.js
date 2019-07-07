var str='aToS'; // String
//转为大写
//console.log( str.toUpperCase() );
//转为小写
//console.log( str.toLowerCase() );
var str='javascript';
//查看字符的长度
//console.log( str.length );
//查看某个下标对应的字符
//console.log( str[2] );
//计算javascript中a字符出现的个数
for(var i=0,count=0;i<str.length;i++){
  //console.log(str[i]);
  //console.log(str.charAt(i));
  //if(str[i]==='a'){
  //  count++;
  //}
}
//console.log(count);
//获取字符的下标
/*
var str='javascript';
console.log(str.indexOf('a',2));
console.log(str.lastIndexOf('a'));

var email='hello#tedu.cn';
//判断字符串中是否含有@，如果有返回下标，没有返回-1
if(email.indexOf('@')===-1){
  console.log(false);
}else{
  console.log(true);
}

//练习：声明变量保存验证码(英文字母)，无限循环弹出提示框，输入验证码，不区分大小写，如果输入正确结束循环
var checkCode='nSaM';
while(true){
  //获取输入的验证码
  //点取消，返回null
  var str=prompt('input code');
  //如果取消，设置为空字符串
  if(str===null){
    str='';
  }
  //如果输入正确，结束循环
  if( str.toUpperCase()===checkCode.toUpperCase() ){
    break;
  }
}

//截取字符串
var str='javascript';
//console.log( str.slice(4) );
//console.log( str.slice(4,7) );
console.log( str.slice(-3,-1) );

//练习：声明变量保存邮箱，截取邮箱中的用户名和域名
var email='hello1995@sina.com';
//获取@的下标
var index=email.indexOf('@');
console.log(index);
//截取0~@的下标
console.log(email.slice(0,index));
//截取@下标的下一位到~最后
console.log(email.slice(index+1));

var str='javascript';
//console.log(str.substr(4));
console.log(str.substr(-3,2));

// 练习：声明变量保存身份证号，截取身份证号中年月日，性别
var str='130135198405163590';
var year=str.substr(6,4);
var month=str.substr(10,2);
var date=str.substr(12,2);
var sex=str.substr(-2,1);
//判断性别是否为男
sex=sex%2===1 ? '男' : '女';
console.log(year+'年'+month+'月'+date+'日 性别'+sex);

var str='javascript';
//substring
//console.log( str.substring(4,7) );
//负数转成0 
//console.log( str.substring(-3,-1) );
//自动转成4~7
//console.log( str.substring(7,4) );
//console.log( str.slice(7,4) );
//练习：声明变量保存字符串'heLLO'，要求把首字母转为大写，其余字母转小写
var str='heLLO';
//截取首字母转大写
var first=str.substring(0,1).toUpperCase();
var last=str.substring(1).toLowerCase();
console.log(first+last);


//数组转为字符串
var arr=['西瓜','冰棍','啤酒'];
console.log(arr.join('-'));
var str='西瓜-冰棍-啤酒';
//字符串转数组
console.log( str.split('-') );
*/
//练习：使用split方法截取邮箱的用户名和域名
var str='hello1995@tedu.cn';
var arr=str.split('@');
console.log(arr[0],arr[1]);
var str='javascript';
//j a v a s c r i p t  ''
console.log( str.split('') );

