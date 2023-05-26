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
  background-color: rgb(42, 84, 121);
}
</style>

<!-- documentation, layout v-app v-main -->
<!-- https://v2.vuetifyjs.com/en/features/layouts/#usage -->
