(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button){
        button.addEventListener ('click', function(e) {
            let value;
            if (e.target.dataset.num) {
                value= e.target.dataset.num;
                screen.value += value;
            }
            else {
                if (e.target.dataset.equal) return;
                if (e.target.dataset.clear) screen.value = '';
            }
       
        })
    });

equal.addEventListener('click', function(e){
    if (screen.value ===''){
            screen.value = "";
    }else{
        console.log(screen.value)
        let answer = eval(screen.value);
        screen.value = answer;
    }
})


clear.addEventListener('click', function(e){
    if (screen.value ===''){
            screen.value = "";
    }else{
        console.log(screen.value)
        screen.value = ' ';
    }
})
   
})();
