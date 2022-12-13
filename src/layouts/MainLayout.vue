<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-transparent">
      <q-toolbar style="position: absolute; top: 0">
        <q-img
          class="q-ml-lg"
          src="~assets/logo.png"
          style="height: 70px; width: 200px"
          fit="contain"
        ></q-img>

        <q-space></q-space>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="dialog = true"
        />

        <!-- <q-toolbar-title> Quasar App </q-toolbar-title> -->

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

  <div>
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-left"
      transition-hide="slide-right"
    >
      <q-card class="bg-secondary text-white">
        <div class="row q-mx-xl">
          <q-img
            class="q-ma-lg"
            src="~assets/logo.png"
            style="height: 70px; width: 200px"
            fit="contain"
          ></q-img>
          <q-space />
          <q-icon name="icon"></q-icon>
          <q-btn class="q-ma-lg" dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </div>

        <q-card-section>
          <div class="row">
            <div class="col-md-6 col-sm-12 q-mx-xl">
              <h4 class="cursor-pointer">About</h4>
              <h4 class="cursor-pointer">Blog</h4>
              <h4 class="cursor-pointer">Programs</h4>
              <h4 class="cursor-pointer">Opportunities</h4>
            </div>
          </div>
        </q-card-section>

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
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    // EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      dialog: ref(false),
      maximizedToggle: ref(true),
    };
  },
});
</script>
