<template>
<div id="carouselExampleDark" class="carousel carousel-dark slide " data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner bgcard">
    <div class="carousel-item active " data-bs-interval="10000">
      <img src="https://i.imgur.com/k5fjpNM.jpg" class="img-fluid img_class" alt="...">
        <div class="card_text">
        <p class="card_title" >優雅 指屬於你</p>
        <p class="card_sub" >享受最優質的設計體驗</p>
        <button type="button" class="btn btn-lg banner_btn" @click="golist()">立即選購</button>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://i.imgur.com/coRHO43.jpg" class="img-fluid img_class " alt="...">
        <div class="card_text">
         <p class="card_title" >優雅 指屬於你</p>
        <p class="card_sub" >享受最優質的設計體驗</p>
        <button type="button" class="btn btn-lg banner_btn" @click="golist()" >立即選購</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://i.imgur.com/XGm6ZMc.jpg" class="img-fluid img_class "  alt="...">
        <div class="card_text">
        <p class="card_title" >優雅 指屬於你</p>
        <p class="card_sub" >享受最優質的設計體驗</p>
        <button type="button" class="btn btn-lg banner_btn" @click="golist()">立即選購</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <!--UL-->
<HelloWorld></HelloWorld>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    golist () {
      this.$router.push('/products')
    }
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');
.bgcard {
  position: relative;
  height: 700px;
}
.card_text {
  position: absolute;
  top: 300px;
  right:320px;
  // color: #C26029;
  // font-size: 40px;
  // font-weight: 900;
  font-family: 'Krona One', sans-serif;
  color: white;
}
.card_title {
  font-size: 48px;
  font-weight: 900;
}
.card_sub {
  font-size: 24px;
}
.img_class {
  filter: contrast(100%);
}
.banner_btn {
  border: 2px solid #47ABA7;
  background-color: #47ABA7;
  color: white;
  font-weight:900;
  // border:0;
  font-size: 24px;
}
.banner_btn:hover {
  // border: 2px solid #47ABA7;
  background-color: white;
  color: #47ABA7;
}
@media (max-width: 767px) {
  .bgcard {
    position: relative;
    height: 300px;
    // padding-top:72px;
  }
  .card_text {
    display: none;
    // position: absolute;
    // top: 260px;
    // right:130px;
    // font-family: 'Krona One', sans-serif;
    // color: white;
  }
  .img_class {
    height: 300px;
  }
  .card_title {
    display: none;
  }
  .card_sub {
    display: none;
  }
}
</style>
