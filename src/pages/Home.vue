<template>
  <div>
    <h1>메이플스토리 직업 월드컵</h1>
    <button @click="startSelection">시작</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter()

const startSelection = () => {
  router.push('/select')
}
</script>

<style scoped></style>
