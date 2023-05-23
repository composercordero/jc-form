const feelings = document.querySelector('.feelings');

for (let i = 0; i <= 9; i++){
    const option = document.createElement('option');
    const choice = i+1 < 10? i+1 : 10;
    option.value = choice;
    option.text = choice;
    feelings.appendChild(option);
}