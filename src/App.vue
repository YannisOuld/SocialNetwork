<script setup>
import Postform from "./components/Postform.vue";
import Post from "./components/Post.vue";
import { usePostsStore } from "./store/posts";
import { storeToRefs } from "pinia";

const { arr } = storeToRefs(usePostsStore());
const user = { id: 2, firstname: "jack", lastname: "black" };
</script>

<template>
  <div className="flex flex-col w-full justify-center items-center h-full">
    <h1>Social network</h1>
    <Postform />
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
