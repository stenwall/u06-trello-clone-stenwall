const $dialog = $("#dialog");
const $datepicker = $("#datepicker");

$(".card-footer").hide();

$(function () {
  $("#todo-list-body, #doing-list-body, #done-list-body")
    .sortable({
      connectWith: ".list-body",
      cursor: "grabbing",
      //   sort: function (event, ui) {},
    })
    .disableSelection();

  $("#tabs").tabs();

  $datepicker.datepicker({
    minDate: +1,
    dateFormat: "DD, d MM, yy",
    firstDay: 1,
    showAnim: "blind",
    autoSize: true,
  });

  $dialog.dialog({
    autoOpen: false,
    modal: true,
    height: "auto",
    width: "30rem",
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
    create: function () {
      $(".ui-dialog-titlebar-close").hide();
    },
    open: function () {
      const $thisCard = $($dialog.data("id"));
      const $task = $thisCard.find("h3").text();
      const $desc = $thisCard.data("desc");
      const $deadlineObj = $thisCard.data("date");
      // let bgColor = $thisCard.find(".card-body").css("background-color");

      $("#task-title").val($task);
      $("#task-desc").val($desc);

      if (!$deadlineObj) {
        $datepicker.datepicker("setDate", null);
      } else {
        $datepicker.datepicker("setDate", $deadlineObj);
      }

      $datepicker.on("change", function (event) {
        let $thisCard = $($dialog.data("id"));
        const $date = $(event.currentTarget).datepicker().val();
        const $dateObj = $.datepicker.parseDate("DD, d MM, yy", $date);
        $thisCard.data("date", $dateObj);
      });

      $("#clear").on("click", function () {
        $datepicker.datepicker("setDate", null);
        $dialog.data("date", null);
        $thisCard.find(".card-footer").hide();
      });
    },

    close: function () {
      const $thisCard = $($dialog.data("id"));
      const $dateObj = $thisCard.data("date");

      let $task = $("#task-title").val();
      $thisCard.find("h3").text($task);

      let $desc = $("#task-desc").val();
      $thisCard.data("desc", $desc);

      if ($dateObj) {
        $datepicker.datepicker("setDate", $dateObj);
        $thisCard.find(".card-footer").show();
        let $deadlineDate = $thisCard.find(".deadline-date");
        const $howLongToDeadline = $.format.prettyDate($dateObj);
        $deadlineDate.text($howLongToDeadline);
      }
    },
  });

  $(".todo-card").on("click", function (event) {
    $dialog.data("id", `#${event.currentTarget.id}`);
    $dialog.dialog("open");
  });
});

