<script setup>
import Postform from "./components/Postform.vue";
import Post from "./components/Post.vue";
import { ref } from "vue";

const arr = ref([
  {
    id: 1,
    title: "My First Post",
    user: { id: 1, firstname: "kevin", lastname: "smith" },
    message: "This is the content of my first post.",
  },
  {
    id: 2,
    title: "My Second Post",
    message: "This is the content of my second post.",
    user: { id: 1, firstname: "kevin", lastname: "smith" },
  },
  {
    id: 3,
    title: "My Third Post",
    user: { id: 1, firstname: "kevin", lastname: "smith" },
    message: "This is the content of my third post.",
  },
  {
    id: 4,
    title: "My Fourth Post",
    user: { id: 1, firstname: "kevin", lastname: "smith" },
    message: "This is the content of my fourth post.",
  },
  {
    id: 5,
    title: "My Fifth Post",
    user: { id: 1, firstname: "kevin", lastname: "smith" },
    message: "This is the content of my fifth post.",
  },
  {
    id: 6,
    title: "My Sixth Post",
    user: { id: 1, firstname: "kevin", lastname: "smith" },
    message: "This is the content of my sixth post.",
  },
  {
    id: 7,
    title: "My Seventh Post",
    user: { id: 1, firstname: "kevin", lastname: "smith" },
    message: "This is the content of my seventh post.",
  },
  {
    id: 8,
    title: "My Eighth Post",
    user: { id: 1, firstname: "kevin", lastname: "smith" },
    message: "This is the content of my eighth post.",
  },
  {
    id: 9,
    title: "My Ninth Post",
    user: { id: 1, firstname: "kevin", lastname: "smith" },
    message: "This is the content of my ninth post.",
  },
  {
    id: 10,
    title: "My Tenth Post",
    user: { id: 1, firstname: "kevin", lastname: "smith" },
    message: "This is the content of my tenth post.",
  },
]);
const user = { id: 2, firstname: "jack", lastname: "black" };

let lastId = ref(arr.value[arr.value.length - 1].id);
console.log(lastId.value);
</script>

<template>
  <div className="flex flex-col w-full justify-center items-center h-full">
    <h1>Social network</h1>
    <Postform
      @addArray="(formdata) => arr.push(formdata)"
      :user="user"
      :lastId="lastId"
    />
    <ul
      className="flex flex-col overflow-y-auto h-96  w-2/4 justify-center items-center border-2 border-black rounded-md"
    >
      <li
        className="m-5 border-2 border-black bg-slate-300 p-6 rounded-md w-3/4"
        v-for="post in arr"
        :key="post.id"
      >
        <Post
          @deletePost="(post) => arr.filter((p) => p.title !== post.title)"
          :id="post.id"
          :user="post.user"
          :title="post.title"
          :message="post.message"
          :currentUser="user.id"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
