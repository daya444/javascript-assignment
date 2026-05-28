// Task 1

async function getProducts(){

    let res = await fetch("https://fakestoreapi.com/products/")
    let data = await res.json()

    let result = data.filter(function(item){

        return item.price > 100 && item.category == "electronics"

    })

    result.forEach(function(item){

        console.log(item.title)
        console.log(item.price)

    })

}

getProducts()


// Task 2

let cart = [
  {product:"Shoes", price:2000, qty:2},
  {product:"Watch", price:1500, qty:1},
  {product:"Bag", price:1000, qty:3}
]

let total = cart.reduce(function(sum,item){

    return sum + (item.price * item.qty)

},0)

console.log(total)


// Task 3

let employees = [
  {name:"John", salary:25000},
  {name:"Sam", salary:50000},
  {name:"Ravi", salary:45000},
  {name:"Kumar", salary:30000}
]

employees
.filter(function(item){

    return item.salary > 40000

})
.map(function(item){

    console.log(item.name)

})


// Task 4

let hotels = [
  {hotel:"A2B", rating:4.1},
  {hotel:"KFC", rating:4.7},
  {hotel:"Dominos", rating:4.3}
]

let hotel = hotels.find(function(item){

    return item.rating > 4.5

})

console.log(hotel.hotel)


// Task 5

let marks = [45,67,89,90,34]

let check = marks.every(function(item){

    return item >= 35

})

console.log(check)


// Task 6

let otpList = [1234,4567,7890,9876]

console.log(otpList.includes(7890))


// Task 7

let count = 10

let timer = setInterval(function(){

    console.log(count)

    count--

    if(count < 0){

        clearInterval(timer)

        console.log("Booking Closed")

    }

},1000)


// Task 8

let likes = 0

let likeTimer = setInterval(function(){

    likes++

    console.log("Likes :", likes)

    if(likes == 10){

        clearInterval(likeTimer)

    }

},1000)


// Task 9

let username = "admin"
let password = "12345"

if(username == "admin" && password == "12345"){

    console.log("Login Success")

}

else{

    console.log("Invalid Credentials")

}


// Task 10

let internet = true

let weather = new Promise(function(resolve,reject){

    if(internet){

        resolve("Weather Data")

    }

    else{

        reject("No Internet")

    }

})

weather
.then(function(data){

    console.log(data)

})
.catch(function(err){

    console.log(err)

})


// Task 11

let products = ["shirt","tshirt","mobile","watch"]

let search = products.filter(function(item){

    return item.includes("shirt")

})

console.log(search)


// Task 12

let videos = [10,20,30,40]

let watchTime = videos.reduce(function(sum,item){

    return sum + item

},0)

console.log(watchTime)


// Task 13

let status = "Preparing"

switch(status){

    case "Placed":
        console.log("Order Placed")
        break

    case "Preparing":
        console.log("Food Preparing")
        break

    case "Out for Delivery":
        console.log("Order On The Way")
        break

    case "Delivered":
        console.log("Order Delivered")
        break

    default:
        console.log("Invalid Status")

}


// Task 14

let chats = ["hi","hello","where","ok","bye"]

for(let i=0;i<chats.length;i++){

    console.log(chats[i])

}

console.log("Total Messages :", chats.length)


// Task 15

let age = 20

console.log(age >= 18 ? "watch movie" : "access denied")


// Task 16

let prices = [1200,450,9999,2500,700]

prices.sort(function(a,b){

    return a-b

})

console.log(prices)


// Task 17

let attendance = ["present","absent","present"]

let result = attendance.reduce(function(obj,item){

    if(obj[item]){

        obj[item]++

    }

    else{

        obj[item] = 1

    }

    return obj

},{})

console.log(result)


// Task 18

let balance = 0

function deposit(amount){

    balance = balance + amount

    console.log("Balance :", balance)

}

function withdraw(amount){

    if(amount <= balance){

        balance = balance - amount

        console.log("Balance :", balance)

    }

    else{

        console.log("Insufficient Balance")

    }

}

function checkBalance(){

    console.log("Current Balance :", balance)

}

deposit(5000)
withdraw(2000)
checkBalance()


// Task 19

let ratings = [4.5,2.8,4.0,3.9]

let low = ratings.some(function(item){

    return item < 3

})

console.log(low)


// Task 20

async function productCards(){

    let res = await fetch("https://fakestoreapi.com/products/")
    let data = await res.json()

    let cards = data.map(function(item){

        return `
        
        <div>
            <img src="${item.image}" width="100">
            <h3>${item.title}</h3>
            <p>${item.price}</p>
        </div>

        `

    })

    document.body.innerHTML = cards.join("")

}

productCards()


// Task 21

async function ecommerce(){

    let res = await fetch("https://fakestoreapi.com/products/")
    let data = await res.json()

    // filter category

    let electronics = data.filter(function(item){

        return item.category == "electronics"

    })

    console.log(electronics)

    // sort by price

    let sorted = data.sort(function(a,b){

        return a.price - b.price

    })

    console.log(sorted)

    // search product

    let search = data.filter(function(item){

        return item.title.toLowerCase().includes("shirt")

    })

    console.log(search)

    // cart

    let cart = []

    cart.push(data[0])
    cart.push(data[1])

    console.log(cart)

    // total

    let total = cart.reduce(function(sum,item){

        return sum + item.price

    },0)

    console.log("Total :", total)

}

ecommerce()