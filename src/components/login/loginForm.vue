<template>
  <v-container>
    <h2 class="text-center primary--text">Libreria</h2>
    <div class="d-flex align-center">
      <v-col cols="12">
        <v-tabs v-model="tab">
          <v-tab> Iniciar Sesión </v-tab>
          <v-tab> Registrar </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            
          
       

        <div id="contenedor">
          <h1 class="ml-2">Iniciar Sesión</h1>
          <blockquote class="ml-2">Introduzca sus credenciales</blockquote>
          <v-form>
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="usuario"
                    outlined
                    label="Correo"
                    prepend-inner-icon="mdi-account"
                  ></v-text-field>

                  <v-text-field
                    v-model="contrasenia"
                    outlined
                    prepend-inner-icon="mdi-lock"
                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPass ? 'text' : 'password'"
                    label="Password"
                    @click:append="showPass = !showPass"
                  ></v-text-field>

                  <p class="text-right">
                    <a href="">no recuerda su contraseña?</a>
                  </p>

                  <v-btn block color="primary" elevation="2" @click="loginUsuario()"
                    >Entrar</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </div>
        </v-tab-item>
        <v-tab-item>
            <div id="contenedor">
          <h1 class="ml-2">Registrar</h1>
          <blockquote class="ml-2">Introduzca sus datos</blockquote>
          <v-form>
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="registro.nombre"
                    outlined
                    label="nombre"
                    
                  ></v-text-field>

                  <v-text-field
                    v-model="registro.ap_paterno"
                    outlined
                    label="apellido paterno"
                  ></v-text-field>

                  <v-text-field
                    v-model="registro.ap_materno"
                    outlined
                    label="apellido materno"
                  ></v-text-field>

                  <v-text-field
                    v-model="registro.telefono"
                    outlined
                    label="telefono"
                  ></v-text-field>

                  <v-text-field
                    v-model="registro.correo"
                    outlined
                    label="correo"
                  ></v-text-field>

                  <v-text-field
                    v-model="registro.password"
                    outlined
                    prepend-inner-icon="mdi-lock"
                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPass ? 'text' : 'password'"
                    label="Password"
                    @click:append="showPass = !showPass"
                  ></v-text-field>


                  <v-btn block color="primary" elevation="2" @click="registrarUsuario()"
                    >Registrar</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </div>
        </v-tab-item>
         </v-tabs-items>
      </v-col>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    showPass: false,
    password: "Password",
    usuario: "",
    contrasenia: "",
    registro:{},
    tab: null,
  }),
  methods:{
      registrarUsuario(){
          this.axios.post("usuarios/save",this.registro).then((response)=>{
              if(response){
                  this.registro={}
                  alert("Registro exitoso")
              }
          }).catch(function (error) {
              console.log(error)
              alert("Ha ocurrido un error , puede que el correo ya ha sido registrado")
          })
      },

      loginUsuario(){
          this.axios.post("usuarios/auth",{
              correo:this.usuario,
              password:this.contrasenia
          }).then((response)=>{
              console.log(response)
              const datos = response.data
              //guardar sesion
                this.$session.set("id_usuario",datos.id_usuario)
                this.$session.set("nombre",`${datos.nombre} ${datos.ap_paterno} ${datos.ap_materno}`)
              //redirigi al inicio
            this.$router.push({name:'Principal'})

          }).catch(function (error) {
              console.log(error)
              alert("Ha ocurrido un error , credenciales incorrectas")
          })
      }
  }
};
</script>

<style></style>
