import $ from "jquery"
import "../css/app1.css"

const $number = $("#number")
const $button1 = $("#add1")
const $button2 = $("#minus1")
const $button3 = $("#mul2")
const $button4 = $("#divide2")
const n = localStorage.getItem("n")
$number.text(n || 100)

$button1.on("click", ()=>{
    let number = parseInt($number.text())
    number += 1
    $number.text(number)
    localStorage.setItem("n", number)
})

$button2.on("click", ()=>{
    let number = parseInt($number.text())
    number -= 1
    localStorage.setItem("n", number)
    $number.text(number)
})

$button3.on("click", ()=>{
    let number = parseInt($number.text())
    number *= 2
    localStorage.setItem("n", number)
    $number.text(number)
})

$button4.on("click", ()=>{
    let number = parseInt($number.text())
    number /= 2
    localStorage.setItem("n", number)
    $number.text(number)
})