  dragula([
  document.getElementById("forget"),
  document.getElementById("trash")
  ]);
  removeOnSpill: false
  .on("drag", function(el) {
    el.className.replace("ex-moved", "");
  })
  .on("drop", function(el) {
    el.className += "ex-moved";
  })
  .on("over", function(el, container) {
    container.className += "ex-over";
  })
  .on("out", function(el, container) {
    container.className.replace("ex-over", "");
  });

  function addThought() {
  var inputThought = document.getElementById("thoughtText").value;
  document.getElementById("forget").innerHTML +=
    "<li class='thought'><p>" + inputThought + "</p></li>";
  document.getElementById("thoughtText").value = "";
  }

  function emptyTrash() {
  document.getElementById("trash").innerHTML = "";
  }
