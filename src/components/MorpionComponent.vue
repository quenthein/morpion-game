<template>
  <div>
    <h3 class="text-4xl font-bold mb-8">👋 C'est le tour du joueur '{{ player }}'</h3>
    <div class="container">
      <div class="flex flex-col items-center mb-8">
        <div
            v-for="(row, x) in board"
            :key="x"
            class="flex">
          <div
              v-for="(cell, y) in row"
              :key="y"
              @click="MakeMove(x, y)"
              :class="`morpion-tab border border-black fw-bold w-28 h-28 hover:bg-gray-200
               flex items-center justify-center material-icons-outlined text-4xl
               cursor-pointer ${cell === 'X' ? 'text-black-500' : 'text-red-600'}`">
            {{ cell === 'X' ? 'X' : cell === 'O' ? 'O' : '' }}
          </div>
        </div>
      </div>
    </div>


    <div class="text-center">

      <div v-if="winner" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl
            transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h2 class="text-4xl font-bold mb-8">🎉 Joueur '{{ winner }}' a gagné !</h2>
                    <div class="mt-2">
                      <p class="fs-6 text-gray-500">Voulez vous rejouer une partie ?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">

                <button @click="ResetGame" v-if="show" class="px-4 m-2 py-2 btn btn-outline-dark focus:bg-green-600
                rounded uppercase font-bold hover:bg-green-600 duration-300">Rejouer !</button>

                <router-link to="/" class="px-4 m-2 py-2 btn btn-dark rounded uppercase
                font-bold duration-300">Menu Principal</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--
      <div v-if="CalculateWinner" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h2 class="text-4xl font-bold mb-8">🍻Match nul !</h2>
                    <div class="mt-2">
                      <p class="fs-6 text-gray-500">Voulez vous rejouer une partie ?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button @click="ResetGame" class="px-4 m-2 py-2 btn btn-outline-dark focus:bg-green-600 rounded uppercase font-bold hover:bg-green-600 duration-300">Rejouer !</button>
                <router-link to="/" class="px-4 m-2 py-2 btn btn-dark rounded uppercase font-bold duration-300">Menu Principal</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      -->
      <router-link to="/" class="px-4 m-2 py-2 btn btn-dark rounded uppercase font-bold duration-300">Menu Principal</router-link>
      <Transition name="slide-fade">
      <button @click="ResetGame" v-if="show" class="px-4 m-2 py-2 btn btn-outline-dark rounded uppercase
      font-bold hover:bg-green-600 duration-300">Rejouer !</button>
      </Transition>
    </div>
  </div>

</template>

<script setup>
import { ref, computed } from 'vue'

const show = ref(false)

const player = ref('X')
const board = ref([
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
])


const CalculateWinner = (board) => {
  const lines = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
}

/// applatir les tableaux
const winner = computed(() => CalculateWinner(board.value.flat()))


const MakeMove = (x, y) => {
  show.value = true
  if (winner.value) return
  if (board.value[x][y]) return
  board.value[x][y] = player.value
  player.value = player.value === 'X' ? 'O' : 'X'
}


const ResetGame = () => {
  board.value = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  player.value = 'X'
  show.value = false
}


</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>