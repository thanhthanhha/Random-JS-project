
$( document ).ready(() => {
    console.log('dope');
    $("#name").focus(() => {
    console.log( "Handler for .focus() called." );
    $("#arrow").removeClass("arrow");
    $("#arrow").addClass("animated");
});
$("#name").blur(() => {
    console.log( "Handler for .focus() called." );
    $("#arrow").removeClass("animated");
    $("#arrow").addClass("arrow");
});
}
)
function showTime() {
    var today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    const amPm = hour >= 12 ? 'AM' : 'PM';

    hour = hour % 12 || 12;
    
    $('#time').html(`${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`);
    setTimeout(showTime, 1000);
}
function addZero(n) {
    return(parseInt(n, 10) < 10 ? '0' : '') + n;
}

//get local name
function getName() {
    if (localStorage.getItem('name') === null ) {
        $('#name').html('thanhha');
    } else {
        $('#name').html(localStorage.getItem('name'));
        console.log(localStorage.getItem('name'));
    }
}
jQuery(document.body).on("blur", () => {
    $('#name').blur(() => {
        localStorage.setItem('#name', e.target.innerText);
    });
})
jQuery(document.body).on("click", () => {
    $('#name').keypress(() => {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('#name', e.target.innerText);
            $('#name').blur();
        }
        console.log('asdsadasd');
    })
})
//run
showTime();
getName();