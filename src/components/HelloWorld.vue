<template>
  <div class="works_title">
      <span class="material-icons">
      work_outline
      </span>
        量身打造
        <span class="works_sub">客製化</span>
        <hr>
  </div>
  <ul class="d-flex justify-content-center w-100 flex-wrap cardUl">
      <li class=" cardLi" >
        <div class="card_img">
        <a href="#/products">
        <img src="https://i.imgur.com/RBK1Mkw.jpg" class="card-img" alt="...">
        </a>
          </div>
      </li>
      <li class="cardLi">
        <div class="card_img">
         <a href="#/products" >
          <img src="https://i.imgur.com/BEDMRq3.jpg" class="card-img" alt="...">
          </a>
        </div>
      </li>
</ul>
     <div class=" banner">
    </div>
     <div class="works_title">
      <span class="material-icons">
        touch_app
          </span>
          預約服務
        <span class="works_sub">時段</span>
        <hr>
      </div>
  <div class="w-100 reserve d-flex flex-wrap">
        <div class="card reserve_cardone">
         <div class="card card_Inner">
        <div class="card-body">
          <h5 class="card-title" style="color: #9CBAC6; font-size:32px; ">預約須知</h5>
          <p class="card-text" style="color: #9CBAC6;">1. 所有服務（除彩繪設計）皆須提早兩日預約，恕不接受當日預約。</p>
          <p class="card-text" style="color: #9CBAC6;">2. 彩繪設計款須提早兩週預約，並來信提供設計主題或素材。若無提供，將由美甲師自行發揮。</p>
          <p class="card-text" style="color: #9CBAC6;">3. 施作時間會因服務項目而變動，預約時請預留足夠時間。（可參考下方施作時間</p>
          <p class="card-text" style="color: #9CBAC6;">4. 工作室無托兒服務，請自行前往，攜伴則限女性一名。</p>
        </div>
      </div>
      </div>
      <div class="card reserve_cardtwo" >
          <div class="card card_Inner" >
            <div class="card-body">
            <h5 class="card-title" style="color: #9CBAC6; font-size:24px; ">姓名：</h5>
             <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
              </div>
              <h5 class="card-title" style="color: #9CBAC6; font-size:24px; ">手機：</h5
              >
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
              </div>
              <h5 class="card-title" style="color: #9CBAC6; font-size:24px; ">時間：</h5>
                <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
              </div>
              <button type="button" class="btn btn-lg banner_btn" >立即預約</button>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // props: {
  //   msg: String
  // }
  methods: {
    toProducts () {
      this.$router.push('/products')
    }
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');
.works_title {
  // padding-bottom: 80px;
  padding: 40px;
  padding-left:72px;
  color:#9CBAC6;
  font-weight: 900;
  font-size: 48px;
  font-family: 'Krona One', sans-serif;
  // text-align: center;
  position: relative;
  // letter-spacing: -4px;
}
.works_sub {
  position: absolute;
  font-size: 32px;
  color: #E0E0E0;
  top:60px;
  left:320px;
  // letter-spacing: -2px;
}
.cardUl {
  padding-right: 48px;
  padding-left: 48px;
  padding-bottom: 80px;
}
.cardLi  {
  width: 48%;
  // padding: 20px;
  box-shadow: 3px 3px 3px 3px #E0E0E0;
  margin:10px;
}
.card_img {
  position: relative;
}
.card_img img {
  border-radius:0;
  transition: 1s;
  object-fit: cover;
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
  background-attachment: fixed;
  background-image: url("https://i.imgur.com/agOEBLH.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  max-width: 100%;
  height: 500px;
  text-align: center;
  line-height: 700px;
  font-size: 80px;
  color: white;
}
.reserve {
  height:500px;
  background-color:white;
  padding-right: 48px;
  padding-left: 72px;
  padding-bottom:40px;
}
.reserve_cardone {
  background-color:#FFF1E2;
  border:0;
  padding:24px;
  width:48%;
  margin-right:30px;
  height:480px;
  margin: auto;
}
.reserve_cardtwo{
  background-color:#9CBAC6;
  border:0;
  padding:24px;
  width:48%;
  height:480px;
  margin: auto;
}
.card_Inner {
  background-color: white;
  width: 100%;
  height:430px;
  padding:24px;
  line-height:48px;
  margin: auto;
}
@media (max-width: 767px) {
  .reserve {
    height:500px;
    background-color:white;
    padding-right: 0px;
    padding-left: 0px;
    padding-bottom:40px;
    height:960px;
  }
  .reserve_cardone {
    width:100%;
    margin-right:0px;
  }
  .reserve_cardtwo{
    width:100%;
  }
  .card_Inner {
    background-color: white;
    width: 100%;
    height:430px;
    padding:24px;
    line-height:24px;
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
  color: #9CBAC6;
  font-weight: 900;
  font-size: 32px;
  font-family: 'Krona One', sans-serif;
  text-align: center;
  position: relative;
  // letter-spacing: -4px;
  }
  .works_sub {
  // position: absolute;
  // font-size: 24px;
  // color: #E0E0E0;
  // top:70px;
  // right:150px;
  // letter-spacing: -2px;
  display: none;
  }
  .banner {
    height: 240px;
  }
 }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
