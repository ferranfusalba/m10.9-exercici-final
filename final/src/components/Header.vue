<template>
  <div>
    <div>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
          <a class="navbar-brand">
            <img
              alt="Logo IT Academy"
              src="../assets/logoit.png"
              style="height: 40px"
            />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link class="nav-link text-light" to="/"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-light" to="/users"
                  >Users</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-light" to="/pictures"
                  >Pictures</router-link
                >
              </li>
            </ul>

            <form class="form-inline my-2 my-lg-0">
              <vue-typeahead-bootstrap
                v-model="input"
                :data="getUser"
                placeholder="Cerca un usuari"
                :serializer="(user) => user.name"
              >
              </vue-typeahead-bootstrap>
            </form>
          </div>
        </nav>
      </header>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import VueTypeaheadBootstrap from "vue-typeahead-bootstrap";

export default {
  name: "Header",
  components: {
    VueTypeaheadBootstrap,
  },
  methods: {
    ...mapMutations(["addInput", "removeInput"]),
  },
  computed: {
    ...mapGetters(["getUser"]),
    input: {
      get() {
        return this.$store.state.input;
      },
      set(value) {
        this.$store.commit("addInput", value);
      },
    },
  },
};
</script>