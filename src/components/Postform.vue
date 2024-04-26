<template>
  <form
    @submit.prevent="submitForm"
    className=" flex flex-col p-3 m-3 justify-center items-center w-96 border-2 border-black rounded-md"
  >
    <div className="flex justify-between m-3 w-full">
      <label className="mx-2" for="title">Title:</label>
      <input type="text" id="title" v-model="title" required />
    </div>
    <div className="flex flex-col justify-between m-3 w-full">
      <label className="mx-2" for="message">Message:</label>

      <textarea
        id="message"
        v-model="message"
        required
        className=" resize-none "
      ></textarea>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { usePostsStore } from "../store/posts";

const { addPost, postsNumber } = usePostsStore();

const props = defineProps({
  user: Object,
});

const title = ref(null);
const message = ref(null);

function submitForm() {
  const arrlenght = postsNumber();
  const id = arrlenght + 1;

  const formData = {
    title: "",
    message: "",
    user: props.user,
    id: id,
  };

  if (title.value != null) {
    formData.title = title.value;
  }
  if (message.value != null) {
    formData.message = message.value;
  }

  if (title.value == null && message.value == null) {
    return alert("Please fill out all fields!");
  }

  title.value = null;
  message.value = null;

  return addPost(formData);
}
</script>

<style scoped>
/* Add your custom styles here */
</style>
