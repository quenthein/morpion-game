<template>
  <v-app>
    <v-main>
      <NavigationBar />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";

export default {
  name: 'App',
  components: {NavigationBar},
  data: () => ({
    //
  }),
}
</script>
<style>

#app {
  font-family: 'Josefin Sans', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

</style>