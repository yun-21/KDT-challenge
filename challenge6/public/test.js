const string = '010-1235-4678'
const str = string.split('');
console.log(str)

const arr = [];
str.forEach((element,index)=>{
  if(element==='-'){
    console.log(element,index);
    arr.push(index)
  }
})
console.log(arr)
