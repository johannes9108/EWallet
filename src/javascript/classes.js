let regex = new RegExp(/[a-zA-ZåäöÅÄÖ]/);

let value = "helllo213123oasdasd123123oaksdsad123412341234123";
// var res = regex.exec(value);
var containsWrong = regex.test(value);
console.log(containsWrong);
// console.log(res);
// res = value.match(regex);
// console.log(res);
// res = value.matchAll(regex);
// console.log(res);
// res = value.search(regex);
// console.log(res);
// res = value.replace(regex);
// console.log(res);
// res = value.split(regex);
// console.log(res);

// regex = new RegExp(/\\[a-zA-ZåäöÅÄÖ]/);

// console.log("hello1234123123".split(//));
