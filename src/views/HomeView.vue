<template>
  <HomeMenu />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HomeMenu from "@/components/HomeMenu";

export default defineComponent({
  name: 'HomeView',

  components: {
    HomeMenu,
  },
});
</script>
