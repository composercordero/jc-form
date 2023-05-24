const feelings = document.querySelector('.feelings');
const captcha = document.querySelector('.captcha');
const captchaInput = document.querySelector('.captcha-input');
const share = document.querySelector('.share');

share.addEventListener('click', function () {
    const checkCaptcha = captchaInput.value === captchaInput.placeholder ? 
    captchaInput.classList.add('valid') : captchaInput.classList.add('invalid');
});

getRndInteger(100,999);


//creating the options for the drop down menu

for (let i = 0; i <= 9; i++){
    const option = document.createElement('option');
    const choice = i+1 < 10? i+1 : 10;
    if (i + 1 === 5){
        option.selected = "selected";}
    if (i + 1 || i + 1 === 5){
        option.value = choice;
        option.text = choice;
    }
    feelings.appendChild(option);
}

//generate random number for captcha

function getRndInteger(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    captcha.textContent += randomNumber;
    captchaInput.placeholder = randomNumber;
  }




// letter.classList.add("valid")