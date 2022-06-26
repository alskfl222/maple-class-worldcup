<template>
  <div>
    {{ tier }}
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useSelectionStore } from '../stores/class.ts';
import { getTournamentTree } from '../utils';
import { ref } from 'vue';
const router = useRouter();
const selection = useSelectionStore();

const record = ref(selection.record);
if (record.value.length !== selection.roundCount + 1) {
  router.push('/');
}
const getTier = () => {
  const arr = record.value.slice().reverse();
  const tier = [arr[0]];
  for (let i = 0; i < arr.length - 1; i++) {
    const item = arr[i + 1].filter((el) => !arr[i].includes(el));
    tier.push(item);
  }
  return tier;
};
const tournamentTree = getTournamentTree(record.value);
const tier = getTier();
console.log(tournamentTree);
</script>

<style scoped></style>
