//使用对象字面量创建对象
var person={
  name:'Tom',
  sex:'男',
  age:18,
  'userName':'root',
  'user@pwd':'123456'
}
//console.log(person);
//练习：创建一个员工对象，包含编号、姓名、性别、生日、工资
var emp={
  eid:1,
  ename:'kate',
  sex:0,
  birthday:'1995-10-20',
  salary:8000,
}
//console.log(emp);
//练习：创建一个手机对象，包含颜色、品牌、尺寸、内存大小
var phone={
  color:'white',
  brand:'Huawei',
  size:5.9,
  memory:'128G',
  'made-in':'china'
}
/*
//console.log(phone);
//访问对象中的属性
console.log( phone.color );
console.log( phone['memory'] );
console.log( phone['made-in'] );
console.log( phone.age );
//赋值
phone.size=6.3;
//添加属性
phone.age=3;
console.log(phone);
*/
//练习：创建图书的对象，包含编号、标题、作者、价格、出版时间；修改图书的价格，访问图书的作者，添加图书的出版社属性
var book={
  bid:110001,
  title:'JavaScript高级程序设计',
  author:'尼古拉斯.扎卡斯',
  price:99,
  pubTime:'2017-7-1'
}
book.price=69.7;
console.log( book.author );
book.publish='人民邮电出版社';
console.log(book);



