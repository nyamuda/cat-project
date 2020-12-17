<template>
  <div class="slider">
    <carousel-3d
      :controls-visible="false"
      :autoplay-timeout="5000"
      :autoplay="true"
    >
      <slide :index="0">
        <div id="one" class="fact-container">
          <p>A house cat can reach speeds of up to 30mph</p>
        </div>
      </slide>
      <slide :index="1">
        <div id="six" class="fact-container">
          <p>
            Cats will refuse an unpalatable food to the point of starvation.
          </p>
        </div>
      </slide>
      <slide :index="2">
        <div id="two" class="fact-container">
          <p>
            A cat with a question-mark-shaped tail is asking, “Want to play?”
          </p>
        </div>
      </slide>
      <slide :index="3">
        <div id="three" class="fact-container">
          <p>
            When dogs wag their tails, they may be expressing happiness. But
            this isn’t the case for cats! When your cat wags her tail, it’s her
            way of warning you that you are getting on her last nerve.
          </p>
        </div>
      </slide>
      <slide :index="4">
        <div id="four" class="fact-container">
          <p>
            Cats find it threatening when you make direct eye contact with them.
          </p>
        </div>
      </slide>
      <slide :index="5">
        <div id="five" class="fact-container">
          <p>
            If your cat approaches you with a straight, almost vibrating tail,
            this means that she is extremely happy to see you.
          </p>
        </div>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  components: {
    Carousel3d,
    Slide,
  },
};
</script>
<style scoped>
.slider {
  position: relative;
  width: 90%;
  margin: auto;
}
.fact-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
}
.fact-container p {
  padding: 1rem;
  color: #ffffff;
}

#one {
  background: linear-gradient(
      0deg,
      rgba(32, 32, 32, 0.6),
      rgba(32, 32, 32, 0.6)
    ),
    url(https://madweb2013.files.wordpress.com/2013/05/cat-jumping-running-grass.jpg);
  min-height: 100%;

  background-size: cover;
}
#two {
  background: linear-gradient(
      0deg,
      rgba(32, 32, 32, 0.6),
      rgba(32, 32, 32, 0.6)
    ),
    url(https://coleandmarmalade.com/wp-content/uploads/2019/05/cats-paradise-net.jpg);
  min-height: 100%;

  background-size: cover;
}
#three {
  background: linear-gradient(
      0deg,
      rgba(32, 32, 32, 0.6),
      rgba(32, 32, 32, 0.6)
    ),
    url(https://www.catster.com/wp-content/uploads/2017/12/Fluffy-orange-and-white-tabby-kitten-with-tail-raised.jpg);
  min-height: 100%;

  background-size: cover;
}
#four {
  background: linear-gradient(
      0deg,
      rgba(32, 32, 32, 0.6),
      rgba(32, 32, 32, 0.6)
    ),
    url(https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  min-height: 100%;

  background-size: cover;
}
#five {
  background: linear-gradient(
      0deg,
      rgba(32, 32, 32, 0.6),
      rgba(32, 32, 32, 0.6)
    ),
    url(https://www.catster.com/wp-content/uploads/2018/01/Cat-with-tail-upright.jpg);
  min-height: 100%;

  background-size: cover;
}
#six {
  background: linear-gradient(
      0deg,
      rgba(32, 32, 32, 0.6),
      rgba(32, 32, 32, 0.6)
    ),
    url(https://cf.ltkcdn.net/cats/images/orig/243294-1600x1030-homemade-cat-food.jpg);
  min-height: 100%;

  background-size: cover;
}

#one,
#two,
#three,
#four,
#five,
#six p {
  font-size: 0.8rem;
}

@media (min-width: 320px) {
  #one,
  #two,
  #three,
  #four,
  #five,
  #six p {
    font-size: 1.1rem;
  }
}

@media (min-width: 480px) {
  #one,
  #two,
  #three,
  #four,
  #five,
  #six p {
    font-size: 1.3rem;
  }
}

@media (min-width: 768px) {
  #one,
  #two,
  #three,
  #four,
  #five,
  #six p {
    font-size: 1.4rem;
  }
}
</style>
