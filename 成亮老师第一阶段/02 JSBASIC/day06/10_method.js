var person={
  name:'Jerry',
  sex:'男',
  age:18,
  say:function(){
	//this指代当前的对象，和变量名称每关系
    console.log('hello,我的名字叫'+this.name);
  }
}
//console.log( person.say );
//person.say();
// 练习：创建一个手机对象，含有属性颜色、品牌、价格；添加打电话，发短信方法。
var phone={
  color:'black',
  brand:'oppo',
  price:4999,
  call:function(){
    console.log(this.color+'calling...');
  }, 
  sendMsg:function(a){
    return a;
  }
}
phone.call();
console.log( phone.sendMsg('hello....') );
