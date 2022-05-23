<template>
  <b-card class="chat-container">
    <div class="top-container d-flex justify-content-evenly py-5">
        <div class="text-start fw-bold">
            <h1 class="pb-3">Formulario de contacto</h1>
            <p><i class="fa-solid fa-timer"></i>En menos de 5 minutos.</p>
        </div>
        <i class="fa-solid fa-id-card-clip"></i>
    </div>
    <FormName/>
  </b-card>
</template>

<script>
import FormName from './FormName.vue'

import {createUser} from '../services/createUser'
export default {
  name: 'Chat',
  components: {
    FormName,
  },
  methods: {
    clickBtn: () => {
      createUser({});
    }
  }
}
</script>

<style>
  .chat-container{
    width: 600px;
    height: 700px;
    margin: 0 auto;
    overflow: hidden auto;
    border-radius: 1rem !important;
box-shadow: 17px 13px 50px -3px rgba(0,0,0,0.1);
  }
  .top-container{
        background: #407FFF;
        color: white;
        margin: -1rem -1rem 3rem;
    }
  input{
      margin: 1rem 0 !important;
      padding: 1rem 1rem !important;
  }
  .chat-text-area{
      background-color: beige;
  }
  .fa-id-card-clip{
      font-size: 4rem;
  }
</style>
