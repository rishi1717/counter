let count=0
console.log(count)

function increment(){
    console.log("increment clicked")
    count++
    console.log(count)
    document.getElementById("count").innerText = count
}
let countentry=''
function save(){
    console.log("save clicked")
    countentry += count + " , "
    document.getElementById("entry").innerText = countentry
    count = 0
    document.getElementById("count").innerText = count
}

