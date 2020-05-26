const vm = new Vue({
  el: "#app",
  data: {
    imageSrc: "./img/kurin.png",
    bom1: false,
    bom2: false,
    bom3: false,
    bom4: false,
    bom5: false,
    bom6: false,
    bom7: false,
    bom8: false,
    bom9: false,
    bom10: false,
    bom11: false,
  },
  methods: {
    collapse: function () {
      this.imageSrc = "./img/kurin-shy.png";
      setTimeout(
        function () {
          this.bom1 = true;
        }.bind(this),
        6700
      );
      setTimeout(
        function () {
          this.bom2 = true;
        }.bind(this),
        4800
      );
      this.bom3 = true;
      setTimeout(
        function () {
          this.bom4 = true;
        }.bind(this),
        2000
      );
      setTimeout(
        function () {
          this.bom5 = true;
        }.bind(this),
        2300
      );
      setTimeout(
        function () {
          this.bom6 = true;
        }.bind(this),
        3300
      );
      setTimeout(
        function () {
          this.bom7 = true;
        }.bind(this),
        3500
      );
      setTimeout(
        function () {
          this.bom8 = true;
        }.bind(this),
        3700
      );
      setTimeout(
        function () {
          this.bom9 = true;
        }.bind(this),
        3900
      );
      setTimeout(
        function () {
          this.bom10 = true;
        }.bind(this),
        1000
      );
      setTimeout(
        function () {
          window.location.href = 'https://www.dlsite.com/maniax/';
        }.bind(this),
        9000
      );
    },
  },
});
