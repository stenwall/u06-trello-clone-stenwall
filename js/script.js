const $dialog = $("#dialog");
const $todoCards = $(".todo-card");
const $tabs = $("#tabs");
const $cardFooters = $(".card-footer");
let todoDataMap = new Map();

$(function () {
  $("#todo-list-body, #doing-list-body, #done-list-body")
    .sortable({
      connectWith: ".list-body",
      cursor: "grabbing",
      //   sort: function (event, ui) {},
    })
    .disableSelection();

  $cardFooters.hide();

  $tabs.tabs();

  const $datepicker = $(this).find(".datepicker");

  $datepicker.datepicker({
    minDate: +1,
    dateFormat: "DD, d MM, yy",
    firstDay: 1,
    showAnim: "blind",
    autoSize: true,
  });

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
          //   $(this).dialog("close").remove();
          $(this).dialog("close");
        },
      },
    ],
    open: function () {
      const $thisCard = $($dialog.data("id"));
      //   const $thisCardFooter = $thisCard.find(".card-footer");
      const $task = $thisCard.find("h3").text();
      const $desc = $thisCard.data("desc");
      const $deadlineObj = $thisCard.data("date");
      // let bgColor = $thisCard.find(".card-body").css("background-color");

      $("#task-title").val($task);
      $("#task-desc").val($desc);

      if (!$deadlineObj) {
        $datepicker.datepicker("refresh");
      } else {
        $datepicker.datepicker("setDate", $deadlineObj);
      }

      //   let $currentDate;

      //   if ($deadlineDate.data("current-date") != null) {
      //     $currentDate = $deadlineDate.data("current-date", $dateObj);
      //     $("#datepicker").val($currentDate);
      //   }

      //   dialogDatePicker.change(function (event) {
      //     date = $(event.currentTarget).datepicker().val();
      //     dialog.data({ ...dialogData, date });
      //   })

      $datepicker.on("change", function (event) {
        let $thisCard = $($dialog.data("id"));
        const $date = $(event.currentTarget).datepicker().val();
        const $dateObj = $.datepicker.parseDate("DD, d MM, yy", $date);
        $thisCard.data("date", $dateObj);
      });
    },

    close: function () {
      const $thisCard = $($dialog.data("id"));
      const $dateObj = $thisCard.data("date");

      let $task = $("#task-title").val();
      $thisCard.find("h3").text($task);

      let $desc = $("#task-desc").text();
      $thisCard.data("desc", $desc);

      if ($dateObj) {
        $datepicker.datepicker("setDate", $dateObj);
        $thisCard.find(".card-footer").show();
      }

      let $deadlineDate = $thisCard.find(".deadline-date");
      const $howLongToDeadline = $.format.prettyDate($dateObj);
      $deadlineDate.text($howLongToDeadline);
    },
  });

  $todoCards.on("click", function (event) {
    $dialog.data("id", `#${event.currentTarget.id}`);
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
