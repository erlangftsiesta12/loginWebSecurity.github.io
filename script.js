function enterUsername() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Usernamenya jangan dilupaing Dong :<");
return false;
}
}

function inputPass() {
    var x = document.forms["myForm"]["pword"].value;
    if (x == "") {
        alert("Passwordnya jangan dilupain bang :D");
return false;
}
}
    
function enterPassword() {
var password = document.getElementById("pword").value;
var username = document.getElementById("fname").value;
if (password == "musicRPL3" && username == "RPL3Member") {
window.location = "index2.html";
return true; 
}
else if(username !== "RPL3Member") {
alert("Username kamu kayaknya salah dehhh :(");
return false;
}
else if(password !== "MusicRPL3") {
alert("Password Kamu kayaknya salah dehhh :(");
return false;
}
}

function enterToken() {
    var password = document.getElementById("token").value;
    if (password == "X-RPL-3") {
    window.location = "Ourmusic.html";
    return true; 
    }
    else if(password !== "") {
    alert("Either Username or Password is incorrect");
    return false;
    }
    }
        
function timeAlert() {
alert("yahhh Waktu mu sudah habis:(" + "\n" + "Mohon Refresh Page ini untuk menyegarkan Halaman! :>");
window.location = "index.html"
}

