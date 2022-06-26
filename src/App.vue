<template>
  <div class='inner'>
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style lang='scss'>
#app {
  display: flex;
  justify-content: center;
}
.inner {
  width: 900px;
  display: flex;
  justify-content: center;
}
</style>
