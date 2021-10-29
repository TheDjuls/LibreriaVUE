<template>
  <div>
    <div v-for="item in generos" :key="item.id + 'g'">
      <div class="text-h6 text-center">{{ item.nombre }}</div>
      <v-slide-group
        v-model="model"
        class="pa-4"
        active-class="success"
        show-arrows
      >
        <v-slide-item v-for="item in libros" :key="item.id_libro + 'l'">
          <v-card class="ma-4 d-flex align-end flex-column" max-width="200px">
            <v-img :src="item.portada" width="200px"> </v-img>
            <v-card-text>
              <div v-html="item.nombre"></div>
            </v-card-text>
            <v-card-actions class="mt-auto">
              <v-spacer></v-spacer>

              <v-btn icon :to="{ name: 'detalleLibro', params: { id: item.id_libro } }">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
              <v-btn @click="agendarLibro(item.id_libro)" icon>
                <v-icon>mdi-book</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </div>
  </div>
</template>

<script>
const generos = [
  { id: 1, nombre: "Principal" },
  { id: 2, nombre: "Comedias" },
];
export default {
  data: () => ({
    model: null,
    libros: [],
    generos,
  }),
  methods: {
    getLibros() {
      this.axios.get("libros/All").then((response) => {
        this.libros = response.data;
        this.libros = this.libros.filter((item)=>{
            if(item.prestado==0){
                return item
            }
        })
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
              this.getLibros()
            }
          })
          .catch((error) => {
            console.log(error);
            alert("Ha ocurrido un error al solicitar el libro, puede que haya superado el numero maximo de libros prestados (MAX:3), si es el caso , devuelva 1");
          });
      }else{
          alert("Debe iniciar sesión para solicitar el libro")
      }
    },
  },
  mounted() {
    this.getLibros();
  },
};
</script>

<style></style>
