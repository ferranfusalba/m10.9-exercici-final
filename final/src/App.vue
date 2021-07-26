<template>
  <div id="app">
    <Header></Header>
    <div class="row mt-4"></div>
    <div class="row mt-4"></div>
    <div class="row mt-4"></div>
    <div class="row mt-4"></div>
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <div v-if="getInput.length > 0">
          <div
            v-for="user in getUser"
            :key="user.id"
            class="border m-2 p-2 border-muted rounded mx-auto"
          >
            <h3>{{ user.name }}</h3>
            <br />
            <router-link
              v-if="users"
              :to="{ name: 'User', params: { id: user.id, user: user } }"
            >
              <button
                class="btn btn-warning"
                @click="$store.commit('increment', user)"
              >
                Pàgina del client
              </button>
            </router-link>
          </div>
        </div>
        <div
          v-if="getUser.length == 0 && getInput.length > 0"
          class="container alert alert-danger"
          role="alert"
        >
          Ho sentim, no s'ha trobat l'usuari
        </div>
        <router-view v-if="getInput.length == 0" />
      </div>
      <div class="col-2"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    Header,
    Footer,
  },
  computed: {
    ...mapGetters(["getInput", "getUser", "users"]),
  },
  methods: {
    ...mapMutations(["INCREMENT"]),
  },
  mounted() {
    this.$store.dispatch("getUsers");
    this.$store.dispatch("getPictures");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
