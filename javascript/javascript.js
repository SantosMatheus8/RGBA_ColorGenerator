function changeColor()
{
    let number1 = getRandomNumber(0, 255) 
    let number2 = getRandomNumber(0, 255) 
    let number3 = getRandomNumber(0, 255) 
    let color = `rgba(${number1},${number2},${number3})`
    
    document.body.style.backgroundColor = color 

    document.getElementById("changeButton").style.backgroundColor = color

    insertColorRBGA(number1,number2,number3)
}

function insertColorRBGA(number1, number2, number3)
{
    let text = document.getElementById("colorName")
    text.innerText = `rgba(${number1},${number2},${number3})`
}

function getRandomNumber(min, max)
{
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}
