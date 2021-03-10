const $dialog = $("#dialog");
const $editBtn = $(".edit-btn");

$(() => {
  $("#todo-list-body, #doing-list-body, #done-list-body")
    .sortable({
      connectWith: ".list-body",
      cursor: "grabbing",
      sort: function (event, ui) {},
    })
    .disableSelection();

  $dialog.dialog({
    autoOpen: false,
    resizable: false,
    modal: true,
    show: {
      effect: "fold",
      duration: 400,
      size: 50,
    },
    hide: {
      effect: "fold",
      duration: 400,
      size: 50,
    },
    buttons: [
      {
        text: "Save",
        class: "btn btn-sm btn-secondary",
        click: () => {
          $dialog.dialog("close");
        },
      },
    ],
  });

  $editBtn.on("click", () => {
    $dialog.dialog("open");
  });
  
});
