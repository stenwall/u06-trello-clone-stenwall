const $dialog = $("#dialog");
const $todoCards = $(".todo-card");
const $tabs = $("#tabs");
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

  $todoCards.on("click", function () {
    //based on which we click, get the current values
    const $thisCard = $(this);
    let task = $thisCard.find("h3").text();
    let desc = $thisCard.data("desc");
    let $deadlineDate = $thisCard.find(".deadline-date");
    let bgColor = $thisCard.find(".card-body").css("background-color");

    $("#task-title").val(task);
    $("#task-desc").val(desc);

    $("#dialog").dialog({
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
            $dialog.bootstrapDialog("close");
          },
        },
      ],
      open: function () {
        const $datepicker = $(this).find(".datepicker");
        let currentDate = $datepicker.datepicker("getDate");
        if (currentDate != null) {
        }

        $.datepicker.parseDate("yy-mm-dd", "2007-01-26");
        //   let $cardFooter = $(this).find(".card-footer");
        $datepicker.datepicker({
          minDate: +1,
          dateFormat: "DD, d MM, yy",
          firstDay: 1,
          showAnim: "blind",
          altField: ".deadline-date",
          altFormat: "d/m, -y",
          onSelect: function ($date) {
            //   $cardFooter.show();
            const $shortDate = $datepicker.formatDate("d/m, -y", $date);
            $deadlineDate.text($shortDate);
          },
        });
      },
    });
  });

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
          $dialog.bootstrapDialog("close");
        },
      },
    ],
    open: function () {
      const $datepicker = $(this).find(".datepicker");
      let currentDate = $datepicker.datepicker("getDate");
      if (currentDate != null) {
      }

      $.datepicker.parseDate("yy-mm-dd", "2007-01-26");
      $.datepicker.formatDate("yy-mm-dd", new Date(2007, 1 - 1, 26));
      //   let $cardFooter = $(this).find(".card-footer");
      $datepicker.datepicker({
        minDate: +1,
        dateFormat: "DD, d MM, yy",
        firstDay: 1,
        showAnim: "blind",
        altField: ".deadline-date",
        altFormat: "d/m, -y",
        onSelect: function (date) {
          //   $cardFooter.show();
          $deadlineDate.text(date);
        },
      });
    },

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

  //   $editBtn.on("click", (event) => {
  //     $dialog.bootstrapDialog("open");
  //   });

  //   $editBtn.on("click", function () {
  //     const id = $(this);
  //     $(id).dialog("open");
  //   });

  //   //opens the appropriate dialog
  //   $editBtn.click(function () {
  //     //takes the ID of appropriate dialogue
  //     var id = $(this).data("id");
  //     //open dialogue
  //     $(id).bootstrapDialog("open");
  //   });
});
