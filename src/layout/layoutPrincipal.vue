<template>
  <div>
    <v-app>
      <v-app-bar app color="primary" dark :key="reload">
        <v-app-bar-title > Libreria </v-app-bar-title>
        <v-spacer></v-spacer>

        <v-btn :to="{name:'Login'}" text v-if="!$session.exists()">Iniciar Sesión</v-btn>
        <div class="text-h6" v-else v-html="$session.get('nombre')"></div>
    
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark icon v-bind="attrs" v-on="on">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>

          <v-list v-if="$session.exists()">
              <v-list-item :to="{name:'Perfil'}">
              <v-list-item-title>Mi Perfil</v-list-item-title>
            </v-list-item>
            <v-list-item @click="cerrarSession()">
              <v-list-item-title>Cerrar Sesión</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <v-main>
         <router-view/>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
    name:"layoutPrincipal",
    data:()=>({
        reload:0
    }),
    methods:{
        cerrarSession(){
            this.$session.destroy()
            this.reload++
        }
    }
};
</script>

<style></style>
