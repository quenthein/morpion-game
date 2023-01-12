<template>
      <v-app-bar
          color="dark"
          prominent
      >
        <v-app-bar-nav-icon variant="text">
          <v-icon
              icon="mdi-crop-square"
              color="white"
          ></v-icon>
        </v-app-bar-nav-icon>

        <v-spacer></v-spacer>


        <v-btn variant="text"
               icon="mdi-dots-vertical"
               color="white"
               @click.stop="drawer = !drawer"
        >

        </v-btn>
      </v-app-bar>

      <v-navigation-drawer
          v-model="drawer"
          location="bottom"
          class="bg-dark text-white"
          temporary
      >
        <v-container class="menu-rules">
          <h1 class="text-h5">Rappel des règles</h1>

        </v-container>
      </v-navigation-drawer>

</template>
<script>
export default {
  data: () => ({
    name: "NavigationBar",
    drawer: false,
    group: null,
    items: [
      {
        title: 'Foo',
        value: 'foo',
      },
      {
        title: 'Bar',
        value: 'bar',
      },
      {
        title: 'Fizz',
        value: 'fizz',
      },
      {
        title: 'Buzz',
        value: 'buzz',
      },
    ],
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>

<style scoped>

</style>