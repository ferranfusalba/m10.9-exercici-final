<template>
  <div>
    <div class="row">
      <SlideInDown>
        <div class="col-2">
          <GoBack></GoBack>
        </div>
      </SlideInDown>
      <SlideInLeft>
        <div class="col-8">
          <h1>Users</h1>
          <br />
          <div class="row">
            <div class="col-4"></div>
            <div class="card user col-4" v-for="user in users" :key="user.id">
              <div class="card-body">
                <h5 class="card-title">{{ user.name }}</h5>
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
            <div class="col-4"></div>
          </div>
        </div>
      </SlideInLeft>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import GoBack from "../components/GoBack";
import SlideInLeft from "../components/Animations/SlideInLeft.vue";
import SlideInDown from "../components/Animations/SlideInDown.vue";

export default {
  components: {
    GoBack,
    SlideInLeft,
    SlideInDown,
  },
  methods: {
    ...mapMutations(["increment"]),
  },
  computed: {
    ...mapGetters(["users"]),
  },
  filters: {
    UpperCase(value) {
      return value.toUpperCase();
    },
  },
};
</script>