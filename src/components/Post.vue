<template>
  <div className="bg-white rounded-lg">
    <div>
      <span>{{ post.user.firstname + " " + post.user.lastname }}</span>
      <div>
        <h2 className=" font-extrabold ">{{ post.title }}</h2>
        <p>{{ post.message }}</p>
      </div>
    </div>
    <button
      v-if="currentUser == post.user.id"
      @click="deletePost(post.id, post.title, post.message)"
      className="rounded-full bg-red-600 font-bold text-white px-4 py-2"
    >
      x
    </button>
  </div>
</template>

<script setup>
import { usePostsStore } from "../store/posts";
const { deletePost } = usePostsStore();
const post = defineProps({
  title: String,
  message: String,
  user: Object,
  id: Number,
  currentUser: Number,
});
</script>
