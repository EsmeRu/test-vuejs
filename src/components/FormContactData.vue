<template>
    <b-form class="row justify-content-end">
        <b-avatar src="https://placekitten.com/300/300" size="5rem" class="p-0"></b-avatar>
        <b-form-group id="group-contact-data" class="col-8 chat-text-area mx-3 py-3 rounded">
            <p class="text-start fw-bold">Datos de contacto</p>
            <b-form-input 
                v-model=email 
                placeholder="Correo Electrónico"
                type="email"
            ></b-form-input>
            <b-form-input 
                v-model=phone 
                placeholder="Teléfono celular"
                type="tel"
            ></b-form-input>
            <b-button variant="success" @click="showData()">Iniciar</b-button>
        </b-form-group>

    </b-form>

    <PrintData :data='infoData' v-if="show" idForm='2'/>
</template>

<script>
import { createUser } from '@/services/createUser'
import PrintData from './PrintData.vue'
import { mapState } from 'vuex'


export default {
    name: 'FormContactData',
    components:{
        PrintData
    },
    data() {
        return {
            email: "",
            phone: "",
            infoData: {},
            show: false
        }
    },
    computed:{
        ...mapState(['formData'])
    },
    methods: {
        showData() {
            if (this.email && this.phone) {
                this.show = true
                this.infoData = {
                    email: this.email, 
                    phone: this.phone,
                }
                this.sendData()
            }            
        },
        async sendData() {
            try {
                const formInfo = {
                    nombre: this.formData[0].name,
                    segundo_nombre: this.formData[0].secondName,
                    apellido_paterno: this.formData[0].lastName,
                    apellido_materno: this.formData[0].lastNameTwo,
                    fecha_nacimiento: `${this.formData[1].year}/${this.formData[1].month}/${this.formData[1].day}`,
                    email: this.formData[2].email,
                    telefono: this.formData[2].phone,
                }
                await createUser(formInfo)
            } catch (error) {
                console.log(error)
            }
        }
    },
}

</script>