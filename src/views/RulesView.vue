<template>
  <div class="rules" style="margin-top: 100px">
    <h1 class="display-4 d-flex justify-content-center mb-4">Règles du jeu</h1>
    <div class="card mx-auto text-bg-dark" style="width: 40rem">
      <div class="card-body">
        <h2 class="card-title fs-4">Le Morpion</h2>
        <p class="card-text fst-italic">Le jeu se joue à 2 joueurs sur un damier de 3 cases par 3 cases</p>
      </div>
      <ul class="list-group list-group-flush bg-dark">
        <li class="list-group-item d-inline-flex">
          ▢ Chaque joueur est représenté par un "symbole"</li>
        <li class="list-group-item d-inline-flex">
          ▢ Un premier joueur dessine son symbole sur une case.
          Puis c'est au tour de l'autre joueur de dessiner son symbole sur une case vide.</li>
        <li class="list-group-item d-inline-flex">
          ▢ Le but du jeu est de réussir à aligner ses trois symboles
          (horizontal, vertical ou diagonale), on remporte alors la partie.</li>
      </ul>
      <div class="card-body mx-auto">
        <router-link to="/" class="px-4 m-2 py-2 btn btn-outline-light rounded uppercase
         font-bold duration-300">Menu Principal</router-link>
        <router-link to="/game" class="px-4 m-2 py-2 btn btn-outline-light focus:bg-green-600 rounded uppercase
         font-bold hover:bg-green-600 duration-300">Jouer !</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RulesView',

}
</script>