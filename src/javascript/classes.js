let regex = new RegExp(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);

let value = "123412341234123";
var res = regex.exec(value);
console.log(res);
res = value.match(regex);
console.log(res);
res = value.matchAll(regex);
console.log(res);
res = value.search(regex);
console.log(res);
res = value.replace(regex);
console.log(res);
res = value.split(regex);
console.log(res);
