<template>

  <div class="home-menu">
    <div class="home-lottie">
      <lottie-player class="mx-auto" src="https://assets10.lottiefiles.com/packages/lf20_34qRI0i4ti.json"  background="transparent"
                     speed="0.4"  style="width: 300px; height: 300px;"  loop autoplay></lottie-player>
    </div>
    <h1 class="display-4 fw-bolder mb-8">Bienvenue</h1>

    <div class="row">
      <div class="col-lg-5 col-sm-12 card mx-auto mt-4 p-0">
        <div class="card-header fs-3 fw-bold">
          Que voulez-vous faire ?
        </div>
        <ul class="list-group list-group-flush fs-5">
          <li class="list-group-item m-0">
            <router-link class="nav-link" to="/game">Jouer une partie</router-link>
          </li>
          <li class="list-group-item m-0 disabled disable-item">Ajouter un joueur</li>
          <li class="list-group-item m-0 disabled disable-item">Classement des joueurs</li>
        </ul>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  name: 'HomeMenu',

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.list-group-item:hover {
  background: #212529;
  color: white;
}

.disable-item {
  background-color: lightgrey !important;
}

</style>
