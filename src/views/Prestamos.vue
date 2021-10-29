<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <aside-menu />
      </v-col>
      <v-col cols="8">
        <div class="text-h5 text-center">Historial de Prestamos</div>
        <v-divider class="my-2"></v-divider>
        <listado-prestamos />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListadoPrestamos from "../components/prestamos/listadoPrestamos.vue";
import asideMenu from "../components/principal/asideMenu.vue";
export default {
  components: { asideMenu, ListadoPrestamos },
};
</script>

<style></style>
