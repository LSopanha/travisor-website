import { defineStore } from 'pinia';
import axios from 'axios';

export const useBlogStore = defineStore('blog', {
   state:() => ({
      blog: {},
      blogs: []
   }),

   actions: {
      setBlog(blog) {
         this.blog = blog;
      },
      setBlogs(blogs) {
         this.blogs = blogs;
      },
      async storeBlog(data) {
         const response = await this.$axios.post('blogs', data);
         return response;
      },
      async fetchBlogById(blogId) {
         const response = await axios.get(`${process.env.publicApi}blogs/${blogId}`);
         this.setBlog(response.data.data);
         console.log(this.blog);
      },
      async fetchBlogs() {
         const response = await axios.get(`${process.env.publicApi}blogs`);
         this.setBlogs(response.data.data)
      },
   }
})