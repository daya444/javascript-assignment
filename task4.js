// Task 1

function exam(attendance, fees) {

    if (attendance >= 75 && fees == true) {
        console.log("Allowed for Exam")
    }
    else {
        console.log("Not Allowed")
    }

}

exam(80, true)


// Task 2

let password = "Abc12345"

let upper = false
let number = false

for (let i = 0; i < password.length; i++) {

    if (password[i] >= 'A' && password[i] <= 'Z') {
        upper = true
    }

    if (password[i] >= '0' && password[i] <= '9') {
        number = true
    }

}

if (password.length >= 8 && upper && number) {
    console.log("Strong Password")
}
else {
    console.log("Weak Password")
}


// Task 3

let arr = [10, 50, 80, 20, 90, 70]

let big = 0
let second = 0

for (let i = 0; i < arr.length; i++) {

    if (arr[i] > big) {
        second = big
        big = arr[i]
    }

    else if (arr[i] > second && arr[i] != big) {
        second = arr[i]
    }

}

console.log(second)


// Task 4

let seats = [0,0,0,0,0,0,0,0,0,0]

function book(seatNo) {

    if (seats[seatNo - 1] == 1) {
        console.log("Seat Already Booked")
    }

    else {
        seats[seatNo - 1] = 1
        console.log("Seat Booked Successfully")
    }

}

book(2)
book(2)


// Task 5

function withdraw(balance, amount) {

    if (amount > balance || balance - amount < 1000) {
        return "Insufficient Balance"
    }

    else {
        return "Withdraw Success"
    }

}

console.log(withdraw(10000, 9500))


// Task 6

let mobiles = ["iphone", "samsung", "realme", "oppo"]

let search = "realme"

let check = false

for (let item of mobiles) {

    if (item == search) {
        check = true
    }

}

if (check) {
    console.log("Product Found")
}

else {
    console.log("Product Not Found")
}


// Task 7

let age = 20
let voter = true
let country = "Indian"

if (age >= 18) {

    if (voter == true && country == "Indian") {
        console.log("Eligible for Voting")
    }

    else {
        console.log("Not Eligible")
    }

}

else {
    console.log("Age Less Than 18")
}


// Task 8

function bill(food, gst, delivery, discount) {

    let total = food + gst + delivery - discount

    console.log("Total Bill :", total)
}

bill(400, 40, 30, 20)


// Task 9

let text = "javascript"

let output = ""

for (let i = text.length - 1; i >= 0; i--) {

    output = output + text[i]

}

console.log(output)


// Task 10

let like = false
let count = 0

function instagramLike() {

    like = !like

    if (like) {
        count++
        console.log("Liked ❤️")
    }

    else {
        count--
        console.log("Like 🤍")
    }

    console.log("Total Likes :", count)

}

instagramLike()
instagramLike()