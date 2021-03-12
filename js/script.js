const $dialog = $("#dialog");
const $editBtn = $(".edit-btn");
const $tabs = $("#tabs");
const $datepicker = $("#datepicker");
const $cardFooters = $(".card-footer");

$(function () {
  $("#todo-list-body, #doing-list-body, #done-list-body")
    .sortable({
      connectWith: ".list-body",
      cursor: "grabbing",
      sort: function (event, ui) {},
    })
    .disableSelection();

  $cardFooters.hide();

  $.widget("ui.bootstrapDialog", $.ui.dialog, {
    classes: {
      "ui-dialog": "modal-content",
      "ui-dialog-titlebar": "modal-header",
      "ui-dialog-title": "modal-title",
      "ui-dialog-titlebar-close": "close",
      "ui-dialog-content": "modal-body",
      "ui-dialog-buttonpane": "modal-footer",
    },
  });

  $.ui.bootstrapDialog.prototype.options.classes,
    {
      "ui-dialog": "modal-content",
      "ui-dialog-titlebar": "modal-header",
      "ui-dialog-title": "modal-title",
      "ui-dialog-titlebar-close": "close",
      "ui-dialog-content": "modal-body",
      "ui-dialog-buttonpane": "modal-footer",
    };

  $dialog.bootstrapDialog({
    autoOpen: false,
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
      effect: "puff",
      duration: 500,
      size: 50,
    },
    buttons: [
      {
        text: "Save",
        class: "btn btn-sm btn-secondary",
        click: function () {
          $dialog.bootstrapDialog("close").removeClass(".ui-button");
        },
        create: function () {
          $dialog
            .bootstrapDialog()
            .find(".ui-button")
            .removeClass(".ui-button");
        },
      },
    ],
    // buttons: {
    //   Save: function () {
    //     $(this).bootstrapDialog("close");
    //   },
    //   Cancel: function () {
    //     $dialog
    //       .bootstrapDialog("close")
    //       .find(".ui-button")
    //       .addClass("btn btn-sm btn-secondary");
    //   },
    //   1: {
    //     id: "close",
    //     text: "Close",
    //     click: function () {
    //       $(this).bootstrapDialog("close").addClass("btn btn-sm btn-secondary");
    //     },
    //     class: "btn btn-sm",
    //   },
    // },
    open: function () {
      $datepicker.datepicker({
        minDate: +1,
        dateFormat: "d/m, -y",
        firstDay: 1,
        showAnim: "blind",
        altField: ".deadline-date",
        altFormat: "d/m, -y",
        onSelect: function (altFormat) {
          $cardFooters.show();
        },
      });
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

  $dialog.removeClass(
    "ui-widget-content ui-widget ui-widget-header ui-dialog ui-dialog-title ui-dialog-content ui-dialog-buttonpane"
  );

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
    $dialog.bootstrapDialog("open");
  });
});
