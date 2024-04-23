<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.message }}</p>
  </div>
</template>

<script setup>
const post = defineProps({
  title: String,
  message: String,
});
</script>
