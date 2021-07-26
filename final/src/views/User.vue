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
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ $route.params.user.name }}</h5>
              <div class="card-text">
                  <br>
                <p><b>Username: </b>{{ $route.params.user.username }}</p>
                <p><b>Email: </b>{{ $route.params.user.email }}</p>
                <p><b>Phone: </b>{{ $route.params.user.phone }}</p>
                <p><b>Website: </b>{{ $route.params.user.website }}</p>
                <p><b>City: </b>{{ $route.params.user.address.city }}</p>
                <p><b>Company: </b>{{ $route.params.user.company.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </ZoomIn>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
import GoBack from "@/components/GoBack";
import ZoomIn from "../components/Animations/ZoomIn.vue";
import SlideInDown from "../components/Animations/SlideInDown.vue";

export default {
  name: "User",
  components: {
    GoBack,
    ZoomIn,
    SlideInDown,
  },
};
</script>