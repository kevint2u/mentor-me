$(document).ready(function() {
  $("a.logo-nav-link").click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000, 'easeInOutExpo', function() {});
    return false;
  });

  $("a.contact-nav-link").click(function() {
    $('html, body').animate({
      scrollTop: $("div.footer").offset().top - 100
    }, 1000, 'easeInOutExpo', function() {});
    return false;
  });

  $("a.mentors-nav-link").click(function() {
    $('html, body').animate({
      scrollTop: $("div.mentors-slide").offset().top - 100
    }, 1000, 'easeInOutExpo', function() {});
    return false;
  });

  $("a.students-nav-link").click(function() {
    $('html, body').animate({
      scrollTop: $("div.students-slide").offset().top - 100
    }, 1000, 'easeInOutExpo', function() {});
    return false;
  });

  $("a.about-nav-link").click(function() {
    $('html, body').animate({
      scrollTop: $("div.about-slide").offset().top - 100
    }, 1000, 'easeInOutExpo', function() {});
    return false;
  });
});