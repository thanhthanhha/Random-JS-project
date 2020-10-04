
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
})
}
)