// When clicking the Visit site button on section 2, open the task site
$(".visit-site-btn").on("click", () => {
  window.location =
    "https://users.metropolia.fi/~veetiso/DM-22/jquery1/jqbasiclab1.html";
});

$("#query-4").on("click", () => {
  window.location =
    "https://users.metropolia.fi/~veetiso/DM-22/jquery4/ex4.html";
});

$("#query-5").on("click", () => {
  window.location =
    "https://users.metropolia.fi/~veetiso/DM-22/jquery5/animate.html";
});

$("#query-a").on("click", () => {
  window.location = "https://users.metropolia.fi/~veetiso/DM-22/AJAX/haku.html";
});

$("#taskModal").on("show.bs.modal", function (event) {
  let button = $(event.relatedTarget); // Button that triggered the modal
  let title = button.data("title");
  let link = button.data("videolink"); // Extract info from data-* attributes
  let description = button.data("desc");
  let modal = $(this);
  modal.find("#video-element").attr("src", link);
  modal.find(".modal-desc").text(description);
  modal.find(".modal-title").text(title);
});
