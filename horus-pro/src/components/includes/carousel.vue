<template>
  <div>
    <b-carousel
      id="carousel1"
      style="text-shadow: 1px 1px 2px #333;"
      background="#fff"
      :interval="2000"
      img-width="117"
      img-height="117"
      v-model="slide"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <!-- <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>-->
      <!-- Slides with custom text -->
      <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>-->
      <!-- Slides with image only -->
      <b-carousel-slide
        style="height:117px !important; width:117px !important;"
        img-src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        style="height:117px !important; width:117px !important;"
        img-src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        style="height:117px !important; width:117px !important;"
        img-src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        style="height:117px !important; width:117px !important;"
        img-src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        style="height:117px !important; width:117px !important;"
        img-src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        style="height:117px !important; width:117px !important;"
        img-src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        style="height:117px !important; width:117px !important;"
        img-src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        style="height:117px !important; width:117px !important;"
        img-src="https://image.freepik.com/free-vector/retro-label-on-rustic-background_82147503374.jpg"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {
      slide: 0,
      sliding: false
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>