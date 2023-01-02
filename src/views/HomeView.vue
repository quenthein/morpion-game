<template>
  <div class="home" style="margin-top: 100px; text-align: center;">
    <HomeMenu />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeMenu from "@/components/HomeMenu.vue";

export default {
  name: 'HomeView',
  components: {
    HomeMenu,
  }
}
</script>
