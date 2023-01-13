<template>
      <v-app-bar
          color="dark"
          prominent
      >
        <v-app-bar-nav-icon
            to="/"
            variant="text">
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

            <v-list>
              <v-list-header class="text-white">Rappel des règles</v-list-header>

              <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
              >
                <template v-slot:prepend>
                  <v-icon class="my-element--animating" :icon="icon"></v-icon>
                </template>

                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item>
            </v-list>
        </v-container>
      </v-navigation-drawer>

</template>
<script>
export default {
  data: () => ({
    name: "NavigationBar",
    drawer: false,
    group: null,
    icon: 'mdi-square-medium',
    items: [
      { text: 'Chaque joueur est représenté par un "symbole"' },
      { text: 'Un premier joueur dessine son symbole sur une case. Puis c\'est au tour de l\'autre joueur de dessiner son symbole sur une case vide.' },
      { text: 'Le but du jeu est de réussir à aligner ses trois symboles (horizontal, vertical ou diagonale), on remporte alors la partie.' },
    ],
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>
