const $dialog = $("#dialog");
const $editBtn = $(".edit-btn");
const $tabs = $("#tabs");

$(function () {
  $("#todo-list-body, #doing-list-body, #done-list-body")
    .sortable({
      connectWith: ".list-body",
      cursor: "grabbing",
      sort: function (event, ui) {},
    })
    .disableSelection();

  $dialog.dialog({
    autoOpen: false,
    classes: {
      "ui-dialog": "modal-content",
      "ui-dialog-titlebar": "modal-header",
      "ui-dialog-title": "modal-title",
      "ui-dialog-titlebar-close": "close",
      "ui-dialog-content": "modal-body",
      "ui-dialog-buttonpane": "modal-footer",
    },
    resizable: false,
    modal: true,
    height: "auto",
    width: "60vw",
	title: "Edit todo",
    show: {
      effect: "fade",
      duration: 400,
      size: 50,
    },
    hide: {
      effect: "fade",
      duration: 400,
      size: 100,
    },
    buttons: {
      Save: function () {
        $(this).dialog("close");
      },
      Cancel: function () {
        $dialog.dialog("close");
      },
    },
  });
  // .extend($.ui.dialog.prototype.options.classes, {
  //   "ui-dialog": "modal-content",
  //   "ui-dialog-titlebar": "modal-header",
  //   "ui-dialog-title": "modal-title",
  //   "ui-dialog-titlebar-close": "close",
  //   "ui-dialog-content": "modal-body",
  //   "ui-dialog-buttonpane": "modal-footer",
  // });

  $tabs.tabs().removeClass("ui-tabs-nav").addClass("nav nav-tabs");

  //   $tabs.tabs({
  //     classes: {
  //       "ui-tabs-nav": "nav nav-tabs",
  //       "ui-tabs-panel": "tab-pane",
  //       "ui-tabs-active": "active",
  //     },
  //   });

  //   $tabs.extend($.ui.tabs.prototype.options.classes, {
  //     "ui-tabs-nav": "nav nav-tabs",
  //     "ui-tabs-panel": "tab-pane",
  //     "ui-tabs-active": "active",
  //   });

  $editBtn.on("click", () => {
    $dialog.dialog("open");
  });
});
