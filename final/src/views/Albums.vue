<template>
  <div class="pictures">
    <div class="row">
      <SlideInDown>
        <div class="col-2">
          <GoBack></GoBack>
        </div>
      </SlideInDown>
      <SlideInLeft>
        <div class="col-8">
          <h1>Albums</h1>
          <br />
          <div class="row">
            <div class="col-4"></div>
            <div
              class="card picture col-4"
              v-for="picture in albumsFinal"
              :key="picture.id"
            >
              <div class="card-body">
                <h5 class="card-title">{{ picture.albumId }}</h5>
                <router-link
                  :to="{
                    name: 'Album',
                    params: { id: picture.albumId, picture: picture },
                  }"
                >
                  <button
                    class="btn btn-warning"
                    @click="$store.commit('increment', picture)"
                  >
                    Accedir a l'àlbum
                  </button>
                </router-link>
              </div>
            </div>
            <div class="col-4"></div>
          </div>
          <h1 class="text-white">Final 1</h1>
          <h1 class="text-white">Final 2</h1>
        </div>
      </SlideInLeft>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
import SlideInLeft from "../components/Animations/SlideInLeft.vue";
import SlideInDown from "../components/Animations/SlideInDown.vue";
import GoBack from "@/components/GoBack";
import { mapState } from "vuex";

export default {
  name: "Pictures",
  components: {
    GoBack,
    SlideInLeft,
    SlideInDown,
  },
  computed: {
    ...mapState(["pictures"]),
    albumsFinal() {
      let albums = this.pictures;
      albums = albums.reduce((acc, album) => {
        return { ...acc, [album.albumId]: album };
      }, {});
      return albums;
    },
  },
};
</script>

<style scoped>
.text-white {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>