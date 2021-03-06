let root = new Vue({

  el: "#root",

  data: {
    logo: "./assets/img/logo-sidearea-1.png",
    navLink: [{
        name: "home",
        url: "www.google.com",
        subMenu: [{}],
      },
      {
        name: "pages",
        url: "www.google.com",
        subMenu: [{}],
      },
      {
        name: "portfolio",
        url: "www.google.com",
        subMenu: [{}],
      },
      {
        name: "blog",
        url: "www.google.com",
        subMenu: [{}],
      },
      {
        name: "shop",
        url: "www.google.com",
        subMenu: [{}],
      },
      {
        name: "elements",
        url: "www.google.com",
        subMenu: [{}],
      }
    ],

    jumboText: [{
        title: "Devotion that never ",
        lastWord: "ends",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, unde, enim cupiditate amet ipsum id"
      },
      {
        title: "Projects made with ",
        lastWord: "love",
        subTitle: "Cose scritte a caso che servono a non usare sempre lo stesso lorem ipsum che è molto utile ma anche basta"
      },
      {
        title: "Our new folio full of ",
        lastWord: "joy",
        subTitle: "lref edfuuuer ioeujf eoijoijojo fee fefefsef oij aojgvòawe aòeoifj e aòoie"
      }
    ],

    sliderImg: [
      "./assets/img/h-2-slider-img-11.png",
      "./assets/img/h-2-slider-img-15.png",
      "./assets/img/short-slider-rev-1-img-3.png",
    ],

    counter: 0,

    macroCardImg: [{
        url: "./assets/img/h-2-port-img-1.jpg",
        text: "All this illustration",
        subText: "letters",
      },
      {
        url: "./assets/img/h-2-port-img-2.jpg",
        text: "Type and illustration",
        subText: "Bicycle",
      },
      {
        url: "./assets/img/h-2-port-img-3.jpg",
        text: "Draw and illustrate",
        subText: "Brochures",
      },
      {
        url: "./assets/img/h-2-port-img-4.jpg",
        text: "Illustration of novels",
        subText: "Books",
      },
      {
        url: "./assets/img/h-2-port-img-5.jpg",
        text: "Too many illustration",
        subText: "Smart app",
      },
      {
        url: "./assets/img/h-2-port-img-6.jpg",
        text: "Dreams and illustration",
        subText: "Dreaming",
      }
    ],

    workFlowImg: [{
        icon: "far fa-lightbulb",
        color: "#BADAC9",
        text: "First theres an idea",
        subText: "Lorem ipsum dolor sit amet, consectetur repellat ipsam inventore.",
      },
      {
        icon: "fas fa-cloud",
        color: "#F8D12E",
        text: "Then we talk about",
        subText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati impedit repellat ipsam inventore.",
      },
      {
        icon: "far fa-comment",
        color: "#80465F",
        text: "And we think about",
        subText: "Lorem amet, consectetur adipisicing elit. Obcaecati impedit repellat ipsam inventore.",
      },
      {
        icon: "fas fa-pen-fancy",
        color: "#EB6950",
        text: "So we draw along",
        subText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati.",
      }
    ],

    newsImg: [{
        url: "./assets/img/h-2-blog-img-1.jpg",
        text: "This way, loves: a detailed guide through new design",
        author: "Emily Fields",
      },
      {
        url: "./assets/img/h-2-blog-img-2.jpg",
        text: "I try to give people a different way of looking art",
        author: "Massimo Voltaggio",
      },
      {
        url: "./assets/img/h-2-blog-img-3.jpg",
        text: "Introduce Richard Laperrière of those amazing features",
        author: "Carmelo Pinnolo",
      },
    ],

    footerData: [{
      logo: "./assets/img/logo-sidearea-1.png",
      motto: "Let’s Get Creative",
      mail: "maree.qode@gmail.com",
      number: "+44645 321 789",
      adress: "Avenue d’Auderghem 101040 Brussels, Belgium",
      socials: [
        "fab fa-twitter",
        "fab fa-pinterest-p",
        "fab fa-facebook-f",
        "fab fa-linkedin-in",
      ],
    }, ],
  },

  mounted() {

  },

  methods: {
    next() {
      this.counter++;
      if (this.counter > this.sliderImg.length - 1) {
        this.counter = 0;
      }
    },

    prev() {
      this.counter--;
      if (this.counter < 0) {
        this.counter = this.sliderImg.length - 1;
      }

    },

    choose(index) {
      this.counter = index;
    },

    topScroll() {
      window.scrollTo(0, 0);
    },

  },

  created() {
    setInterval(this.next, 8000);
  },

});









// fine
