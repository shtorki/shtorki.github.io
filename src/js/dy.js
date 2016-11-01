// Other
var showPhones =  function () {
    $("#modalContacts").modal('show');
};
$("#showPhones").on('click',showPhones);
$("#showPhones2").on('click',showPhones);
$(".showPhones").on('click', showPhones);

// TODO: Get items from dGalery

// ###################################
// ######### Load Dictionary #########
// ###################################
var dic = "src/dics/ru.json";

if(navigator.language != "ru") {
    dic.replace("ru","eng");
}

var loadDic = function (jsonDic) {
// Test
//    console.log($("body").html().match(/%\w*%/g));
//     $(".slider-main").html($(".slider-main").html());
};

$.ajax({
    url: dic,
    cache: true
})
    .done(function( data ) {
        loadDic(data);
    });