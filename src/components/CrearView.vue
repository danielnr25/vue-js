<template>
<br>
   <div class="container">
      <div class="card">
         <div class="card-header">
            <strong>Agregar nuevo empleado</strong>
         </div>
         <div class="card-body">
            <form v-on:submit.prevent="agregarRegistro">
               <div class="form-group mb-3">
                 <label for="nombre" class="form-label">Nombre: </label>
                 <input type="text" placeholder="Nombre del empleado" class="form-control" required name="nombre" id="nombre" aria-describedby="helpId" v-model="empleado.nombre">
               </div>

               <div class="form-group mb-3">
                 <label for="apellido" class="form-label">Apellido: </label>
                 <input type="text" placeholder="Apellido del empleado" class="form-control" required name="apellido" id="apellido" aria-describedby="helpId" v-model="empleado.apellido">
               </div>
               <div class="form-group mb-3">
                 <label for="" class="form-label">Correo: </label>
                 <input type="email" placeholder="Correo del empleado" class="form-control" required name="correo" id="correo" aria-describedby="helpId" v-model="empleado.correo">
               </div>
            <div class="btn-group" role="group">
                  <button type="submit" class="btn btn-success">Agregar</button>
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
   methods:{
      agregarRegistro(){
         console.log(this.empleado);

         //visualizar la entrada de datos
         var datosEnviar={nombre:this.empleado.nombre,apellido:this.empleado.apellido,correo:this.empleado.correo}
            fetch('http://localhost/empleados/?insertar=1',{
                  method:"POST", //enviar datos
                  body:JSON.stringify(datosEnviar) //transformar los datos 
               })
               .then(response=>response.json())
               .then((dataResponse=>{
                  console.log(dataResponse);
                  window.location.href='listar' 
               }))
               .catch(console.log);
      }
   }

}
</script>