// javascript

let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let password1 = []
let generatePasswordEl = document.getElementById("gen-password-btn")
let randomPassword1El = document.getElementById("random-password1")
let randomPassword2El = document.getElementById("random-password2")

function getRandomCharacter() {
    let randomCharacter = Math.floor(Math.random() * characters.length)
    return characters[randomCharacter]
}

function genPassword() {
    let firstCharacter = getRandomCharacter()
    let secondCharacter = getRandomCharacter()
    let thirdCharacter = getRandomCharacter()
    let fourthCharacter = getRandomCharacter()
    let fifthCharacter = getRandomCharacter()
    let sixthCharacter = getRandomCharacter()
    let seventhCharacter = getRandomCharacter()
    let eigthCharacter = getRandomCharacter()
    let ninthCharacter = getRandomCharacter()
    let tenthCharacter = getRandomCharacter()
    let eleventhCharacter = getRandomCharacter()
    let twelvethCharacter = getRandomCharacter()
    let thirteenthCharacter = getRandomCharacter()
    let fourteenthCharacter = getRandomCharacter()
    let fifteenthCharacter = getRandomCharacter()
    let firstCharacterPW2 = getRandomCharacter()
    let secondCharacterPW2 = getRandomCharacter()
    let thirdCharacterPW2 = getRandomCharacter()
    let fourthCharacterPW2 = getRandomCharacter()
    let fifthCharacterPW2 = getRandomCharacter()
    let sixthCharacterPW2 = getRandomCharacter()
    let seventhCharacterPW2 = getRandomCharacter()
    let eigthCharacterPW2 = getRandomCharacter()
    let ninthCharacterPW2 = getRandomCharacter()
    let tenthCharacterPW2 = getRandomCharacter()
    let eleventhCharacterPW2 = getRandomCharacter()
    let twelvethCharacterPW2 = getRandomCharacter()
    let thirteenthCharacterPW2 = getRandomCharacter()
    let fourteenthCharacterPW2 = getRandomCharacter()
    let fifteenthCharacterPW2 = getRandomCharacter()
    password1 = [firstCharacter, secondCharacter, thirdCharacter, fourthCharacter, fifthCharacter, sixthCharacter, seventhCharacter, eigthCharacter, ninthCharacter, tenthCharacter, eleventhCharacter, twelvethCharacter, thirteenthCharacter, fourteenthCharacter, fifteenthCharacter]
    password2 = [firstCharacterPW2, secondCharacterPW2, thirdCharacterPW2, fourthCharacterPW2, fifthCharacterPW2, sixthCharacterPW2, seventhCharacterPW2, eigthCharacterPW2, ninthCharacterPW2, tenthCharacterPW2, eleventhCharacterPW2, twelvethCharacterPW2, thirteenthCharacterPW2, fourteenthCharacterPW2, fifteenthCharacterPW2]
    renderPassword()
}

function renderPassword() {
    randomPassword1El.textContent = ""
    for (let i = 0; i < password1.length; i++) {
    randomPassword1El.textContent += password1[i]
    }
    randomPassword2El.textContent = ""
    for (let i = 0; i < password2.length; i++) {
    randomPassword2El.textContent += password2[i]
    }
}

