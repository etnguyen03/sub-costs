$(document).on("pageinit", function () {
  $.get("https://etnguyen03.github.io/sub-costs/data/subscriptions.json", function (data) {
    $(data).each(function (i, element) {
      // Add fieldsets for each category of subscription
      $(".subscriptionsCheckBoxes").append(`<fieldset data-role='collapsible' id='collapsible`+i+`'>
        <legend>`+element["name"]+`</legend>
      </fieldset>`);

      // Add fieldsets for each subscription
      $(element["subscriptions"]).each(function (j, element2) {
        $("#collapsible" + i).append(`<fieldset data-role='collapsible' id='collapsiblesub`+i+"-"+j+`'>
          <legend>`+element2["name"]+`</legend>
        </fieldset>`);

        // Add checkboxes for each price category
        $("#collapsiblesub" +i+"-"+j).append(`<div data-role='controlgroup' id='collapsiblesubcbgp`+i+"-"+j+`'</div>`);
        $(element2["price"]).each(function (k, element3) {
          $("#collapsiblesubcbgp"+i+"-"+j).append("<input type='checkbox' id='collapsiblesubcb"+i+'-'+j+'-'+k+"'><label for='collapsiblesubcb"+i+'-'+j+'-'+k+"'>"+element3["name"]+" @ $"+element3["price"]+"</label>")
        });
      });
    });

    // Content needs to be restyled
    $(".subscriptionsCheckBoxes").enhanceWithin();
  });
});
