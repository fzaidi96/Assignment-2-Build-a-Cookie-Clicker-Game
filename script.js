let cookies = parseInt(localStorage.getItem("cookies")) || 0

setInterval(function() {
    cookies++,
    console.log("🍪");
    updateCookieCount()},
    1000)

function updateCookieCount() {
    document.getElementById("cookiecount").textContent = cookies;
    localStorage.setItem("cookies", cookies);
}
updateCookieCount();


function loadCookieCount() {
    localStorage.getItem("cookies",cookies);
    document.getElementById("cookiecount").textContent = cookies;
}

loadCookieCount();



const cookiebutton = document.getElementById("cookiebutton");
const msg = document.createElement("p");

cookiebutton.addEventListener("click", function() {
    cookies++;
    displayMessage()})


function displayMessage() {
   document.body.appendChild(msg);
   msg.textContent = "Nom!";
   setTimeout(function() {document.body.removeChild(msg); }, 550);
}



