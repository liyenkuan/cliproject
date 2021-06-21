<template>
<div class="w-100">
  <nav class="navbar navbar-expand-lg navbar-light fixed-top navContainer ">
    <div class="container-fluid">
        <div class="col nav_one">
          <a class="navbar-brand" href="#" style="color:#9CBAC6;">NaNail</a>
        </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse nav_ul" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item " >
                <router-link to="/" class="nav-link " style="color:#9CBAC6;" @click="addBtncss()">
                                <span class="material-icons">home
                </span>Home</router-link>
                </li>
                <li class="nav-item">
                <router-link to="/products" class="nav-link" @click="addBtncss()" >商品列表</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/backside" class="nav-link" @click="addBtncss()" >後台登入</router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" @click="addBtncss()">立即預約</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  </div>
  <router-view/>
   <footer class="footer   py-1 footer_calss">
    <div class="container">
      <ul class="row d-flex flex-wrap" style="align-items: center;">
        <li class="footer_li">
          <span style="color:#9CBAC6;">追蹤社群 ：</span>
          <a href="#" class="fa fa-facebook rounded-circle"  style="  background: #3B5998; color: white;  margin-right:20px; " ></a>
          <a href="#" class="fa fa-twitter rounded-circle" style="  background: #55ACEE; color: white; margin-right:20px;"></a>
          <a href="#" class="fa fa-instagram rounded-circle" style="  background: #125688; color: white; margin-right:20px;"></a>
          </li>
        <li class="footer_li">
          <span style="color:#9CBAC6;" >聯絡資訊 ：0912-345-678</span>
        </li>
        <li class="footer_li">
        <span style="color:#9CBAC6; ">＠此為個人練習用作品，無任何商業用途</span>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss">
// <router-link to="/">Home</router-link>
// <router-link to="/about">week5</router-link>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
margin: 0;
padding: 0;
border: 0;
outline: 0;
font-weight: inherit;
font-style: inherit;
font-size: 100%;
font-family: inherit;
vertical-align: baseline;
}
/* remember to define focus styles! */
:focus {
outline: 0;
}
body {
line-height: 1;
color: black;
background: white;
}
ol, ul {
list-style: none;
}
/* tables still need 'cellspacing="0"' in the markup */
table {
border-collapse: separate;
border-spacing: 0;
}
caption, th, td {
text-align: left;
font-weight: normal;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: "";
}
blockquote, q {
quotes: "" "";
}
@import "bootstrap";
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');
.navContainer{
  background-color: white;
  font-weight: 900;
  /* border: 1px solid #000; */
  box-shadow: 0px 5px 6px #00000029;
  z-index:10;
}
.navColor{
  // border-bottom: 3px solid white ;
  background-color: white;
}
.footer_calss{
  box-shadow: 5px 0px 6px #00000029;
}
.nav_one{
  // margin: 0 auto;
  // text-align: center;
  font-family: 'Krona One', sans-serif;
}
.nav_one a{
  font-size: 40px;
  // font-family: 'Roboto', sans-serif;
  padding-left:64px;
}

.nav_ul{
  max-width: 504px;
  font-size: 24px;
  font-family: 'Krona One', sans-serif;
  // justify-content: flex-end;
}
.nav_ul li{
  border-bottom: 3px solid #ffffff00 ;
  // padding: 8px;
  font-weight: 900;
};
.nav_ul li:hover{
  border-bottom: 3px solid #9CBAC6; ;
}
.banner_container{
  padding-top: 0px;

}
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  // display: inline-block;
  line-height: 0;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}
.fa {
  padding: 10px;
  font-size: 30px;
  width: 50px;
  height:50px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}
.fa-snapchat-ghost {
  background: #fffc00;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
.fa:hover {
    opacity: 0.7;
}
.footer_li {
  width :33%;
}
@media (max-width: 767px) {
  .footer_li {
    width :100%;
  }
}
@media (max-width: 375px) {
  .nav_one{
    text-align: start;
  }
  .nav_ul{
    text-align: center;
  }
  .nav_one{
    justify-content: space-between;
  }
 }
</style>
<script>
let navBtn = ''
export default {
  methods: {
    addBtncss () {
      navBtn.classList.remove('show')
    }
  },
  mounted () {
    navBtn = document.querySelector('.nav_ul')
    // const navBGC = document.querySelector('.navContainer')
    // window.onscroll = function () {
    //   if (window.pageYOffset >= 100) {
    //     navBGC.classList.add('navColor')
    //   } else {
    //     navBGC.classList.remove('navColor')
    //   }
    // }
  }
}
</script>
