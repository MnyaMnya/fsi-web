$(document).ready(function() {
    $("#toggle").click(function() {
        $("#div3").slideToggle("slow");
    });
    $("#ha").click(function() {
        $("#Paiskul").slideToggle("slow");
    });
    $("#hb").click(function() {
        $("#pai").slideToggle("slow");
    });
    $(".read").click(function() {
        $("#tex").slideToggle(0);
        $(".read").slideToggle(0);
    });
});