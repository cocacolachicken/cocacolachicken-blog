<script setup lang="ts">

const { data: query } = await useAsyncData("posts-list", () => {
  return queryCollection('post').order("date", "DESC").select('title', 'path', 'description', 'date').all()
})

</script>

<template>
  <div v-for="post in query">
    <b><NuxtLink :to="`${post.path}`">{{ post.title }} </NuxtLink> </b> <span class="date">posted {{ new Date(post.date).toDateString() }} </span><br/>
    <span class="description"> {{ post.description }} </span>
  </div>

</template>

<style scoped>

.description {
  opacity: 50%
}

.date {
  opacity: 75%
}

</style>