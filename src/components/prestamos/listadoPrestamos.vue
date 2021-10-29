<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="prestamos"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:[`item.esActivo`]="{ item }">
        <v-chip v-if="item.esActivo" color="warning" outlined>
          Prestado
        </v-chip>
        <v-chip v-else color="success" outlined>Devuelto</v-chip>
      </template>

      <template v-slot:[`item.opciones`]="{ item }">
        <v-btn v-if="item.esActivo" outlined @click="devolverLibro(item.id_libro)" color="success">Devolver</v-btn>
      </template>

    </v-data-table>
  </div>
</template>

<script>
const headers = [
  { text: "Nombre", align: "start", value: "nombre" },
  { text: "Activo", align: "start", value: "esActivo" },
  { text: "Opciones", align: "center", value: "opciones" },
];

export default {
  name: "listadoPrestamos",
  data: () => ({
    prestamos: [],
    headers,
  }),
  methods: {
    getPrestamos() {
      this.axios
        .get(`prestamos/${this.$session.get("id_usuario")}`)
        .then((response) => {
          this.prestamos = response.data;
        });
    },
    devolverLibro(idLibro) {
        this.axios.delete(`prestamos/${this.$session.get("id_usuario")}/${idLibro}`).then((response)=>{
            if(response){
                alert("libro devuelto exitosamente")
                this.getPrestamos()
            }
        })
    }
  },
  mounted() {
    this.getPrestamos();
  },
};
</script>

<style></style>
