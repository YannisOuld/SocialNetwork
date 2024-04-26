import { defineStore } from 'pinia';

export const usePostsStore = defineStore('posts', {
    state: () => ({
        posts: [],
    }),
    actions: {
        addPost(post) {
            this.posts.push(post);
        },
        removePost(postId) {
            this.posts = this.posts.filter(post => post.id !== postId);
        },
        updatePost(postId, updatedPost) {
            const index = this.posts.findIndex(post => post.id === postId);
            if (index !== -1) {
                this.posts[index] = updatedPost;
            }
        },
    },
});