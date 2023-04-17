<template>
  <div ref="background" class="background">
    <span class="hidden-sm-and-down"> Du</span>
  </div>
  <div class="go" v-show="showItem">
    <router-link to="/gpt" class="link link_a">证券小助手 &nbsp;</router-link>
    <router-link to="#" class="link">|</router-link>
    <router-link to="/manager" class="link link_b">后台管理 &nbsp;</router-link>
  </div>
  <!-- {{ scroll_y }} -->
  <h2>
    I’ve trained a model called DuGPT which interacts in a
    conversational way. The dialogue format makes it possible for ChatGPT to
    answer followup questions, admit its mistakes, challenge incorrect premises,
    and reject inappropriate requests.
  </h2>

 
</template>

<script setup>
import { onMounted, ref } from "vue";

const showItem = ref(false);
const scroll_y = ref();

onMounted(() => {
  const background = document.querySelector(".background");

  document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    scroll_y.value = window.scrollY;
    if(scroll_y.value <370 ) { showItem.value = false}
    if(scroll_y.value >370 ) { showItem.value = true}
    background.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`;
  });
});
</script>

<style scoped>
.go {
    padding: 0 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* position: fixed;
    bottom: 650px;
    left: 50%; */
    top: 69vh;
  left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 440px;
    height: 140px;background-color: rgba(0, 0, 0, 0.3);
    z-index: 999;
    animation: jumpin 0.5s  ease-in-out;
}
.link{
    text-decoration: none;
    color: #fff;
    font-size: 28px;
}
.link_a:hover::after{
   display: inline-block;
}
.link_b:hover::after{
   display: inline-block;
}
.link_a::after{
    display: none;
    position: absolute;
    content: " >>>";
    text-decoration: none;
    color: #fff;
    font-size: 28px;
    animation: slide 1s infinite ease-in-out;
}
.link_b::after{
    display: none;
    position: absolute;
    content: " >>>";
    text-decoration: none;
    color: #fff;
    font-size: 28px;
    animation: slide 1s infinite ease-in-out;
}


.link:hover{
    font-style: italic;
}
@keyframes jumpin {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }   
}
@keyframes slide {
    0% {
        opacity: 0.5;
        transform: translateX(-5px);
    }
    100% {
        opacity: 1;
        transform: translateX(5px);
    }   
}
body {
  margin: 0;
  padding: 0;
  height: 200vh;
  overflow-x: hidden;
}
.hidden-sm-and-down {
  margin-top: 30px;
}

.background {
  background-image: url("../assets/img/home.jpg");
  background-size: cover;
  background-position: 50% 50%;
  height: 130vh;
  font: 400 19rem "";
  line-height: 110vh;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  text-align: center;
  overflow: hidden;
}

.background::before {
  content: "";
  background-size: cover;
  background-image: inherit;
  background-position: 50% 50%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -99;
}

h1 {
  position: absolute;
  text-align: center;
  width: 100%;
  letter-spacing: 10px;
  color: #fff;
}

h2 {
  position: absolute;
  letter-spacing: 2px;
  top: 80vh;
  left: 50%;
  width: 60%;
  color: #fff;
  transform: translateX(-50%);
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.4);
}

* {
  border-radius: 5px;
}
</style>

<script>
import "element-plus/theme-chalk/display.css";
</script>
