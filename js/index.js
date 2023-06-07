$(document).ready(function () {
  $(".meu-link").on("click", function (e) {
    e.preventDefault();

    let id = $(this).attr("data-id");

    if (id) {
      // $(`#${id}`).get(0).scrollIntoView({ behavior: "smooth" });

      $("html, body").animate(
        {
          scrollTop: $(`#${id}`).offset().top - 230,
        },
        100
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        100
      );
    }
  });

  function writer(element) {
    const textArray = element.innerHTML.split("");
    element.innerHTML = "";
    textArray.forEach((letra, i) => {
      setTimeout(function () {
        element.innerHTML += letra;
        if (textArray.length - 1 == i) {
          setTimeout(() => {
            writer(element);
          }, 5000);
        }
      }, 90 * i);
    });
  }

  let elemento = document.querySelector(".titulo-content");

  writer(elemento);
});

$(window).on("scroll", function () {
  let position = $(this).scrollTop();
  if (position >= 300) {
    $("#menu-sub").addClass("fixed-top");
    $("#menu-sub").css("margin-top", "73px");
    $("#menu-sub").css("padding-bottom", "173px");
  } else {
    $("#menu-sub").removeClass("fixed-top");
    $("#menu-sub").css("margin-top", "0px");
    $("#menu-sub").css("margin-bottom", "0px");
  }
});
