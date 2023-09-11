const text = document.querySelector("#textmsg")
const password = document.querySelector('#password')
const result = document.querySelector("#result")
var emojiMsg = "";
var parinam = "";
var pass ="";
function encryption() {

    document.querySelector("#encrypt-btn").addEventListener("click", function () {
        localStorage.clear()
        pass = document.getElementById("password").value;
        console.log(pass)
        var input = document.getElementById("textmsg").value;
        console.log(input)
        var str = input.split("")
        emojiMsg=""
        str.forEach(element => {
            emojiMsg += `&#128${(element.charCodeAt())} `
        });
        document.querySelector("#result").innerHTML = emojiMsg
        var dataarr = {"pass":pass,"input":input,"emojiMsg":emojiMsg}
        localStorage.setItem(`data1`, JSON.stringify(dataarr))
    })

}

function decryption() {
    document.querySelector("#decrypt-btn").addEventListener("click", function () {
        var encEmoji = document.getElementById("emojimsg").value;
        var userPassword = document.getElementById("finalpassword").value;
        var data2 = JSON.parse(localStorage.getItem('data1'))
        var ash = encEmoji.split(" ")
        var str2="";
         ash.forEach(element => {
            str2 += `&#${(element.codePointAt(0))} `
            });
        console.log(userPassword,data2.pass)
        if (userPassword==data2.pass) {
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = `#eee`
            document.querySelector("#result").innerHTML = data2.input
        } else {
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = `red`
            document.querySelector("#result").innerHTML = "Wrong password!"
        }
    })

}


function btnClicking() {

    document.querySelector("button").addEventListener("click", function () {
        document.querySelector("#result").style.display = "block"
    })
    document.querySelector("#dec-btn").addEventListener("click", function () {
        document.querySelector("#result").style.display = "none"
        document.querySelector("#decryption").style.display = "block"
        document.querySelector("#encryption").style.display = "none"
        document.querySelector("#dec-btn").style.backgroundColor = "#333"
        document.querySelector("#enc-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1 span img").style.rotate = '270deg'
    })
    document.querySelector("#enc-btn").addEventListener("click", function () {
        document.querySelector("#decryption").style.display = "none"
        document.querySelector("#result").style.display = "none"
        document.querySelector("#encryption").style.display = "block"
        document.querySelector("#dec-btn").style.backgroundColor = "#222"
        document.querySelector("#enc-btn").style.backgroundColor = "#333"
        document.querySelector("#main>h1 span img").style.rotate = '90deg'
    })
}

encryption();

decryption()

btnClicking();
