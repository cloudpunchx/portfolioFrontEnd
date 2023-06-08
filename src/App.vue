<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
html{
  background-color: #F7F4EA;
}
</style>

<!-- documentation, layout v-app v-main -->
<!-- https://v2.vuetifyjs.com/en/features/layouts/#usage -->
