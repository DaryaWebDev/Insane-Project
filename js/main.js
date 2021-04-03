const swiper = new Swiper(".practice__swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".practice__button--next",
    prevEl: ".practice__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

const blogSwiper = new Swiper(".blog-posts__swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".blog-posts__button--next",
    prevEl: ".blog-posts__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});


jQuery(document).ready(function () {
  var btn = $("#button");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });


    // var menuButton = document.querySelector(".menu-button"); //ищем этот класс
    // menuButton.addEventListener("click", function () {
    //   document
    //     .querySelector(".header__wrapper")
    //     .classList.toggle("header__wrapper--visible");
    // });
  
  
   var menuButtonSecond = document.querySelector(".menu-button"); //ищем этот класс
    menuButtonSecond.addEventListener("click", function () {
     document
       .querySelector(".blog-burger__wrapper")
      .classList.toggle("blog-burger__wrapper--visible");
      body.classList.toggle("no-scroll");
    
   });

  $(document).ready(function () {
    $(".menu-list__title").click(function (event) {
      if ($(".menu-list").hasClass("one")) {
        $(".menu-list__title").not($(this)).removeClass("active");
        $(".menu-list__text").not($(this).next()).slideUp(300);
      }
      $(this).toggleClass("active").next().slideToggle(300);
    });
  });


  var modalButton = $("[data-toggle=modal]"); //переменная - кнопка, с нее выходит модальное окно
  var closeModalButton = $(".modal__close"); //привязка перем к "крестику"
  modalButton.on("click", openModal); //при клике на кнопку выполнение ф-и openModal
  closeModalButton.on("click", closeModal); //при клике на "крестик" выполнение ф-и closeModal

  function openModal() {
    //открыть окно - применить класс visible к нашему фону и форме
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    document.body.style.overflow = "hidden";
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    //закрыть окно - удалить класс visible
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    document.body.style.overflow = "auto";
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  

  $(document).on("keydown", function (e) {
    if (e.keyCode == 27) {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      document.body.style.overflow = "auto";
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
    false;
  });


  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    var div = $(".modal__dialog"); // тут указываем класс элемента
    if (
      !div.is(e.target) && // если клик был не по нашему блоку
      div.has(e.target).length === 0
    ) {
      // и не по его дочерним элементам
      document.body.style.overflow = "auto";
      var modalDialog = $(".modal__dialog");
      modalDialog.removeClass("modal__dialog--visible");
      var modalOverlay = $(".modal__overlay");
      modalOverlay.removeClass("modal__overlay--visible");
    }
  });
  

  
    $(".form").each(function () {
      $(this).validate({
        errorClass: "invalid",
        messages: {
          name: {
            required: "Укажите ваше имя",
            minlength: "Имя должно быть не меньше 2-х букв",
            maxlength: "Максимум - 25 букв",
          },
          email: {
            required: "Нам нужен ваш email для связи с вами",
            email: "Используйте этот формат: name@domain.com",
            minlength: "Минимальное значение 4 символа",
          },
          phone: {
            required: "Вам необходимо указать телефон",
            minlength: "Телефон - минимум 10 цифр",
          },
        },
      });
    });
  
  $(".searches").each(function () {
    $(this).validate({
      errorClass: "invalid-searcheses",
      messages: {
        search: {
          required: "Введите ваш запрос",
          minlength: "Запрос - минимум 2 буквы",
        },
      },
    });
  });

  $(".sub").each(function () {
    $(this).validate({
      errorClass: "invalid-subscribe",
      messages: {
        email: {
          required: "Введите адрес электронной почты",
          minlength: "Минимальное значение 4 символа",
          email:"Используйте этот формат: name@domain.com",
        },
      },
    });
  });

  $(document).ready(function () {
    $("input[type='tel']").mask("+7 (999) 999-99-99");
  });


  
});
