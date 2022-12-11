<template>
  <q-page>
    <div class="" style="height: 100vh">
      <q-img src="~assets/home_cover.png" fit="cover" style="height: 100%">
        <div class="absolute-full text-subtitle2 flex flex-center home_bg">
          <div class="row main-row">
            <div class="col-md-6 col-sm-12">
              <h2 class="q-mb-md"><b>“The Unicorn is About to Take Off”</b></h2>
              <h6 class="q-my-sm" style="font-size: 26px">
                Come, dive into our world that’ll build you to embrace your
                tech-dreams and to sprout your wings.
              </h6>
              <q-btn color="primary">Join Now</q-btn>
            </div>
          </div>
        </div>
      </q-img>
      <q-img
        src="~assets/pattern.png"
        fit="contain"
        style="
          position: absolute;
          bottom: 0;
          right: 0;
          max-width: 700px;
          width: 100%;
          height: 429.8px;
        "
      ></q-img>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
<style scoped>
.home_bg {
  background-color: rgba(11, 14, 41, 0.72);
}

.main-row {
  max-width: 1200px;
  width: 100%;
}
</style>
