let todos = [{ item: "PLAY" }];

$("#add").click(() => {
  let object = { item: $("#newItem").val() };
  todos.push(object);
  renderlist();
});

const renderlist = () => {
  $("ul").html("");

  todos.forEach((element, i) => {
    $("ul").append(
      `<li id='${"list" + i}'><span id ='${"nspan" + i}'>${
        element.item
      } <span id = '${"edit" + i}'>edit</span> <span id = '${
        "remove" + i
      }'>remove</span></span></li>`
    );

    $("#remove" + i).click(() => {
      todos.splice(i, 1);
      renderlist();
    });

    $("#edit" + i).click(() => {
      console.log($("#list" + i));
      $("#nspan" + i).hide();

      $("#list" + i).append(
        `<input type='text' id='ed' value='${todos[i].item}'>`
      );

      $("#ed").mouseout((e) => {
        todos[i].item = e.target.value;
        renderlist();
      });
    });
  });
};

renderlist();

$("#clear").click(() => {
  todos = [];
  renderlist();
});
