<template>
  <div>
    <h1>메이플스토리 직업 월드컵</h1>
    <button @click="startSelection">시작</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useSelectionStore } from '../stores/class';
import { decidePreRound } from '../utils';
const router = useRouter();
const selection = useSelectionStore();

selection.record = [];
selection.randomize();
const { match, roundCount } = decidePreRound(selection.total);
const rest = selection.total.slice(match.length);
selection.roundCount = roundCount;
selection.match = match;
selection.rest = rest;
selection.record.push(match);

const startSelection = () => {
  router.push('/select');
};
</script>

<style scoped>
div {
  width: 100%;
}
</style>
