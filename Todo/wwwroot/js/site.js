// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function toggleIsDoneCheckbox() {
    var isDone = $("#hideIsDone").prop('checked');
    $("li").each(function () {
        if ($(this).html().indexOf('isDone') > -1) {
            if (isDone) {
                $(this).hide();
            }
            else {
                $(this).show();
            }
        }
    });
}