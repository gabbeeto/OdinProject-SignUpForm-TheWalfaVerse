
let rootElement = document.querySelector(':root');

let html = document.querySelector('html');
let darkModeImage = document.querySelector(`img[src$='DarkMode.png']`);
let lightModeImage = document.querySelector(`img[src$='LightMode.png']`);


if(matchMedia("(prefers-color-scheme: dark)").matches){
toggleDarkMode();
}


function toggleDarkMode(){
rootElement.classList.toggle('dark');
if(html.className == 'dark'){
darkModeImage.style.display = 'inline-block';
lightModeImage.style.display = 'none';
}
else{
darkModeImage.style.display = 'none';
lightModeImage.style.display = 'inline-block';


}

}
