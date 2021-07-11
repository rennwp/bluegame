// Memanggil
var kotak1 = document.getElementById('kotak1');
var kotak2 = document.getElementById('kotak2');
var kotak3 = document.getElementById('kotak3');
var next = document.getElementById('next');
var button = document.getElementById('button');
var intro = document.getElementById('intro')

// close intro window
button.addEventListener('click', function () {
    intro.classList.toggle('undisplay')
})

// Kondisi
kotak1.addEventListener('click', function() {
    if(kotak1.classList.contains('biru') && kotak2.classList.contains('biru') && kotak3.classList.contains('biru')){
        return;
     }
    
    kotak2.classList.toggle('biru');
    kotak3.classList.toggle('biru');

    if(kotak1.classList.contains('biru') && kotak2.classList.contains('biru') && kotak3.classList.contains('biru')){
       next.classList.toggle('display');
    }
});

kotak2.addEventListener('click', function() {
    if(kotak1.classList.contains('biru') && kotak2.classList.contains('biru') && kotak3.classList.contains('biru')){
        return;
     }
    
    kotak1.classList.toggle('biru');

    if(kotak1.classList.contains('biru') && kotak2.classList.contains('biru') && kotak3.classList.contains('biru')){
        next.classList.toggle('display');
    }
});

kotak3.addEventListener('click', function() {
    if(kotak1.classList.contains('biru') && kotak2.classList.contains('biru') && kotak3.classList.contains('biru')){
        return;
     }
    
    kotak2.classList.toggle('biru');
    
    if(kotak1.classList.contains('biru') && kotak2.classList.contains('biru') && kotak3.classList.contains('biru')){
        next.classList.toggle('display');
    }
});

