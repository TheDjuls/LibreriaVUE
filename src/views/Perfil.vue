<template>
  <v-container>
    <v-btn color="primary" @click="$router.go(-1)"> Regresar </v-btn>
    <div class="text-h3 text-center">Tus Datos</div>
    <v-row class="mt-5">
      <v-col cols="12">
        <v-text-field
          v-model="usuario.nombre"
          label="Nombre"
          outlined
          readonly
        ></v-text-field>
        <v-text-field
          v-model="usuario.telefono"
          label="Telefono"
          outlined
          readonly
        ></v-text-field>
        <v-text-field
          v-model="usuario.correo"
          label="Correo"
          outlined
          readonly
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        esta parte demuestra la implementacion de vuex
        {{ count }}
        <v-btn @click="increment()">AUmentar</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "perfil",
  data: () => ({
    usuario: {},
  }),
  methods: {
    ...mapMutations(["increment"]),
    getUserById() {
      this.axios
        .get(`usuarios/${this.$session.get("id_usuario")}`)
        .then((response) => {
          this.usuario = response.data;
          this.usuario.nombre = `${this.usuario.nombre} ${this.usuario.ap_paterno} ${this.usuario.ap_materno}`;
        });
    },
  },
  computed: mapState(["count"]),
  mounted() {
    this.getUserById();
  },
};
</script>

<style>
</style>