<template lang="">
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else :class="{green: correctAnswer === 1, red: correctAnswer === 2}">

    <h1>
        ¿Quién es este pokémon?
    </h1>

    <!--img-->
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <!--opciones-->
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />


    <template v-if="showAnswer">

      <h2 class="fade-in" >{{message}}</h2>
      <button @click="newGame" >
        Nuevo Juego
      </button>

    </template>
  </div>
</template>


<script>
import PokemonPicture from "../components/PokemonPicture.vue";
import PokemonOptions from "../components/PokemonOptions.vue";

import getPokemonOptions from "@/helpers/getPokemonOptions.js";

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
      correctAnswer: null,
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();

      const rndInt = Math.floor(Math.random() * 4);

      this.pokemon = this.pokemonArr[rndInt];

      console.log(this.pokemon);
    },
    checkAnswer(selectedId) {
      this.showPokemon = true;
      this.showAnswer = true;

      /* this.pokemon.id === selectedId
        ? (this.message = `Correcto, el pokemon es ${this.pokemon.name.toUpperCase()}`)
        : (this.message = `Lo siento, el pokemon es ${this.pokemon.name.toUpperCase()}`); */

      if (this.pokemon.id === selectedId) {
        this.message = `Correcto, el pokemon es ${this.pokemon.name.toUpperCase()}`;
        this.correctAnswer = 1;
      } else {
        this.message = `Lo siento, el pokemon es ${this.pokemon.name.toUpperCase()}`;
        this.correctAnswer = 2;
      }
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.pokemon = null;
      this.mixPokemonArray();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>


<style scoped>
.red {
  background-color: red;
}
.green {
  background-color: green;
}
</style>