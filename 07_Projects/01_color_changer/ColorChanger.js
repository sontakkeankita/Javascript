const button = document.querySelectorAll('.button');
const body = document.querySelector('body')

button.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
       // console.log(e);
       // console.log(e.target);
        if(e.target.id === 'yellow'){
            body.style.background = e.target.id;
        }
        if(e.target.id === 'aqua'){
            body.style.background = e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.background = e.target.id;
        }
        if(e.target.id === 'red'){
            body.style.background = e.target.id;
        }
    });
});