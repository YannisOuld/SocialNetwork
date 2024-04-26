import { defineStore } from 'pinia';
import { ref } from "vue";

export const usePostsStore = defineStore('posts', () => {

    const posts = ref([{
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
    },]);

    function postsNumber() {
        return posts.length;
    }
    function addPost(post) {
        posts.value.push(post);
    };
    function deletePost(postId) {
        posts.value = posts.value.filter(post => post.id !== postId);
    };
    function updatePost(postId, updatedPost) {
        const index = posts.value.findIndex(post => post.id === postId);
        if (index !== -1) {
            posts.value[index] = updatedPost;
        }
    };
    return {
        posts,
        addPost,
        deletePost,
        updatePost,
        postsNumber
    };


});