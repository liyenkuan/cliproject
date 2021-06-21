<template>
  <div class="works_title">
      <span class="material-icons">
      work_outline
      </span>
        作品集
        <span class="works_sub">works</span>
        <hr>
  </div>
  <ul class="d-flex justify-content-center w-100 flex-wrap cardUl">
      <li class=" cardLi" >
        <div class="card bg-dark text-white w-100 ">
        <img src="https://i.imgur.com/VqjcO3o.jpg" class="card-img" alt="...">
          <div class="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
          </div>
      </li>
      <li class="cardLi">
        <div class="card bg-dark text-white w-100 ">
          <img src="https://i.imgur.com/VqjcO3o.jpg" class="card-img" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </li>
      <li class="cardLi ">
        <div class="card bg-dark text-white w-100 ">
          <img src="https://i.imgur.com/VqjcO3o.jpg" class="card-img" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </li>
      <li class="cardLi ">
        <div class="card bg-dark text-white w-100 ">
          <img src="https://i.imgur.com/VqjcO3o.jpg" class="card-img" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </li>
      <li class=" cardLi ">
        <div class="card bg-dark text-white w-100 ">
          <img src="https://i.imgur.com/VqjcO3o.jpg" class="card-img" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </li>
      <li class=" cardLi ">
        <div class="card bg-dark text-white w-100 ">
          <img src="https://i.imgur.com/VqjcO3o.jpg" class="card-img" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </li>
      <li class="cardLi ">
        <div class="card bg-dark text-white w-100 ">
          <img src="https://i.imgur.com/VqjcO3o.jpg" class="card-img" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </li>
       <li class=" cardLi ">
        <div class="card bg-dark text-white w-100 ">
          <img src="https://i.imgur.com/VqjcO3o.jpg" class="card-img" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </li>
      <li class=" cardLi ">
        <div class="card bg-dark text-white w-100 ">
          <img src="https://i.imgur.com/VqjcO3o.jpg" class="card-img" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </li>
</ul>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');
.works_title {
  padding-bottom: 80px;
  padding: 80px;
  color: #C26029;
  font-weight: 900;
  font-size: 48px;
  font-family: 'Krona One', sans-serif;
  text-align: center;
  position: relative;
  // letter-spacing: -4px;
}
.works_sub {
  position: absolute;
  font-size: 32px;
  color: #E0E0E0;
  top:100px;
  // letter-spacing: -2px;
}
.cardUl {
  padding-right: 80px;
  padding-left: 80px;
}
.cardLi  {
  width: 33%;
  padding: 10px;
}
.card {
  border-radius:0;
  box-shadow: 1px 1px 1px 1px #ADADAD;
}
@media (max-width: 767px) {
  .cardUl {
    padding: 0px;
  }
  .cardLi  {
    width: 100%;
  }
  .works_title {
  padding-bottom: 40px;
  padding: 40px;
  color: #C26029;
  font-weight: 900;
  font-size: 32px;
  font-family: 'Krona One', sans-serif;
  text-align: center;
  position: relative;
  // letter-spacing: -4px;
  }
  .works_sub {
  position: absolute;
  font-size: 24px;
  color: #E0E0E0;
  top:70px;
  right:150px;
  // letter-spacing: -2px;
  }
 }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
