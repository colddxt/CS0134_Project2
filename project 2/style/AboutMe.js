$(document).ready(function(){
  $("#me").button();
  $("#me").click(function(){
    $("#dialog").dialog({
      modal: true
    })
  })
})
