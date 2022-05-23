<template>
    <b-form class="row justify-content-end">
        <b-avatar src="https://placekitten.com/300/300" size="5rem" class="p-0"></b-avatar>
        <b-form-group id="group-name" class="col-8 chat-text-area mx-3 py-3 rounded">
            <p class="text-start fw-bold">¿Cuál es tu nombre?</p>
            <b-form-input 
                v-model=name 
                placeholder="Nombre"
                required
            ></b-form-input>
            <b-form-input 
                v-model=secondName 
                placeholder="Segundo nombre"
            ></b-form-input>
            <b-form-input 
                v-model=lastName 
                placeholder="Apellido paterno"
                required
            ></b-form-input>
            <b-form-input 
                v-model=lastNameTwo 
                placeholder="Apellido materno"
            ></b-form-input>
            <b-button variant="success" @click="showData()">Continuar</b-button>
        </b-form-group>
    </b-form>

    <PrintData :data='infoData' v-if="show" idForm='0'/>
    <FormDate v-if="show"/>

</template>

<script>
import PrintData from './PrintData.vue'
import FormDate from './FormDate.vue'

export default {
    name: 'FormName',
    components:{
        PrintData,
        FormDate,
    },
    data() {
        return {
            name: "",
            secondName: "",
            lastName: "",
            lastNameTwo: "",
            infoData: {},
            show: false
        }
    },
    methods: {
      showData() {
          if (this.name && this.lastName) {
              this.show = true
            this.infoData = {
                name: this.name, 
                secondName: this.secondName, 
                lastName: this.lastName, 
                lastNameTwo: this.lastNameTwo
            }
        }            
      },
    },
}
</script>