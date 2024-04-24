<template>
  <div className="bg-white rounded-lg">
    <h2 className=" font-extrabold ">{{ post.title }}</h2>
    <p>{{ post.message }}</p>
  </div>
</template>

<script setup>
const post = defineProps({
  title: String,
  message: String,
});
</script>
