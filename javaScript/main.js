$(document).ready(function(){
    // Скрыть PopUp при загрузке страницы    
    PopUpHide();
});

// Функция отображения PopUp
function PopUpShow(){
    $("#popup-service-card-1").show();
}

// Функция скрытия PopUp
function PopUpHide(){
    $("#popup-service-card-1").hide();
}