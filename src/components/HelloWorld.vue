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
        <!--<div class="reserve_cardone">
         <div class="card_Inner ">
        <div class=" row">
          <div class="row">
          <h5 class="card-title" style="color: #47ABA7; font-size:32px; ">預約須知</h5>
          </div>
          <hr class="py-1" style="color:#47ABA7; opacity: 1;">
          <div class="row">
          <div class=" col card-text" style="color: #47ABA7; font-size:24px;">1. 所有服務（除彩繪設計）皆須提早兩日預約，恕不接受當日預約。</div>
          </div>
          <div class="row">
          <p class="col  card-text" style="color: #47ABA7; font-size:24px;">2. 彩繪設計款須提早兩週預約，並來信提供設計主題或素材。若無提供，將由美甲師自行發揮。</p>
          </div>
          <div class="row">
          <p class=" col card-text" style="color: #47ABA7; font-size:24px;">3. 施作時間會因服務項目而變動，預約時請預留足夠時間。（可參考下方施作時間</p>
          </div>
          <div class="row">
          <p class="col card-text" style="color: #47ABA7; font-size:24px;">4. 工作室無托兒服務，請自行前往，攜伴則限女性一名。</p>
          </div>
          <div class="row">
          <div class="col align-self-end">
            <button type="button" class="btn btn-lg banner_btn" @click="toProducts()">立即預約</button>
          </div>
          </div>
        </div>
      </div>
      </div>-->
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
  // props: {
  //   msg: String
  // }
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
  // text-align: center;
  position: relative;
  // letter-spacing: -4px;
}
// .works_sub {
//   position: absolute;
//   font-size: 32px;
//   color: #E0E0E0;
//   top:60px;
//   left:320px;
//   // letter-spacing: -2px;
// }
.cardUl {
  padding-right: 48px;
  padding-left: 48px;
  padding-bottom: 80px;
}
.cardLi  {
  width: 48%;
  // padding: 20px;
  // box-shadow: 3px 3px 3px 3px #E0E0E0;
  margin:10px;
  // height:200px;
}
.card_img {
  // position: relative;
}
.card_img img {
  border-radius:0;
  transition: 1s;
  // object-fit: cover;
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
  /* display: flex; */
  // background-attachment: fixed;
  // background-image: url("https://i.imgur.com/agOEBLH.jpg");
  // background-repeat: no-repeat;
  // background-position: center;
  // background-size: cover;
  max-width: 100%;
  // height: 1500px;
  // background-color: black;
  // opacity: 0.8;
}
.reserve {
  // height:560px;
  // background-color:white;
  padding-right: 48px;
  // padding-top: 120px;
  padding-left: 72px;
  padding-bottom:100px;
}
.reserve_cardone {
  // background-color:#FFF1E2;
  opacity: 0.8;
  border:0;
  padding:24px;
  width:70%;
  margin-right:30px;
  // height:560px;
  margin: auto;
}
.reserve_cardtwo{
  background-color:#47ABA7;
  border:0;
  padding:24px;
  width:48%;
  // height:480px;
  margin: auto;
}
.card_Inner {
  background-color: white;
  width: 100%;
  // height:560px;
  padding:24px;
  line-height:48px;
  margin: 0 auto;
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
  .reserve_cardone {
    width:100%;
    margin-right:0px;
    // background-color:#FFF1E2;
    opacity: 0.8;
    border:0;
    padding:10px;
    // width:70%;
    // margin-right:30px;
    // height:560px;
    margin: auto;
  }
  .reserve_cardtwo{
    width:100%;
  }
  .card_Inner {
    background-color: white;
    width: 100%;
    // height:600px;
    padding:0px;
    line-height:48px;
    margin: auto;
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
  // letter-spacing: -4px;
  }
  .banner {
    // height: 240px;
    // background-attachment: fixed;
    // background-image: url("https://i.imgur.com/agOEBLH.jpg");
    // background-repeat: no-repeat;
    // background-position: center;
    // background-size: cover;
    // max-width: 100%;
  }
 }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
