<template>
  <q-page>
    <div class="" style="height: 100vh">
      <q-img src="~assets/home_cover.png" fit="cover" style="height: 100%">
        <div class="absolute-full text-subtitle2 flex flex-center home_bg">
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <h2>“The Unicorn is About to Take Off”</h2>
              <p>
                Come, dive into our world that’ll build you to embrace your
                tech-dreams and to sprout your wings.
              </p>
              <q-btn color="purple">Join Now</q-btn>
            </div>
          </div>
        </div>
      </q-img>
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
</style>
