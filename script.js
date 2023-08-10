let input = document.querySelector('input');
input.addEventListener('click', colorMode);

let footer = document.querySelector('.footer');

function colorMode(){ 
    console.log(input.checked);
    if(input.checked == true){
        document.body.classList.add('lightMode');
        footer.classList.remove('lightMode');

    }
    else{
        document.body.classList.remove('lightMode');
        footer.classList.add('lightMode');
    }
}
