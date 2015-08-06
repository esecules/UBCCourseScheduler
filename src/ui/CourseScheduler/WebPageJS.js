/**
 * Created by Tiffy on 15-08-01.
 */
var main;

main = function () {
    $(".course-input .btn").click(function(){
        var tag = $("#coursecode").val();
        var deleteButton = $("<button>").button({
            icons: {primary: "ui-icon-close"},
            text:false})
            .click(function(){
                $(this).parent().remove();
            });
        $("<li>").text(tag).draggable().append(deleteButton).appendTo(".course-tags");
        $("#coursecode").val("");
        $(".btn").addClass("disabled");
    });

    $(".input-box").keyup(function(){
        var codeLength = $(this).val().length;
        var remainChars=12 - codeLength;
        if(remainChars == 12 || remainChars < 0){
            $(".course-input .btn").addClass("disabled");
        } else{
            $(".course-input .btn").removeClass("disabled");
        }
    });

    //TODO: add in functionality to serve backend
    //TODO: check whther course code is valid
    //TODO: use sweet alert if not

    $(".btn").addClass("disabled");
}

$(document).ready(main);
