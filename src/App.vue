<script setup>
import Postform from "./components/Postform.vue";
import Post from "./components/Post.vue";
import { ref } from "vue";

const arr = ref([
  { title: "My First Post", message: "This is the content of my first post." },
  {
    title: "My Second Post",
    message: "This is the content of my second post.",
  },
  { title: "My Third Post", message: "This is the content of my third post." },
  {
    title: "My Fourth Post",
    message: "This is the content of my fourth post.",
  },
  { title: "My Fifth Post", message: "This is the content of my fifth post." },
  {
    title: "My Sixth Post",
    message: "This is the content of my sixth post.",
  },
  {
    title: "My Seventh Post",
    message: "This is the content of my seventh post.",
  },
  {
    title: "My Eighth Post",
    message: "This is the content of my eighth post.",
  },
  { title: "My Ninth Post", message: "This is the content of my ninth post." },
  {
    title: "My Tenth Post",
    message: "This is the content of my tenth post.",
  },
]);
</script>

<template>
  <div className="flex flex-col w-full justify-center items-center h-full">
    <h1>Social network</h1>
    <Postform @addArray="(formdata) => arr.push(formdata)" />
    <ul
      className="flex flex-col overflow-y-auto h-96  w-2/4 justify-center items-center border-2 border-black rounded-md"
    >
      <li
        className="m-5 border-2 border-black bg-slate-300 p-6 rounded-md w-3/4"
        v-for="post in arr"
        :key="post.title"
      >
        <Post :title="post.title" :message="post.message" />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
