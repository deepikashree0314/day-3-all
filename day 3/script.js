var obj1 = {name:"person1", age:5};
var obj2 = {age:5, name:"person1"};

var a=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(let key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            a=false;
            break;
        }
    }
}
else {
    a=false;
}
console.log(a);