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
              <q-btn color="primary"><b>Join Now</b></q-btn>
            </div>

            <q-img
              src="~assets/pattern.png"
              fit="contain"
              class="lt-md"
              style="
                max-width: 700px;
                width: 100%;
                max-height: 429.8px;
                height: 100%;
              "
            ></q-img>
          </div>
        </div>
      </q-img>
      <q-img
        src="~assets/pattern.png"
        fit="contain"
        class="gt-sm"
        style="
          position: absolute;
          bottom: 0;
          right: 0;
          max-width: 700px;
          width: 100%;
          height: 429.8px;
        "
      ></q-img>

      <div
        class="row"
        style="position: absolute; bottom: 0; left: 0; width: 100%"
      >
        <div class="col-md-6 gt-sm">
          <q-tabs
            v-model="tab"
            inline-label
            :breakpoint="0"
            align="justify"
            class="bg-transparent text-white"
          >
            <q-tab name="contact" label="Contact" />
            <q-tab name="alarms" label="FAQs" />
            <q-tab v-if="$q.screen.gt.sm" name="movies" label="Campus" />
            <q-tab v-if="$q.screen.gt.sm" name="photos" label="Opportunities" />
            <q-btn-dropdown
              v-if="$q.screen.lt.md"
              auto-close
              stretch
              flat
              label="More..."
            >
              <q-list>
                <q-item clickable @click="tab = 'movies'">
                  <q-item-section>Movies</q-item-section>
                </q-item>

                <q-item clickable @click="tab = 'photos'">
                  <q-item-section>Photos</q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </q-tabs>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",

  setup() {
    return {
      tab: ref("mails"),
    };
  },
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
