<script setup lang="ts">

const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())


</script>

<template>
  <title>Tyler's Blog</title>
  <div>
    Don't cry I rock chanel
  </div>
</template>

<style scoped>

</style>