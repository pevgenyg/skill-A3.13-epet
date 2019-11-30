let i = 0;

function handleButton() {
 i =  i+ 1;

  $("#my-progress").width(i+"%");
  }

function handleButton1() {
   i = i+3;

  $("#my-progress").width(i+"%");
  }

  function handleButton2() {
   i = i+17;

  $("#my-progress").width(i+"%");
  }

  function init() {
  $("#button").click(handleButton);
  $("#button1").click(handleButton1);
  $("#button2").click(handleButton2);

}

$(document).ready(init);
