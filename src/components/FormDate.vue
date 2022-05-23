<template>
    <b-form @submit="onSubmit" class="row justify-content-end">
        <b-avatar src="https://placekitten.com/300/300" size="5rem" class="p-0"></b-avatar>
        <b-form-group id="group-date" class="col-8 chat-text-area mx-3 py-3 rounded">
            <p class="text-start fw-bold">¿Cuál es tu fecha de nacimiento?</p>
            <b-form-input
                v-model=day 
                placeholder="Día"
                required
                type="number"
            ></b-form-input>
            <b-form-input
                v-model=month 
                placeholder="Mes"
                required
                type="number"
            ></b-form-input>
            <b-form-input
                v-model=year 
                placeholder="Año"
                required
                type="number"
            ></b-form-input>
            <b-button variant="success" @click="showData()">Continuar</b-button>
        </b-form-group>
    </b-form>

    <PrintData :data='infoData' v-if="show" idForm='1'/>
    <FormContactData v-if="show"/>

</template>

<script>
import PrintData from './PrintData.vue'
import FormContactData from './FormContactData.vue'

export default {
    name: 'FormDate',
    components:{
        PrintData,
        FormContactData
    },
    data() {
        return {
            day: "",
            month: "",
            year: "",
            infoData: {},
            show: false
        }
    },
    methods: {
        showData() {
            if (this.day && this.month && this.year) {
                this.show = true
                this.infoData = {
                    day: this.day, 
                    month: this.month, 
                    year: this.year
                }
            }            
        },
    },
}
</script>