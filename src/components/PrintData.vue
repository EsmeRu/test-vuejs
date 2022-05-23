<template>
  <div class="d-flex justify-content-end" v-if="idForm != '2'">
    <div v-for="d in data" v-bind:key="d" class="data bg-color-blue" >
        <p class="py-3 m-0">{{d}}</p>
    </div>
  </div>
  <div class="d-flex justify-content-end" v-else>
    <div class="data-compleate bg-color-blue">
        <p class="m-0">Fecha de nacimiento: {{formData[1].day + '/' + formData[1].month + '/' + formData[1].year}}</p>
        <p class="m-0">Correo electrónico: {{formData[2].email}}</p>
        <p class="m-0">Teléfono celular: {{formData[2].phone}}</p>
        <p class="m-0">Nombre: {{formData[0].name + ' ' + formData[0].secondName + ' ' + formData[0].lastName + ' ' + formData[0].lastNameTwo}}</p>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    name: 'PrintData',
    props:{
        data: Object,
        idForm: String
    },
    computed:{
        ...mapState(['formData'])
    },
    methods:{
        ...mapActions(['actionUpdateFormData']),
    },
    created(){
        this.actionUpdateFormData(this.data)
    }
    
}

</script>

<style>
.bg-color-blue{
    background: #407FFF;
    color: white;
}
.data{
    float: left;
    padding-left: .1rem;
    margin: 1rem 0;
}
.data-compleate{
    text-align: start;
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 1rem 1rem 0 1rem;
    width: fit-content;
}
.data:first-child{
    padding-left: 1rem;
    border-radius: 1rem 0 0 1rem;
}
.data:last-child{
    padding-right: 1rem;
    border-radius: 0 1rem 0 0;
}

</style>