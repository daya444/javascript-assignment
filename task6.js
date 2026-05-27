// Task 1

let employees = [
  {name:"john", salary:200000},
  {name:"rahul", salary:500000},
  {name:"siva", salary:700000}
]

employees
.filter(function(item){
    return item.salary > 300000
})
.map(function(item){
    console.log("Congrats " + item.name)
})


// Task 2

let cart = [1200, 3400, 500, 999]

let total = cart.reduce(function(sum,item){
    return sum + item
},0)

console.log(total)


// Task 3

let user = "naveen"

let result = user.slice(0,1).toUpperCase() + user.slice(1)

console.log(result)


// Task 4

let otp = "560890"

if(otp.includes("0")){
    console.log("Valid OTP")
}

else{
    console.log("Invalid OTP")
}


// Task 5

let orders = ["burger","pizza"]

orders.push("shawarma")

orders.pop()

console.log(orders)


// Task 6

let marks = [40,50,70,80]

let check = marks.every(function(item){
    return item >= 35
})

console.log(check)


// Task 7

let customer = [
  {name:"arun", purchase:5000},
  {name:"vijay", purchase:15000},
  {name:"surya", purchase:25000}
]

let output = customer.find(function(item){
    return item.purchase > 10000
})

console.log(output.name)


// Task 8

let msg = "hello"

let reverse = msg.split("").reverse().join("")

console.log(reverse)


// Task 9

let products = ["tv","laptop","mobile","watch"]

console.log(products.indexOf("mobile"))


// Task 10

let marks2 = [99,45,12,67,89]

marks2.sort(function(a,b){
    return a-b
})

console.log(marks2)


// Task 11

let movies = ["Jailer","Leo","Vikram"]

let movieCheck = movies.some(function(item){
    return item == "Leo"
})

console.log(movieCheck)


// Task 12

let num = "6383366774"

console.log(num.slice(-4))


// Task 13

let mark = 78

console.log(mark >= 35 ? "Pass" : "Fail")


// Task 14

function fare(baseFare, extraKm){

    return baseFare + extraKm

}

console.log(fare(100,50))


// Task 15

let tag = "web developer"

console.log(tag.replaceAll(" ","_"))


// Task 16

let movies2 = [
  {name:"A", age:13},
  {name:"B", age:18},
  {name:"C", age:10}
]

let kids = movies2.filter(function(item){
    return item.age < 18
})

kids.forEach(function(item){
    console.log(item.name)
})


// Task 17

let product = "iphone"

console.log(product.startsWith("i"))


// Task 18

let groups = ["office","friends","family"]

groups.forEach(function(item,index){
    console.log(index + 1,item)
})


// Task 19

let salary = [20000,50000,70000,10000]

let high = salary.reduce(function(max,item){

    if(item > max){
        return item
    }

    else{
        return max
    }

})

console.log(high)


// Task 20

let password = "navi@123"

if(password.includes("@") && password.length >= 8){
    console.log("Strong Password")
}

else{
    console.log("Weak Password")
}