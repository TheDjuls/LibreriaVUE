<template>
  <div>
    <v-container>
      <v-btn color="primary" @click="$router.go(-1)"> Regresar </v-btn>
      <v-row class="mt-5">
        <v-col cols="4">
          <v-img
            lazy-src="https://via.placeholder.com/260X390/"
            max-height="90%"
            max-width="100%"
            src="https://via.placeholder.com/260X390/"
          ></v-img>
        </v-col>
        <v-col cols="4">
          <div class="titulo text-h3 primary--text" v-html="libro.nombre"></div>
          <div class="titulo text-h5">Año: {{ libro.anio }}</div>
          <div class="text text-h6">Sinopsis</div>
          <p v-html="libro.sinopsis"></p>
        </v-col>
        <v-col cols="4">
          <v-btn
            class="d-block mx-auto"
            color="primary"
            @click="agendarLibro(libro.id_libro)"
          >
            <v-icon>mdi-book</v-icon> Solicita Prestamo</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "detalleLibro",
  data: () => ({
    libro: {},
  }),
  methods: {
    getBookById(idLibro) {
      this.axios.get(`libros/${idLibro}`).then((response) => {
        this.libro = response.data;
      });
    },
    agendarLibro(libro) {
      if (this.$session.exists()) {
        this.axios
          .post("prestamos/save", {
            libro: libro,
            usuario: this.$session.get("id_usuario"),
          })
          .then((response) => {
            if (response) {
              alert("Prestamo Realizado");
              this.$router.push({name:'Principal'})
            }
          })
          .catch((error) => {
            console.log(error);
            alert(
              "Ha ocurrido un error al solicitar el libro, puede que haya superado el numero maximo de libros prestados (MAX:3), si es el caso , devuelva 1"
            );
          });
      } else {
        alert("Debe iniciar sesión para solicitar el libro");
      }
    },
  },
  mounted() {
    this.getBookById(this.$route.params.id);
  },
};
</script>

<style></style>
