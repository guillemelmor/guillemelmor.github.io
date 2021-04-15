!(function($) {
  "use strict";

  // Hero typed
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(document).on('click', '.mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  });

  $(document).click(function(e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  $(window).on('load', function() {
    $(".filters li:first").trigger('click')
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: false,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: false,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);

var arrLang = {
  "en": {
    "TITLE": "Guillermo Melendez's Portfolio",
    "HOME": "Home",
    "ABOUT": "About",
    "RESUME": "Resume",
    "CONTACT": "Contact me",
    "LANGUAGE": "Choose between english and spanish",
    "PROFILE": "Programmer and Technical Artist",
    "ABOUT-ME-1": "I'm a hard-working and motivated person whose main hobbies are learning and helping others. That's why I began in the world of the videogames as a computer engineer, to help the people who need it. From those who want to flee momentarily from reality or who, on the contrary, are not able to distinguish reality such as autism and they want to be able to meet with his enviroment, even those who have neurodegenerative disease and want to carry out rehabilitation enjoying and in company",
    "ABOUT-ME-2": "Thanks to the knowledge acquired during my studies at the university. I was able to begin learning in videogame frameworks such as Unity or Unreal Engine, and with them, programas such as Blender and Substance Painter, reinforcing skills such as self-taught leraning, teamwork and management of time and tasks.",
    "PERSONAL-INFO": "Personal Info",
    "BIRTHDAY-1": "Birthday: ",
    "BIRTHDAY-2": "25 February 1996",
    "PHONE": "Phone: ",
    "CITY-1": "City: ",
    "CITY-2": "Madrid, Spain",
    "EMAIL": "E-mail: ",
    "AGE": "Age: ",
    "CARNET": "Driving License: ",
    "JOB-1": "Current Role: ",
    "JOB-2": "Open to Work",
    "SOFT-SKILL-1": "   Creative",
    "SOFT-SKILL-2": "   Good leadership",
    "SOFT-SKILL-3": "   Good problem-solving skills",
    "SOFT-SKILL-4": "   Cooperative",
    "SOFT-SKILL-5": "   Continous learning",
    "SOFT-SKILL-6": "   Good Management of time and tasks",
    "HARD-SKILL-T1": "Programming Skills",
    "HARD-SKILL-T2": "Design Tools",
    "HARD-SKILL-T3": "Management Tools",
    "HARD-SKILL-T4": "Languages",
    "HARD-SKILL-T5": "Programming Tools",
    "HARD-SKILL-EN": "English",
    "HARD-SKILL-EN-TITLE": "B2 - TOEIC",
    "HARD-SKILL-ES": "Spanish",
    "HARD-SKILL-ES-TITLE": "Native",
    "HARD-SKILL-FR": "French",
    "HARD-SKILL-FR-TITLE": "Begginer",
    "RESUME-T1": "Education",
    "RESUME-1-TITLE": "Secondary Education - Technological Sciences",
    "RESUME-1-SITE": "Gredos San Diego School  El Escorial",
    "RESUME-1-SITE-2": "Madrid, Spain",
    "RESUME-1-DATE": "September 2012 - May 2019",
    "RESUME-2-TITLE": "Design and Development of Videogames",
    "RESUME-2-SITE": "Rey Juan Carlos I University",
    "RESUME-2-SITE-2": "Madrid, Spain",
    "RESUME-2-DATE": "September 2014 - September 2019",
    "RESUME-3-TITLE": "Computer Engineering",
    "RESUME-3-SITE": "Rey Juan Carlos I University",
    "RESUME-3-SITE-2": "Madrid, Spain",
    "RESUME-3-DATE": "September 2014 - September 2019",
    "RESUME-4-TITLE": "Production of 3D Animation with Autodesk Maya",
    "RESUME-4-SITE": "Proffesional School of New Techonologies CICE",
    "RESUME-4-SITE-2": "Madrid, Spain",
    "RESUME-4-DATE": "October 2019 - September 2020",
    "RESUME-5-TITLE": "Houdini FX Diploma",
    "RESUME-5-SITE": "CG Spectrum College of Digital Art & Animation",
    "RESUME-5-SITE-2": "Melbourne, Australia",
    "RESUME-5-DATE": "July 2020 - May 2021",
    "RESUME-T2": "Work Experience",
    "JOB-1-TITLE": "Researcher",
    "JOB-1-SITE": "NeuVox Laboratory in Center of Biomedical Technology, Polytechnical University Madrid",
    "JOB-1-DATE": "October 2018 - December 2019",
    "JOB-1-DESC-1": "Modelling 3D of enviroments oriented to Virtual Reality",
    "JOB-1-DESC-2": "Arduino-oriented structure modeling for 3D printing",
    "JOB-1-DESC-3": "Design and development of a set of Android applications that facilitate the rehabilitation of patients with Parkinson's disease in collaboration with the Massachusetts Institute of Technology (MIT) and with the financing of the Higher Council for Scientific Research (CSIC) foundation project  Teca-Park/MonParLoc FGCSIC CENIE-0348_CIE_6_E (InterReg Programme)",
    "JOB-1-DESC-4": "Research and documentation of rehabilitation in neurodegenrative diseases",
    "JOB-2-TITLE": "Researcher",
    "JOB-2-SITE": "Rey Juan Carlos I University",
    "JOB-2-DATE": "January 2020 - June 2020",
    "JOB-2-DESC-1": "Mobile application development with Android Studio and Unity for patientes with Alzheimer disease",
    "JOB-2-DESC-2": "Videogame development in Unity for Virtual Reality and Mixed Reality",
    "JOB-3-TITLE": "Treasurer",
    "JOB-3-SITE": "Virtual Soul Association",
    "JOB-3-DATE": "October 2015 - November 2017",
    "JOB-3-DESC-1": "Management of association funds",
    "JOB-3-DESC-2": "Director and organizer of the annual videogame congress GameGen",
    "JOB-4-TITLE": "Secretary",
    "JOB-4-SITE": "Videogame's Students Association",
    "JOB-4-DATE": "October 2016 - October 2019",
    "JOB-4-DESC-1": "Organizer of workshops with professionals of the videogame sector",
    "JOB-4-DESC-2": "Organizer of gamejams and gamedev-meetups",
    "PORTFOLIO-FILTER-1": "Games",
    "PORTFOLIO-FILTER-2": "3D",
    "PORTFOLIO-FILTER-3": "VFX",
    "PORTFOLIO-FILTER-4": "SHADER",  
    "PORTFOLIO-FILTER-5": "SCREEN-SHADER",  
    "PORTFOLIO-FILTER-6": "NON-PBR-SHADER",  
    "CONTACT-ME": "Feel free to send me an email. I'll try to respond as quick as i can! I'm also in the social media, if you need me there :)",
    "CONTACT-ME-BTN": "SEND EMAIL",
    "CV": "Download CV",
    "DEVELOPED": "Developed with:",
    "PLATFORM": "Platform: ",
    "ROLE": "Role:",
    "TEAM": "Developed by:",
    "DOWNLOAD": "Download",
    "PROJECT-INFO": "Project information",
    "PROJECT-DATE": "Project date:",
    "PROJECT-DESC": "Description: ",
    "DUCKBATH-DATE": "December 2017",
    "DUCKBATH-TEAM": "2 person team",
    "DUCKBATH-ROLE": "Programmer",    
    "DUCKBATH-DESCRIPTION": "Videogame developed with Android Studio and Adobe Photoshop, where the user must play as a rubber duck which has to avoid the soap bubbles that comes from the sides of the screen the maximum time possible. The game has 3 possible difficulties, which increase or decrease the number of bubbles per time. All the data is stored in a SQLite database in the smartphone",
    "ROBANK-DATE": "December 2014",
    "ROBANK-TEAM": "6 person team",
    "ROBANK-ROLE": "Programmer",
    "ROBANK-DESCRIPTION": "Videogame developed with RPG Maker and Adobe Photoshop. Based on the serie 'The Booth at the End', the user plays as Richard, one of the characters, that must rob a bank, fighting versus cops with guns and knifes.",
    "FIRE-DATE": "March 2019",
    "FIRE-TITLE": "Toon Fire",
    "FIRE-DESCRIPTION-1": "This effect was designed for games that has a low poly and cartoon style and needs not too heavy animations. It has been developed with Unity Particles shaping it in form of cone and applying a simple texture to the particles to look as cartoon. This effect is compatible with all the platforms including VR and his color and duration can be customized.",
    "WATER-DATE": "December 2020",
    "WATER-TITLE": "Water Gun",
    "WATER-DESCRIPTION-1": "Designed during the 7DFPS Gamejam, his objective is to simulate the water shooted from the gun. It was developed with Shadergraph and Standard Surface Shader in Unity, and with the help of Adobe Photoshop to draw the water texture. The speed, color and transaprency are customizables in the Unity's inspector.",
  },
  "es": {
    "TITLE": "Portfolio de Guillermo Melendez",
    "HOME": "Inicio",
    "ABOUT": "Sobre mi",
    "RESUME": "Formación y Experiencia",
    "CONTACT": "Contáctame",
    "LANGUAGE": "Elige entre inglés y español",
    "PROFILE": "Programador y Technical Artist",
    "ABOUT-ME-1": "Soy una persona ordenada, trabajadora y motivada cuyas principales aficiones son aprender y ayudar a los demás. Además, soy amante de la cultura japonesa, coreana y china, así como de los videojuegos de aventuras gráficas, RPG, plataformas y de estrategia.",
    "ABOUT-ME-2": "Gracias a los conocimientos adquiridos durante mis estudios en la universidad, pude comenzar el aprendizaje en frameworks de videojuegos como Unity y Unreal, y con ellos, programas como Blender y Substance Painter, reforzando habilidades como el aprendizaje autodidacta y la gestión de tiempo y tareas.",
    "ABOUT-ME-3": "Durante mi periodo en la universidad, fundé una asociación de videojuegos, y con ella el congreso de videojuegos anual 'GameGen' ejerciendo como director y organizador, adquiriendo habilidades de liderazgo y resolución de problemas.",
    "ABOUT-ME-4": "En los últimos años he podido colaborar en un equipo de investigación desarrollando aplicaciones y videojuegos para smartphones, realidad virtual y realidad mixta para la rehabilitación de pacientes con enfermedades neurodegenerativas. Con ello he podido desarrollar las habilidades de cooperación y trabajo en equipo, así como, mejorar mi capacidad de aprendizaje al investigar y desarrollar con tecnologías recientes como el NFC.",
    "PERSONAL-INFO": "Información Personal",
    "BIRTHDAY-1": "Fecha de Nacimiento: ",
    "BIRTHDAY-2": "25 Febrero 1996",
    "PHONE": "Teléfono: ",
    "CITY-1": "Ciudad: ",
    "CITY-2": "Madrid, España",
    "EMAIL": "Correo Electrónico: ",
    "AGE": "Edad: ",
    "CARNET": "Carnet de Conducir: ",
    "JOB-1": "Puesto Actual: ",
    "JOB-2": "Abierto a ofertas de empleo",
    "SOFT-SKILL-1": "   Creativo",
    "SOFT-SKILL-2": "   Buen liderazgo",
    "SOFT-SKILL-3": "   Buena resolución de problemas",
    "SOFT-SKILL-4": "   Cooperativo",
    "SOFT-SKILL-5": "   Aprendizaje continuo",
    "SOFT-SKILL-6": "   Buena gestión de tiempo y tareas",
    "HARD-SKILL-T1": "Programación",
    "HARD-SKILL-T2": "Herramientas de Diseño",
    "HARD-SKILL-T3": "Herramientas de Gestión",
    "HARD-SKILL-T4": "Idioma",
    "HARD-SKILL-T5": "Herramientas de Programación",
    "HARD-SKILL-EN": "Inglés",
    "HARD-SKILL-EN-TITLE": "B2 - TOEIC",
    "HARD-SKILL-ES": "Español",
    "HARD-SKILL-ES-TITLE": "Nativo",
    "HARD-SKILL-FR": "Francés",
    "HARD-SKILL-FR-TITLE": "Básico",
    "RESUME-T1": "Educación",
    "RESUME-1-TITLE": "Bachillerato - Ciecias Tecnológicas",
    "RESUME-1-SITE": "Colegio Gredos San Diego El Escorial",
    "RESUME-1-SITE-2": "Madrid, España",
    "RESUME-1-DATE": "Septiembre 2012 - Mayo 2019",
    "RESUME-2-TITLE": "Diseño y Desarrollo de Videojuegos",
    "RESUME-2-SITE": "Universidad Rey Juan Carlos I",
    "RESUME-2-SITE-2": "Madrid, España",
    "RESUME-2-DATE": "Septiembre 2014 - Septiembre 2019",
    "RESUME-3-TITLE": "Ingeniería de Computadores",
    "RESUME-3-SITE": "Universidad Rey Juan Carlos I",
    "RESUME-3-SITE-2": "Madrid, España",
    "RESUME-3-DATE": "Septiembre 2014 - Septiembre 2019",
    "RESUME-4-TITLE": "Máster en Producción de Animación 3D con Maya (Oficial de Autodesk)",
    "RESUME-4-SITE": "Escuela Profesional de Nuevas Tecnologías CICE",
    "RESUME-4-SITE-2": "Madrid, España",
    "RESUME-4-DATE": "Octubre 2019 - Septiembre 2020",
    "RESUME-5-TITLE": "Houdini FX Diploma",
    "RESUME-5-SITE": "CG Spectrum College of Digital Art & Animation",
    "RESUME-5-SITE-2": "Melbourne, Australia",
    "RESUME-5-DATE": "Julio 2020 - Mayo 2021",
    "RESUME-T2": "Experiencia Profesional",
    "JOB-1-TITLE": "Investigador",
    "JOB-1-SITE": "Laboratorio NeuVox en el Centro de Tecnología Biomédica, Universidad Politécnica de Madrid",
    "JOB-1-DATE": "Octubre 2018 - Diciembre 2019",
    "JOB-1-DESC-1": "Modelado de entornos 3D orienttados a Realidad Virtual con Blender y Unity",
    "JOB-1-DESC-2": "Modelado de estructuras para su impresión 3D orientados a Arduino",
    "JOB-1-DESC-3": "Diseño y desarrollo de un conjunto de aplicaciones Android que facilitan la rehabilitación de pacientes con Enfermedad de Párkinson en colaboración con el Massachusetts Institute of Technology (MIT) y con la financiación del proyecto de la fundación Consejo Superior de Investigaciones Científicas (CSIC) Teca-Park/MonParLoc FGCSIC CENIE-0348_CIE_6_E (InterReg Programme)",
    "JOB-1-DESC-4": "Investigación y documentación de la rehabilitación en enfermedades neurodegenrativas",
    "JOB-2-TITLE": "Investigador",
    "JOB-2-SITE": "Universidad Rey Juan Carlos I",
    "JOB-2-DATE": "Enero 2020 - Junio 2020",
    "JOB-2-DESC-1": "Desarrollo de aplicaciones móviles mediante Android Studio y Unity orientado a pacientes con Enfermedad de Alzheimer",
    "JOB-2-DESC-2": "Implementación de videojuegos en Unity para Realidad Virtual y Realidad Mixta",
    "JOB-3-TITLE": "Tesorero",
    "JOB-3-SITE": "Asociación Virtual Soul",
    "JOB-3-DATE": "Octubre 2015 - Noviembre 2017",
    "JOB-3-DESC-1": "Gestión de fondos de la asociación",
    "JOB-3-DESC-2": "Director y organizador de congreso de videojuegos anual GameGen",
    "JOB-4-TITLE": "Secretario",
    "JOB-4-SITE": "Asociación de Estudiantes de Videojuegos",
    "JOB-4-DATE": "Octubre 2016 - Octubre 2019",
    "JOB-4-DESC-1": "Organizador de talleres con profesionales del sector del videojuego",
    "JOB-4-DESC-2": "Organizador de gamejams y gamedev-meetups",
    "PORTFOLIO-FILTER-1": "Juegos",
    "PORTFOLIO-FILTER-2": "3D",
    "PORTFOLIO-FILTER-3": "VFX",
    "PORTFOLIO-FILTER-4": "SHADER",  
    "PORTFOLIO-FILTER-5": "SCREEN-SHADER",  
    "PORTFOLIO-FILTER-6": "NON-PBR-SHADER",  
    "CONTACT-ME": "No dudes en mandarme un mail, intentaré responder lo más pronto que pueda. También estoy disponible en las redes sociales, si me necesitas ahí :)",
    "CONTACT-ME-BTN": "MANDAR EMAIL",
    "CV": "Descargar CV",
    "DEVELOPED": "Desarrolado con:",
    "ROLE": "Rol:",
    "TEAM": "Desarrollado por:",
    "DOWNLOAD": "Descargar",
    "PROJECT-INFO": "Información del proyecto",
    "PROJECT-DATE": "Fecha del proyecto:",
    "PROJECT-DESC": "Descripción: ",
    "DUCKBATH-DATE": "Diciembre 2017",
    "DUCKBATH-TEAM": "Equipo de 2 personas",
    "DUCKBATH-ROLE": "Programador",
    "DUCKBATH-DESCRIPTION": "Videojuego desarrollado completamente con Android Studio y Adobe Photoshop, donde el usuario debe jugar como un patito de goma, el cual debe esquivar las pompas de jabón que van apareciendo por los bordes de la pantalla, el máximo tiempo posible. El juego tiene 3 dificultades posibles, que aumentan o disminuyen el número de pompas por segundo. Todos los datos son almacenados en una base de datos SQLite en el propio smartphone.",
    "ROBANK-DATE": "Diciembre 2014",
    "ROBANK-TEAM": "Equipo de 6 personas",
    "ROBANK-ROLE": "Programador",
    "ROBANK-DESCRIPTION": "Videojuego desarrollado con RPG Maker y Adobe Photoshop. Basado en la serie 'The Booth at the End', el usuario juega como Richard, uno de los personajes de la serie, el cual debe de robar un banco y enfrentarse a policías armados con pistolas y cuchillos.",
    "FIRE-DATE": "Marzo 2019",
    "FIRE-TITLE": "Fuego Cartoon",
    "FIRE-DESCRIPTION-1": "Este efecto fue diseñado para videojuegos con un estilo cartoon y low poly, y que no necesiten animaciones muy pesadas. Ha sido desarrollado mediante las partículas de Unity, definiendo una forma de cono a su comportamiento y aplicándolas una textura para darles apariencia cartoon. Este efecto es compatible con todas las plataformas incluyendo Realidad Virtual, y tanto su color como su duración puede ser personalizada.", 
    "WATER-DATE": "Marzo 2019",
    "WATER-TITLE": "Pistola de agua",
    "WATER-DESCRIPTION-1": "Diseñado durante la gamejam '7DFPS' tiene la función de simular el efecto de agua disparada. Fue desarrollada mediante Shadergraph y Standard Surface Shader en Unity, y con la ayuda de Adobe Photoshop para deseñar la textura de agua. Tanto su velocidad, como transparencia y color pueden ser personalizadas a través del inspector de Unity.",
  }
};

$(document).ready(function() {
  // The default language is English
  $(".language-switch").prop('checked', false);
  var lang = localStorage.getItem("language");
  var y = document.getElementById("about-en");
  var x = document.getElementById("about-es");
  if(lang == null){
    lang = "en";
    $(".language-switch").prop('checked', false);
    x.style.display = "none";
    y.style.display = "block";
    y.style.textAlign = "justify";
    localStorage.setItem("language", "en");
  }else if(lang == "en"){
    $(".language-switch").prop('checked', false);
    x.style.display = "none";
    y.style.display = "block";
    y.style.textAlign = "justify";
  }else{
    $(".language-switch").prop('checked', true);
    x.style.display = "block";
    x.style.textAlign = "justify";
    y.style.display = "none";
  }
  $(".lang").each(function(index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});

// get/set the selected language
$(".language-switch").click(function() {
  //var lang = $(this).attr("id");
  var lang;
  $(this).prop("checked") ? lang = "es" : lang = "en";
  localStorage.setItem("language", lang);
  $(".lang").each(function(index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
  var y = document.getElementById("about-en");
  var x = document.getElementById("about-es");
  if(lang == "en"){
    x.style.display = "none";
    y.style.display = "block";
    y.style.textAlign = "justify";
  }else{
    x.style.display = "block";
    x.style.textAlign = "justify";
    y.style.display = "none";
  }
});

$(".button").click(function(){
  var lang = localStorage.getItem("language");

  if(lang == "es"){
    //$('.cv-btn').attr('src', "assets/docs/guillermo_melendez_technical_artist_CV.pdf");
    //window.open ("assets/docs/guillermo_melendez_technical_artist_CV.pdf", "_blank");
    var link = document.createElement("a");
    link.download = 'guillermo_melendez_technical_artist_CV.pdf';
    link.href = "assets/docs/guillermo_melendez_technical_artist_CV.pdf";
    link.dispatchEvent(new MouseEvent('click'));
  }else{
    //$('.cv-btn').attr('src', "assets/docs/guillermo_melendez_technical_artist_CV.pdf");
    //window.open ("assets/docs/guillermo_melendez_technical_artist_CV.pdf", "_blank");
    var link = document.createElement("a");
  link.download = 'guillermo_melendez_technical_artist_CV.pdf';
    link.href = "assets/docs/guillermo_melendez_technical_artist_CV.pdf";
    link.dispatchEvent(new MouseEvent('click'));
  }
});