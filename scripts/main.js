let myImage = document.querySelector('.myImage');

myImage.onclick = function() {
    let myImageSrc = myImage.getAttribute ('src');
    if (myImageSrc === 'images/firefox-icon.png'){
        myImage.setAttribute ('src','images/firefox2.png');
    } else {
        myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

let changeUserButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
    let myName = prompt('Inter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Lol ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storageName = localStorage.getItem('name');
    myHeading.textContent = 'lol2 ' + storageName;
}

changeUserButton.onclick = function(){
    setUserName();
}