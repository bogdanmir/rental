$(function() {

  // User menu settings

  var userContainer = $(".user-info");

  userContainer.on("click", function() {
    $element = $(this).closest(".user");
    $userSettings = $element.find(".user-settings");

    if (!$element.hasClass("active")) {
      $element.addClass("active");
      $userSettings.css({ display: "block" }).animate({ opacity: 1 }, 200);
    } else {
      $userSettings.animate({ opacity: 0 }, 200, function() {
        $userSettings.css({ display: "none" });
      });
      $element.removeClass("active");
    }

  });

  // Responsive left menu

  $leftPanel = $(".left-panel-container");
  $leftMenuActivator = $(".left-panel-activator-container");

  $leftMenuActivator.on("click", function() {
    if (!$leftPanel[0].active) {
      $leftPanel[0].active = true;
      $leftMenuActivator.addClass("active");
      $leftPanel.addClass("active");
    } else {
      $leftPanel[0].active = false;
      $leftMenuActivator.removeClass("active");
      $leftPanel.removeClass("active");
    }
  });

  // Contact page

  // Property box

  var $propertyBox = $(".property-box");
  var $propertyBoxChecker = $propertyBox.find(".icon-property");
  var propertyBoxZIndex = 0;

  var propertyBoxToggler = function($event) {
    $event.stopPropagation();
    var $currentPropertyBox = $(this).closest(".property-box");
    var $propertyContainer = $currentPropertyBox.find(".property-container");
    $propertyContainer.css({ zIndex: ++propertyBoxZIndex });
    if (!$propertyContainer[0].active) {
      $propertyContainer[0].active = true;
      $propertyContainer.css({ display: "block" }).animate({ opacity: 1 }, 200);
    } else {
      $propertyContainer[0].active = false;
      $propertyContainer.animate({ opacity: 0 }, 200, function() {
        $propertyContainer.css({ display: "none" });
      });
    }
  };

  $propertyBoxChecker.on("click", propertyBoxToggler);

  // Table items

  var $articleTable = $("article.table");
  var $articleTableChecker = $articleTable.find("thead input[type=\"checkbox\"]");
  var $articleTableTbody = $articleTable.find("tbody");
  var $articleTableTbodyChecker = $articleTableTbody.find("input[type=\"checkbox\"]");

  $articleTableChecker.on("change", function() {
    var $container = $(this).closest(".table");
    var $tbody = $container.find("tbody");
    var $chackers = $tbody.find("input[type=\"checkbox\"]");
    if (!$container[0].active) {
      $container[0].active = true;
      $chackers.prop("checked", true);
    } else {
      $container[0].active = false;
      $chackers.prop("checked", false);
    }
    $chackers.trigger("change");
  });

  $articleTableTbodyChecker.on("change", function() {
    var $container = $(this).closest(".table");
    var $tbody = $container.find("tbody");
    var $chackers = $tbody.find("input[type=\"checkbox\"]");
    var $countToDelete = $container.find(".count-to-delete");
    var $count = $countToDelete.find(".count");
    var checked = 0;
    $chackers.each(function(index, $element) {
      if ($element.checked) checked++;
    });
    if (checked > 0) {
      $count.text(checked);
      $countToDelete.addClass("active");
    } else {
      $count.text(checked);
      $countToDelete.removeClass("active");
    }
  });

  // Availability page

  // Date elements

$(function() {
  try {
    $( "#from" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      onClose: function( selectedDate ) {
        $( "#to" ).datepicker( "option", "minDate", selectedDate );
      }
    });
    $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      onClose: function( selectedDate ) {
        $( "#from" ).datepicker( "option", "maxDate", selectedDate );
      }

    });
  } catch (error) {
    // console.error(error);
  }
});

  // Filter activator

  var $filterActivator = $(".filter-activator");

  $filterActivator.on("click", function() {
    var $filters = $(this).closest(".filters");
    var $filterListWrap = $filters.find(".filter-list-wrap");
    var $filterListHeight = $filterListWrap.find(".filter-list-height");

    if (!$filters.hasClass("active")) {
      $filters.addClass("active");
      $filterListWrap.animate({ height: $filterListHeight.height() }, 600);
    } else {
      $filters.removeClass("active");
      $filterListWrap.animate({ height: 0 }, 600);
    }

  });

  // Popup

  var $body = $("body");
  var $sendMailActivator = $(".send-mail-activator")

  $sendMailActivator.on("click", function() {
    var $this = $(this);
    var $container = $this.closest(".container");
    var $popupContainer = $container.find(".popup-container");
    var $popup = $popupContainer.find(".popup");
    var $iconDelete = $popupContainer.find(".popup-close-activator");
    var closeHandler = function() {
      $popupContainer.removeClass("active");
      setTimeout(function() {
        $body.removeClass("hidden");
        $popupContainer.css({ display: "none" });
        $iconDelete.off("click", closeHandler);
      }, 600);
    };
    $popupContainer.css({ display: "block" });
    setTimeout(function() {
      $popupContainer.addClass("active");
    }, 60);
    $body.addClass("hidden");
    $iconDelete.on("click", closeHandler);
  });

});