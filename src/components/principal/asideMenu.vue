<template>
  <div>
    <v-list two-line subheader>
      <v-subheader>General</v-subheader>

      <v-list-item :to="{name:'Principal'}" exact>
        <v-list-item-content>
          <v-list-item-title>Libros Disponibles</v-list-item-title>
          <v-list-item-subtitle
            >Listado de Libros disponibles</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-list-item :to="{name:'Prestamos'}" exact>
        <v-list-item-content>
          <v-list-item-title>Mis Prestamos</v-list-item-title>
          <v-list-item-subtitle
            >Listado de Prestamos</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
    name:"asideMenu"
};
</script>

<style></style>
