<template>
 <v-container>
   <v-row>
     <v-col cols="4">
       <aside-menu />
     </v-col>
     <v-col cols="8">
       <div class="text-h5 text-center"> Descubre Libros</div>
       <v-divider class="my-2"></v-divider>
       <listado-libros />
     </v-col>
   </v-row>
 </v-container>
</template>

<script>
import asideMenu from '../components/principal/asideMenu.vue'
import ListadoLibros from '../components/principal/listadoLibros.vue'

export default {
  components: { asideMenu, ListadoLibros },
  name: 'Principal'
}
</script>
