<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.message }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const post = ref({
  title: "My First Post",
  message: "This is the content of my first post.",
});
</script>
