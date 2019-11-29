function handleButton() {
  let i = 1;

  $("#my-progress").width(i+"%");
  }

  function init() {
  $("#button").click(handleButton);
}


$(document).ready(init);