<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.message }}</p>
  </div>
</template>

<script setup>
const post = defineProps({
  title: String,
  message: String,
});
</script>
