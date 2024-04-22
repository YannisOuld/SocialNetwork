<template>
  <form
    @submit.prevent="submitForm"
    className=" flex flex-col p-3 m-3 justify-center items-center w-96"
  >
    <div className="flex justify-between mt-3 w-full">
      <label className="mx-2" for="title">Title:</label>
      <input type="text" id="title" v-model="title" required />
    </div>
    <div className="flex flex-col justify-between mt-3 w-full">
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
const title = ref(null);
const message = ref(null);

function submitForm() {
  const formData = {
    title: "",
    message: "",
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
  console.log(formData);
  return arr.value.push(formData).then(console.log(arr.value));
}
</script>

<style scoped>
/* Add your custom styles here */
</style>
