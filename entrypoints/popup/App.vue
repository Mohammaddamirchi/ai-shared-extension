<script setup lang="ts">
import { ref } from 'vue';

const credits = ref(0);
</script>

<template>
  <main class="popup">
    <header>
      <span class="brand">AI Shared</span>
      <span class="status">MVP</span>
    </header>

    <section class="balance">
      <span>Credits</span>
      <strong>{{ credits.toLocaleString() }}</strong>
    </section>

    <button type="button">Open dashboard</button>
  </main>
</template>

<style scoped>
.popup { width: 280px; padding: 18px; font: 14px system-ui, sans-serif; color: #18181b; }
header { display: flex; justify-content: space-between; align-items: center; }
.brand { font-weight: 700; }
.status { padding: 3px 7px; border-radius: 999px; background: #f4f4f5; font-size: 11px; }
.balance { display: grid; gap: 6px; margin: 20px 0; padding: 16px; border: 1px solid #e4e4e7; border-radius: 12px; }
.balance span { color: #71717a; }
.balance strong { font-size: 26px; }
button { width: 100%; padding: 10px; border: 0; border-radius: 9px; cursor: pointer; }
</style>
