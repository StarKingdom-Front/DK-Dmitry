var swiper = new Swiper(".mySwiper1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper2", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var menueOptions = {
  desktopStickyOffset: 10,
  desktopHasSecondaryToggleButton: true,
  desktopHasTertiaryToggleButton: true,
  mobileHasSecondaryToggleButton: true,
  mobileHasTertiaryToggleButton: true,
  onDesktopStickyChange: function (instance) {
    console.log('Sticky Change Callback');
  },
  onMobileToggleClick: function (toggle, instance) {
    console.log('Mobile Toggle Click');
  },
  onDesktopPrimaryToggleClick: function (toggle, instance) {
    console.log('Desktop Primary Toggle Click');
  },
  onDesktopSecondaryToggleClick: function (toggle, instance) {
    console.log('Desktop Secondary Toggle Click');
  },
  onMobilePrimaryToggleClick: function (toggle, instance) {
    console.log('Mobile Primary Toggle Click');
  },
  onMobileSecondaryToggleClick: function (toggle, instance) {
    console.log('Mobile Secondary Toggle Click');
  },
  onMobilePrimaryAnchorClick: function (anchor, instance) {
    console.log('Mobile Primary Anchor Click');
  },
  onMobileSecondaryAnchorClick: function (anchor, instance) {
    console.log('Mobile Secondary Anchor Click');
  }
};
var menue = new Menue(menueOptions);

console.log(menue);


$('.faq-sect__item-title').on('click', f_acc);

    function f_acc() {
        // $('.faq-sect__item-text').not($(this).next()).stop().slideUp(300);
        // $('.faq-sect__item-title').not($(this)).removeClass('active');
        $(this).toggleClass('active');
        $(this).next().slideToggle(300);
    }


    




  


