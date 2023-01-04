<template>
<br>
  <div class="container">
      <div class="card">
         <div class="card-header">
            <strong>Modificar Empleado</strong>
         </div>
         <div class="card-body">
            <form v-on:submit.prevent="modificarRegistro">
               <div class="form-group mb-3">
                 <label for="nombre" class="form-label">Nombre: </label>
                 <input type="text" class="form-control" required name="nombre" id="nombre" aria-describedby="helpId" v-model="empleado.nombre">
               </div>

               <div class="form-group mb-3">
                 <label for="apellido" class="form-label">Apellido: </label>
                 <input type="text" class="form-control" required name="apellido" id="apellido" aria-describedby="helpId" v-model="empleado.apellido">
               </div>

               <div class="form-group mb-3">
                 <label for="" class="form-label">Correo: </label>
                 <input type="email" class="form-control" required name="correo" id="correo" aria-describedby="helpId" v-model="empleado.correo">
               </div>
               
               <div class="btn-group" role="group">
                  <button type="submit" class="btn btn-success">Modificar</button>
                  <router-link :to="{name:'listar'}" class="btn btn-warning">Cancelar</router-link>
               </div>
            </form>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   data(){
      return{
         empleado:{}
      }
   },
   created: function(){
      this.obtenerInformacionID();      
   },
   methods:{
      obtenerInformacionID(){
          fetch('http://localhost/empleados/?consultar='+this.$route.params.id)
         .then(response=>response.json())
         .then((dataResponse)=>{
            console.log(dataResponse)
            this.empleados=dataResponse[0];

         })
         .catch(console.log)
      },
      modificarRegistro(){
         var datosEnviar ={nombre:this.empleado.nombre,apellido:this.empleado.apellido,correo:this.empleado.correo}
            fetch('http://localhost/empleados/?actualizar='+this.$route.params.id,{
               method:"POST", //enviar datos
               body:JSON.stringify(datosEnviar) //transformar los datos 
            })
            .then(response=>response.json())
            .then((dataResponse=>{
               console.log(dataResponse);
               window.location.href="../listar"
            }))
         }
   }
}
</script>