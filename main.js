$(function() {
  $("h2").on("click", function() {
    var text = $(this).children("span").text();
    var $textarea = $('<textarea></textarea>');
    $textarea.text(text);
    $(this).append($textarea);
    $textarea.select();
    document.execCommand('copy');
    $textarea.remove();
  });
});