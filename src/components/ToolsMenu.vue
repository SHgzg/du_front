<template>
  <div class="tools-container">
    <div class="tools-wrapper">
        <div class="tool-item"  @click="$emit('feedback')">评论</div>
      <router-link to="manager">
        <div class="tool-item">管理员</div>
      </router-link>
      <div class="tool-item">简介</div>
      <div class="tool-item">帮助</div>
      <div class="tool-item">联系我</div>
    </div>
  </div>
</template>

<style>
.tools-container {
  animation: show 0.3s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 200px;
  background-color: rgba(205, 205, 205, 0.8);
  box-shadow: 1px 1px 0.9px 1px rgba(10, 10, 10, 0.5),
    -1px -1px 0.9px 1px rgba(210, 210, 210, 0.5);
  position: fixed;
  border-radius: 10px;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  overflow: hidden;
}

.tool-item {
  display: block;
  height: 40px;
  color: #889e9b;
  font-weight: bolder;
}

.tool-item:hover {
  color: black;
  font-style: italic;
}
@keyframes show {
  0% {
    height: 0;
  }

  100% {
    height: 300px;
  }
}
</style>
