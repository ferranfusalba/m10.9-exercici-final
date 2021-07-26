<template>
  <div>
    <div class="row">
      <div class="col-2">
        <SlideInDown>
          <GoBack></GoBack>
        </SlideInDown>
      </div>
      <ZoomIn>
        <div class="col-8">
          <h1>Pictures in Album {{ $route.params.picture.albumId }}</h1>
          <br>
          <div class="row">
            <div class="col-4"></div>
            <div class="card picture col-4" v-for="photo in eachAlbum" :key="photo.id">
            
              <div class="card-body">
                <h5 class="card-title">{{ photo.title }}</h5>
                <div class="card-text">
                  <img :src="photo.thumbnailUrl" />
                </div>
              </div>
            
          </div>
            <div class="col-4"></div>
          </div>
          <h1 class="text-white">Final 1</h1>
          <h1 class="text-white">Final 2</h1>
        </div>
      </ZoomIn>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
import GoBack from "../components/GoBack";
import SlideInDown from "../components/Animations/SlideInDown.vue";
import ZoomIn from "../components/Animations/ZoomIn.vue";
import { mapState } from "vuex";

export default {
  name: "Album",
  components: {
    GoBack,
    SlideInDown,
    ZoomIn,
  },
  computed: {
    ...mapState(["pictures"]),
    eachAlbum() {
      let album = this.pictures;
      album = album.filter(
        (picture) => picture.albumId == this.$route.params.picture.albumId
      );
      return album;
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