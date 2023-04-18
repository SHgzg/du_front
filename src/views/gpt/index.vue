<template>
  <div class="container">
    <div class="chat-wrapper">
      <div class="chat-msg">
        <TransitionGroup name="list" tag="ul">
          <template v-for="(item, index) in chatList" :key="index">
            <div class="msg-box" :class="item.name == 'GPT' ? 'left' : 'right'">
              <div class="avatar"></div>
              <div class="message">
                <div
                  class="message-text"
                  :class="
                    item.name == 'GPT'
                      ? 'message-text-left'
                      : 'message-text-right'
                  "
                >
                  <p>{{ item.msg }}</p>
                </div>
              </div>
            </div>
          </template>
        </TransitionGroup>
        <!-- ============================ -->
      </div>
      <div class="chat-input">
        <el-input
          v-model="input"
          @keyup="send"
          type="textarea"
          :rows="5"
          class="input"
        />
        <button class="emit-button" @click="sendInput">Enter 发送</button>
      </div>
    </div>

    <div class="tool" v-show="!toolShow" @click="showTools"></div>
    <ToolsMenu
      v-show="toolShow"
      @click="showTools"
      @feedback="showFeedback"
    ></ToolsMenu>
  </div>
  <div class="feedback" v-show="feedbackShow">
    <el-input type="textarea" v-model="comment_msg" ref="comment_input" />
    <el-button type="primary" @click="sendComment">评论</el-button>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import { ref } from "vue";
import axios from "axios";
import request from "../../utils/request";
import ToolsMenu from "../../components/ToolsMenu.vue";
const comment_msg = ref();
const toolShow = ref(false);
const feedbackShow = ref(false);
const showTools = () => {
  toolShow.value = !toolShow.value;
};
function showFeedback() {
  feedbackShow.value = true;
}
Document.selec;
function test() {
  alert("dfsd");
}
let chatList = ref([{ name: "GPT", msg: "你好！我是您的证券助手GPT~" }]);
const input = ref();
const send = (e) => {
  let box = document.getElementsByClassName("chat-msg")[0];
  if (e.code == "Enter") {
    sendInput();
  }
  setTimeout(() => {
    box.scrollTop = box.scrollHeight;
  }, 0);
};
function sendInput() {
  let obj = {};
  obj.name = "XiaoDu";
  obj.msg = input.value;
  chatList.value.push(obj);
  request.get(`/chat?word=${obj.msg}`).then((res) => {
    console.log(res.data);
    let temp = {};
    temp.name = "GPT";
    temp.msg = res.data;
    chatList.value.push(temp);
    setTimeout(() => {
      box.scrollTop = box.scrollHeight;
    }, 0);
  });
  input.value = "";
  setTimeout(() => {
    box.scrollTop = box.scrollHeight;
  }, 0);
}
function sendComment() {
  request.get(`/commnet?commnet=${comment_msg}`).then((res) => {});
  feedbackShow.value = false
  comment_msg.value = []
}
function getBaiDu() {
  // let URL = `https://baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=${input.value}`
  let URL = `https://baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=${input.value}`;
  axios.get(URL).then((res) => {
    console.log(res);
  });
}
function goBaiDu() {
  let URL = `https://baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=${input.value}`;
  // window.location.href = URL
  window.open(URL, "_blank");
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  width: 600px;
  border-radius: 50px;
  background: #a0bab6;
  box-shadow: 20px 20px 60px #889e9b, -20px -20px 60px #b8d6d1;
}

.chat-wrapper {
  margin: 120px auto 0;
  padding-top: 20px;
  display: block;
  width: 600px;
  height: 850px;
  border-radius: 20px;
  position: relative;
}

.chat-msg {
  overflow-y: scroll;
  display: block;
  width: 100%;
  height: 700px;
  border-radius: 50px;
}

.msg-box {
  display: flex;
  padding: 0 30px;
  max-width: 100%;
  align-items: center;
  justify-content: flex-start;
}

.avatar {
  background-color: transparent;
  display: block;
  border-radius: 50%;
  min-width: 60px;
  height: 60px;
  align-self: flex-start;
  margin-top: 16px;
}

.message {
  background-color: transparent;
  word-wrap: break-word;
  word-break: break-all;
  display: block;
  max-width: 460px;
  /* height: 60px; */
  padding: 20px;
}

.message-text-left {
  position: relative;
  background-color: aliceblue;
  min-height: 60px;
  border-radius: 10px;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.message-text-left::before {
  position: absolute;
  top: 20px;
  left: -20px;
  width: 0;
  height: 0;
  display: block;
  content: "";
  border-bottom: solid 10px transparent;
  border-top: solid 10px transparent;
  border-left: solid 10px transparent;
  border-right: solid 10px aliceblue;
}

.message-text-right {
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  background-color: aliceblue;
  min-height: 60px;
  padding: 0 20px;
}

.message-text-right::before {
  position: absolute;
  top: 20px;
  right: -20px;
  width: 0;
  height: 0;
  display: block;
  content: "";
  border-bottom: solid 10px transparent;
  border-top: solid 10px transparent;
  border-left: solid 10px aliceblue;
  border-right: solid 10px transparent;
}

.message-text-right {
}

.left .avatar {
  background: url("../../assets/img/ChatGPT.png");
  background-size: 100% 100%;
}

.right {
  flex-direction: row-reverse;
}

.chat-gpt {
  width: 80px;
}

.right .avatar {
  background: url("../../assets/img/user.jfif");
  background-size: 100% 100%;
}

.chat-input {
  margin: 0 auto;
  position: relative;
  /* bottom: 0; */
  margin-bottom: 10px;
  width: 80%;
  /* height: 180px; */
  /* background-color: red; */
}

.input {
  height: 100px;
  border: none;
}

::-webkit-scrollbar {
  display: none;
}

.avatar:hover {
  animation: span 2s linear infinite;
}

@keyframes span {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.emit-button {
  position: absolute;
  bottom: 0;
  right: 10px;
  border: none;
  color: #889e9b;
  border-radius: 2px;
  z-index: 9;
}
.emit-button:hover {
  background-color: #889e9b;
  color: wheat;
}

/* ----------------------- */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.tool {
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #889e9b;
  position: fixed;
  top: 50%;
  right: 30px;
  box-shadow: 1px 1px 0.9px 1px rgba(10, 10, 10, 0.5),
    -1px -1px 0.9px 1px rgba(210, 210, 210, 0.5);
}

.feedback {
  display: block;
  width: 600px;
  height: 400px;
  background-color: #889e9b;
  position: fixed;
  right: 10px;
  top: 10px;
}
</style>
