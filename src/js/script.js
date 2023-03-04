const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  close = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
});

const counters = document.querySelectorAll(".skills__progress-item__procent"),
  plan = document.querySelectorAll(
    ".skills__progress-item__plan .skills__progress-item__fact"
  );

counters.forEach((item, i) => {
  plan[i].style.width = item.innerHTML;
});

$("form").submit(function (e) {
  e.preventDefault();

  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize(),
  }).done(function () {
    $(this).find("input").val("");
    $("form").trigger("reset");
  });
  return false;
});
