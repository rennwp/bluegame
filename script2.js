// Memanggil
var kotak1 = document.getElementById('kotak1');
var kotak2 = document.getElementById('kotak2');
var kotak3 = document.getElementById('kotak3');
var kotak4 = document.getElementById('kotak4');
var kotak5 = document.getElementById('kotak5');
var kotak6 = document.getElementById('kotak6');
var next = document.getElementById('next');
var angka = 0;
var message = document.getElementById('message')

// message susah?



kotak1.addEventListener('click', function() {
    if(kotak1.classList.contains('biru') && kotak2.classList.contains('biru') && kotak3.classList.contains('biru') && kotak4.classList.contains('biru') && kotak5.classList.contains('biru') && kotak6.classList.contains('biru')){
        return;
     }
     if(angka == 9){
        message.classList.toggle('display');
        message.classList.toggle('undisplay');
    }
    if(angka == 14){
        message.classList.toggle('display');
        message.classList.toggle('undisplay');
    }
    angka += 1;
    kotak6.classList.toggle('biru');

    if(kotak1.classList.contains('biru') && kotak2.classList.contains('biru') && kotak3.classList.contains('biru') && kotak4.classList.contains('biru') && kotak5.classList.contains('biru') && kotak6.classList.contains('biru')){
       next.classList.toggle('display');
    }
});

kotak2.addEventListener('click', function() {
    if(kotak1.classList.contains('biru') && kotak2.classList.contains('biru') && kotak3.classList.contains('biru') && kotak4.classList.contains('biru') && kotak5.classList.contains('biru') && kotak6.classList.contains('biru')){
        return;
     }
     if(angka == 9){
        message.classList.toggle('display');
        message.classList.toggle('undisplay');
    }
    if(angka == 14){
        message.classList.toggle('display');
        message.classList.toggle('undisplay');
    }
     angka += 1;
    kotak4.classList.toggle('biru');
    kotak6.classList.toggle('biru');

    if(kotak1.classList.contains('biru') && kotak2.classList.contains('biru') && kotak3.classList.contains('biru') && kotak4.classList.contains('biru') && kotak5.classList.contains('biru') && kotak6.classList.contains('biru')){
       next.classList.toggle('display');
    }
});

kotak3.addEventListener('click', function() {
    if(kotak1.classList.contains('biru') && kotak2.classList.contains('biru') && kotak3.classList.contains('biru') && kotak4.classList.contains('biru') && kotak5.classList.contains('biru') && kotak6.classList.contains('biru')){
        return;
     }
     if(angka == 9){
        message.classList.toggle('display');
        message.classList.toggle('undisplay');
    }
    if(angka == 14){
        message.classList.toggle('display');
        message.classList.toggle('undisplay');
    }
     angka += 1;
    kotak4.classList.toggle('biru');
    kotak2.classList.toggle('biru');

    if(kotak1.classList.contains('biru') && kotak2.classList.contains('biru') && kotak3.classList.contains('biru') && kotak4.classList.contains('biru') && kotak5.classList.contains('biru') && kotak6.classList.contains('biru')){
       next.classList.toggle('display');
    }
});

kotak4.addEventListener('click', function() {
    if(kotak1.classList.contains('biru') && kotak2.classList.contains('biru') && kotak3.classList.contains('biru') && kotak4.classList.contains('biru') && kotak5.classList.contains('biru') && kotak6.classList.contains('biru')){
        return;
     }
     if(angka == 9){
        message.classList.toggle('display');
        message.classList.toggle('undisplay');
    }
    if(angka == 14){
        message.classList.toggle('display');
        message.classList.toggle('undisplay');
    }
     angka += 1;
    kotak3.classList.toggle('biru');
    kotak5.classList.toggle('biru');

    if(kotak1.classList.contains('biru') && kotak2.classList.contains('biru') && kotak3.classList.contains('biru') && kotak4.classList.contains('biru') && kotak5.classList.contains('biru') && kotak6.classList.contains('biru')){
       next.classList.toggle('display');
    }
});

kotak5.addEventListener('click', function() {
    if(kotak1.classList.contains('biru') && kotak2.classList.contains('biru') && kotak3.classList.contains('biru') && kotak4.classList.contains('biru') && kotak5.classList.contains('biru') && kotak6.classList.contains('biru')){
        return;
     }
     if(angka == 9){
        message.classList.toggle('display');
        message.classList.toggle('undisplay');
    }
    if(angka == 14){
        message.classList.toggle('display');
        message.classList.toggle('undisplay');
    }
     angka += 1;
    kotak1.classList.toggle('biru');
    kotak3.classList.toggle('biru');

    if(kotak1.classList.contains('biru') && kotak2.classList.contains('biru') && kotak3.classList.contains('biru') && kotak4.classList.contains('biru') && kotak5.classList.contains('biru') && kotak6.classList.contains('biru')){
       next.classList.toggle('display');
    }
});

kotak6.addEventListener('click', function() {
    if(kotak1.classList.contains('biru') && kotak2.classList.contains('biru') && kotak3.classList.contains('biru') && kotak4.classList.contains('biru') && kotak5.classList.contains('biru') && kotak6.classList.contains('biru')){
        return;
     }
     if(angka == 9){
        message.classList.toggle('display');
        message.classList.toggle('undisplay');
    }
    if(angka == 14){
        message.classList.toggle('display');
        message.classList.toggle('undisplay');
    }
     angka += 1;
    kotak1.classList.toggle('biru');
    kotak5.classList.toggle('biru');

    if(kotak1.classList.contains('biru') && kotak2.classList.contains('biru') && kotak3.classList.contains('biru') && kotak4.classList.contains('biru') && kotak5.classList.contains('biru') && kotak6.classList.contains('biru')){
       next.classList.toggle('display');
    }
});



