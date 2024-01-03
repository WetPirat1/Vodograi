document.addEventListener("DOMContentLoaded", function() {
    var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 200, // Установите желаемую скорость в миллисекундах (меньше значение - медленнее)
    });
});


$(document).ready(function(){
    //Скрыть PopUp 1 при загрузке страницы    
    PopUpHide();
});
//Функция отображения PopUp 1
function PopUpShow(){
    $("#popup-service-card-1").show();
}
//Функция скрытия PopUp 1
function PopUpHide(){
    $("#popup-service-card-1").hide();
}



$(document).ready(function(){
    //Скрыть PopUp 2 при загрузке страницы    
    PopUpHide2();
});
//Функция отображения PopUp 2
function PopUpShow2(){
    $("#popup-service-card-2").show();
}
//Функция скрытия PopUp 2
function PopUpHide2(){
    $("#popup-service-card-2").hide();
}




$(document).ready(function(){
    //Скрыть PopUp 3 при загрузке страницы    
    PopUpHide3();
});
//Функция отображения PopUp 3
function PopUpShow3(){
    $("#popup-service-card-3").show();
}
//Функция скрытия PopUp 3
function PopUpHide3(){
    $("#popup-service-card-3").hide();
}



document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

function toggleBurgerMenu() {
    var burgerMenu = document.querySelector('.burger-menu');
    var navUl = document.querySelector('.header_container nav ul');

    // Переключаем класс у иконки бургера
    burgerMenu.classList.toggle('active');

    // Переключаем класс у списка навигации
    navUl.classList.toggle('active');
}

// accordeon
document.addEventListener('DOMContentLoaded', function () {
    const accordionTitles = document.querySelectorAll('.accordion-title');

    accordionTitles.forEach(title => {
        title.addEventListener('click', function () {
            // Toggle the active class on the clicked title
            title.classList.toggle('active');

            // Toggle the active class on the corresponding body
            const body = title.nextElementSibling;
            body.classList.toggle('active');
        });
    });
});

document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
})