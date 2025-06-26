<script setup lang="ts">
const slug = useRoute().params.slug


const {data: post} = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('post').path(`/posts/${slug}`).first()
})


</script>

<template>
  <div>
    <title> {{ post?.title }} </title>
    <h2> {{ post?.title }} </h2>
    <span class="date"> {{ post?.date }} </span>
    <ContentRenderer :value="post" />
  </div>
</template>

<style scoped>

</style>