const $dialog = $("#dialog");
const $todoCards = $(".todo-card");
const $tabs = $("#tabs");
const $cardFooters = $(".card-footer");

$(function () {
  $("#todo-list-body, #doing-list-body, #done-list-body")
    .sortable({
      connectWith: ".list-body",
      cursor: "grabbing",
      //   sort: function (event, ui) {},
    })
    .disableSelection();

  $tabs.tabs();

  $dialog.dialog({
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
          $(this).dialog("close");
        },
      },
    ],
    open: function () {
      const $thisCardId = $(this).data("id");
      const $thisCard = $("#" + $thisCardId);
      // based on which we click, get the current values
      // const $thisCard = $(this);
      const $thisCardFooter = $thisCard.find(".card-footer");
      let $task = $thisCard.find("h3").text();
      let $desc = $thisCard.data("desc");
      let $deadlineDate = $thisCard.find(".deadline-date");
      // let bgColor = $thisCard.find(".card-body").css("background-color");

      $("#task-title").val($task);
      $("#task-desc").text($desc);
      const $datepicker = $(this).find(".datepicker");
      // let currentDate = $datepicker.datepicker("getDate");
      // if (currentDate != null) {
      // }

      // $.datepicker.parseDate("yy-mm-dd", "2007-01-26");
      $datepicker.datepicker({
        minDate: +1,
        dateFormat: "DD, d MM, yy",
        firstDay: 1,
        showAnim: "blind",
        onSelect: function ($date) {
          $thisCardFooter.show();
          const $shortDate = $datepicker.formatDate("d/m, -y", $date);
          $deadlineDate.text($shortDate);
        },
      });
    },
  });

  $cardFooters.hide();

  $todoCards.on("click", function (event) {
    $dialog.data("id", event.target.id);
    $dialog.dialog("open");
  });
});

//   $.ui.bootstrapDialog.prototype.options.classes,
//     {
//       "ui-dialog": "modal-content",
//       "ui-dialog-titlebar": "modal-header",
//       "ui-dialog-title": "modal-title",
//       "ui-dialog-titlebar-close": "close",
//       "ui-dialog-content": "modal-body",
//       "ui-dialog-buttonpane": "modal-footer",
//     };

//   $dialog.bootstrapDialog({

//     buttons: [
//       {
//         text: "Save",
//         class: "btn btn-sm btn-secondary",
//         click: function () {
//           $dialog.bootstrapDialog("close");
//         },
//       },
//     ],

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

// buttons: [
//   {
//     text: "Save",
//     class: "btn btn-sm btn-secondary",
//     click: function () {
//       $dialog.bootstrapDialog("close").removeClass(".ui-button");
//     },
//     create: function () {
//       $dialog
//         .bootstrapDialog()
//         .find(".ui-button")
//         .removeClass(".ui-button");
//     },
//   },
// ],
//   });

// .extend($.ui.dialog.prototype.options.classes, {
//   "ui-dialog": "modal-content",
//   "ui-dialog-titlebar": "modal-header",
//   "ui-dialog-title": "modal-title",
//   "ui-dialog-titlebar-close": "close",
//   "ui-dialog-content": "modal-body",
//   "ui-dialog-buttonpane": "modal-footer",
// });

//   $tabs.tabs().removeClass("ui-tabs-nav").addClass("nav nav-tabs");

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

//   $editBtn.on("click", (event) => {
//     $dialog.bootstrapDialog("open");
//   });

//   $editBtn.on("click", function () {
//     const id = $(this);
//     $(id).dialog("open");
//   });
