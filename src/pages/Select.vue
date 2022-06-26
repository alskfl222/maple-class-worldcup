<template>
  <div class="select-container">
    <h1>선택</h1>
    <div class="class-container">
      <div
        v-for="(participant, index) in current"
        class="select-class"
        :key="participant"
        @click="onSelect(index)"
      >
        {{ participant }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useSelectionStore } from '../stores/class.ts';
import { ref } from 'vue';
const router = useRouter();
const selection = useSelectionStore();

let current = ref(selection.getCurrentMatch());
if (current.value.length === 0) {
  router.push('/');
}

const onSelect = (index: number) => {
  selection.select(index);
  if (selection.match.length === 0) {
    selection.nextRound();
  }
  current.value = selection.getCurrentMatch();
  if (current.value.length === 1) {
    selection.setWinner()
    router.push('/result')
  }
};
</script>

<style scoped lang="scss">
.select-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.class-container {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
.select-class {
  border: 1px solid black;
}
</style>
