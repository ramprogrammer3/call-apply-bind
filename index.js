var obj = {
    firstName : "rahul",
    lastName : "sharma"
}
console.log(obj)


var obj = {
    firstName : "rahul",
    lastName : "sharma",
    fullName : function(){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(obj.fullName())



var obj = {
    firstName : "rahul",
    lastName : "sharma",
    fullName : function(){
        return `${this.firstName} ${this.lastName}`
    }
}

var obj2 = {
    firstName : "john",
    lastName : "snow",
}
console.log(obj.fullName.call(obj2))



var obj = {
    firstName : "rahul",
    lastName : "sharma",
    fullName : function(){
        return `${this.firstName} ${this.lastName}`
    }
}
function fullName(){
    return `${this.firstName} ${this.lastName}`
}

var obj2 = {
    firstName : "john",
    lastName : "snow",
}

console.log(fullName.call(obj))
console.log(fullName.call(obj2))




var obj = {
    firstName : "rahul",
    lastName : "sharma",
    fullName : function(){
        return `${this.firstName} ${this.lastName}`
    }
}
function fullName(city){
    return `${this.firstName} ${this.lastName} city : ${city}`
}
var obj2 = {
    firstName : "john",
    lastName : "snow",
}
console.log(fullName.call(obj,"Noida"))
console.log(fullName.call(obj2,"greater Noida"))

console.log(fullName.apply(obj,["Noida"]))
console.log(fullName.apply(obj2,["greater Noida"]))

var fullNameCopy = fullName.bind(obj, "Noida")
console.log(fullNameCopy())