$(document).ready(() => {
  $('body').prepend("<header class='nyc-header'></header><br></br>")
  $('body').append("<footer class='nyc-footer'></footer>")

  $(".nyc-header").load("../header.html");
  $(".nyc-footer").load("../footer.html");
})
