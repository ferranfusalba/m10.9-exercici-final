<template>
  <div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <div class="row">
          <SlideInLeft>
            <div class="col-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Users consulted</h5>
                  <hr />
                  <div class="card-text">
                    <div v-for="user in usersConsulted" :key="user.id">
                      <p class="text-left">
                        {{ user.name }} - {{ user.counter }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SlideInLeft>
          <SlideInRight>
            <div class="col-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Albums consulted</h5>
                  <hr />
                  <div class="card-text">
                    <p
                      class="text-left"
                      v-for="picture in albumsConsulted"
                      :key="picture.id"
                    >
                      album id: <b>{{picture.albumId}}</b> - {{picture.counter}} times
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SlideInRight>
        </div>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SlideInLeft from "../components/Animations/SlideInLeft.vue";
import SlideInRight from "../components/Animations/SlideInRight.vue";

export default {
  name: "Home",
    components: {
    SlideInLeft,
    SlideInRight,
  },
  computed: {
    ...mapGetters(["usersConsulted", "albumsConsulted"]),
  },
};
</script>