let root = new Vue({

  el: "#root",

  data: {
    logo: "./assets/img/logo-sidearea-1.png",
    navLink: [
      {
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

    jumboText: [
      {
        title: "Devotion that never ends",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, unde, enim cupiditate amet ipsum id"
      },
      {
        title: "Projects made with love",
        subTitle: "Cose scritte a caso che servono a non usare sempre lo stesso lorem ipsum che è molto utile ma anche basta"
      },
      {
        title: "Our new folio full of joy",
        subTitle: "lref edfuuuer ioeujf eoijoijojo fee fefefsef oij aojgvòawe aòeoifj e aòoie"
      }
    ],
    carouselImages:[
      "./assets/img/h-2-slider-img-11.png",
      "./assets/img/h-2-slider-img-15.png",
      "./assets/img/short-slider-rev-1-img-3.png",
    ],
    counter: 0
  },

  mounted() {

  },

  methods: {
    next(){
      this.counter++;
      if(this.counter > this.carouselImages.length-1){
        this.counter = 0;
      }
    },

    prev(){
      this.counter--;
      if(this.counter < 0){
        this.counter = this.carouselImages.length-1;
      }
    },
  },

  created(){
    setInterval(this.next, 5000);
  },

});









// fine
