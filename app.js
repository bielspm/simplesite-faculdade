'use strict';

//(alert('Hello World'))();

document.querySelector('.btn').addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');

    var className = document.body.className;
    if (className == '.light-theme'){
        this.className = ".dark-theme";
    }
    else {
        this.className = ".light-theme";
    }
    console.log('current class name: ' + className);
});