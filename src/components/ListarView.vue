<template>
<br>
   <div class="container">
      <div class="card">
         <div class="card-header">
            <strong>Lista de Empleados</strong>
         </div>
         <div class="card-body">
            <table class="table table-hover">
               <thead class="table-warning">
                  <tr>
                     <th>ID</th>
                     <th>Nombre</th>
                     <th>Apellido</th>
                     <th>Correo</th>
                     <th>Acciones</th>
                  </tr>
               </thead>
               <tbody class="table-secondary">
                  <tr v-for="empleado in empleados" :key="empleado.id">
                     <td>{{empleado.id}}</td>
                     <td>{{empleado.nombre}}</td>
                     <td>{{empleado.apellido}}</td>
                     <td>{{empleado.correo}}</td>
                     <td>
                        <div class="btn-group" role="group" aria-label="Basic example">
                           <router-link :to="{name:'editar',params:{id:empleado.id}}" class="btn btn-info">Editar</router-link>
                            <button type="button" v-on:click="borrarEmpleado(empleado.id)" class="btn btn-danger">Delete</button>
                        </div>
                     </td>
                  </tr>
               </tbody>
            </table>  
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data(){
      //contiene un arreglo para poder mostrar los empleados 
      return{
         empleados:[]
      }
   },
   created: function(){
      //consultar empleados
      this.consultarEmployees();
   },
   methods:{
      consultarEmployees(){
         fetch('http://localhost/empleados/')
         //envía datos en formato json
         .then(response=>response.json())
         //imprimir en consola 
         .then((dataResponse)=>{
            //validar 
            console.log(dataResponse)
            this.empleados=[]
            if (typeof dataResponse[0].success==='undefined') {
               this.empleados=dataResponse;
            }
         })
         .catch(console.log)
      },
      borrarEmpleado(id){
         console.log(id);
         fetch('http://localhost/empleados/?borrar='+id)
         .then(response=>response.json())
         .then((dataResponse)=>{
            console.log(dataResponse)
            window.location.href="listar"
         })
         .catch(console.log)

      }

   }
}
</script>