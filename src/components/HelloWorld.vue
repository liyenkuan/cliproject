<template>
  <div class="works_title">
      <span class="material-icons">
      work_outline
      </span>
        量身打造
        <hr>
  </div>
  <ul class="d-flex justify-content-center w-100 flex-wrap cardUl">
      <li class=" cardLi" data-aos="fade-down-right" >
        <div class="card_img">
        <a href="#/products">
        <img src="https://i.imgur.com/pUdpzqT.jpg" class="card-img" alt="...">
        </a>
          </div>
      </li>
      <li class="cardLi" data-aos="fade-down-left">
        <div class="card_img">
         <a href="#/products" >
          <img src="https://i.imgur.com/b9gBymp.jpg" class="card-img" alt="...">
          </a>
        </div>
      </li>
      <li class=" cardLi" data-aos="fade-up-right">
        <div class="card_img">
        <a href="#/products">
        <img src="https://i.imgur.com/1Phg1QZ.jpg" class="card-img" alt="...">
        </a>
          </div>
      </li>
      <li class="cardLi" data-aos="fade-up-left">
        <div class="card_img">
         <a href="#/products" >
          <img src="https://i.imgur.com/VqjcO3o.jpg" class="card-img" alt="...">
          </a>
        </div>
      </li>
</ul>
<div class=" banner">
     <div class="works_title" style="">
      <span class="material-icons">
        touch_app
          </span>
          熱門精選
        <hr>
      </div>
  <div class="w-100 reserve d-flex flex-wrap">
      <swiper :slidesPerView="1" :spaceBetween="20" :freeMode="true" data-aos="fade-up"
              :breakpoints='{
                "640": {
                  "slidesPerView": 1,
                  "spaceBetween": 20
                },
                "768": {
                  "slidesPerView": 2,
                  "spaceBetween": 40
                },
                "1024": {
                  "slidesPerView": 3,
                  "spaceBetween": 50
                }
              }'
              :pagination='{
                "clickable": true
              }'
              class="mySwiper">
          <swiper-slide><div class="swiper_content "><img src="https://i.imgur.com/7v2i8Ki.jpg" class="swiper_img " alt="..."></div></swiper-slide>
          <swiper-slide><div class="swiper_content"><img src="https://i.imgur.com/ExJmxt4.jpg" class="swiper_img" alt="..."></div></swiper-slide>
          <swiper-slide><div class="swiper_content"><img src="https://i.imgur.com/UF3Wl7z.jpg" class="swiper_img" alt="..."></div></swiper-slide>
          <swiper-slide><div class="swiper_content"><img src="https://i.imgur.com/zKxHZm3.jpg" class="swiper_img" alt="..."></div></swiper-slide>
          <swiper-slide><div class="swiper_content"><img src="https://i.imgur.com/GJTwAoO.jpg" class="swiper_img" alt="..."></div></swiper-slide>
          <swiper-slide><div class="swiper_content"><img src="https://i.imgur.com/nJM5uyT.jpg" class="swiper_img" alt="..."></div></swiper-slide>
          <swiper-slide><div class="swiper_content"><img src="https://i.imgur.com/1ur4Yx7.jpg" class="swiper_img" alt="..."></div></swiper-slide>
          <swiper-slide><div class="swiper_content"><img src="https://i.imgur.com/lrT9lab.jpg" class="swiper_img" alt="..."></div></swiper-slide>
          <swiper-slide><div class="swiper_content"><img src="https://i.imgur.com/ZN083W3.jpg" class="swiper_img" alt="..."></div></swiper-slide>
      </swiper>
  </div>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.min.css'
// import './style.css'
import 'swiper/swiper-bundle.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  name: 'HelloWorld',
  methods: {
    toProducts () {
      this.$router.push('/products')
    }
  },
  mounted () {
    AOS.init()
  }
}
</script>
<style lang="scss">
// @import 'swiper/swiper-bundle.css'
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');
.swiper_img {
  display: block;
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center ;
}
.swiper_content {
  width:400px;
  height:500px;
}
.works_title {
  // padding-bottom: 80px;
  padding: 40px;
  padding-left:72px;
  color:#47ABA7;
  font-weight: 900;
  font-size: 48px;
  font-family: 'Krona One', sans-serif;
  position: relative;
}
.cardUl {
  padding-right: 48px;
  padding-left: 48px;
  padding-bottom: 80px;
}
.cardLi  {
  width: 48%;
  margin:10px;
}
.card_img img {
  border-radius:0;
  transition: 1s;
  max-height: 300px;
  object-fit: cover;
  object-position: center ;
}
.card_img a {
  display: block;
  overflow: hidden;
}
.card_img img:hover {
  transform: scale(1.15);
}
.banner{
  max-width: 100%;
}
.reserve {
  padding-right: 48px;
  padding-left: 72px;
  padding-bottom:100px;
}
@media (max-width: 767px) {
  .reserve {
    height:200px;
    background-color:white;
    padding-right: 0px;
    padding-left: 0px;
    padding-top: 24px;
    padding-bottom:500px;
  }
}
@media (max-width: 767px) {
  .cardUl {
    padding: 0px;
  }
  .cardLi  {
    width: 100%;
  }
  .works_title {
  padding: 16px;
  color: #47ABA7;
  font-weight: 900;
  font-size: 32px;
  font-family: 'Krona One', sans-serif;
  text-align: center;
  position: relative;
  }
 }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
