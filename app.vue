<template>
  <NuxtLayout>
    <div id="all">
    <header>
      <h1>Tyler's Blog</h1>
    </header>
    <nav>
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/media-list">My media</NuxtLink> |
      <NuxtLink to="/posts">Posts</NuxtLink>
    </nav>
    <main id="main">
      <div>
        <NuxtRouteAnnouncer />
        <NuxtPage/>
      </div>
    </main>
    <aside>

    </aside>
    </div>
  </NuxtLayout>
</template>

<style>
a:visited {
  color: black
}

a:hover {
  color: black
}

a:focus {
  color: black
}

a:active {
  color: white
}


#all {
  margin: auto;
  max-width: 600px;
  font-family: "Inter", "sans-serif";
}

@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter-Regular.ttf"), url("/fonts/Inter-Italic.ttf");
}

h1 {
  font-weight: bold;
  margin: 20px 0 0;
}

nav {
  margin: 0 0 20px;
}

</style>

<script setup lang="ts">
</script>