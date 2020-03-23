<template>
  <form id="forms" @submit="checkForm" action="/something">

    <p v-if="errors.length">
      <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
    </p>
    
    <div class="productGeneralInfo">
      <p>
        <label for="titulo"></label>
        <input
          id="titulo"
          v-model="titulo"
          type="text"
          name="titulo"
          placeholder="Título do pedido"
          :maxlength="max"
          :minlength="min">
      </p>

      <p>
        <label for="sabor"></label>
        <input
          id="sabor"
          v-model="sabor"
          type="text"
          name="sabor"
          placeholder="Sabor"
          :maxlength="max"
          :minlength="min">
      </p>

      <p>
        <label for="valor"></label>
        <input
          id="valor"
          v-model="valor"
          type="number"
          name="valor"
          min="1"
          placeholder="R$">
      </p>
    </div>
    
    <div class="productDescription">
      <p>
        <label for="descricao"></label>
        <input
          id="descricao"
          v-model="descricao"
          type="text"
          name="descricao"
          placeholder="Descrição">
      </p>
    </div>

    <div class="productImage">
      teste
    </div>
   
    <div class="placeButton">
      <p>
        <input
          class="eraseButton"
          type="submit"
          value="Limpar">
      </p>

      <p>
        <input
          class="submitButton"
          type="submit"
          value="Cadastrar">
      </p>
    </div>


  </form>

</template>

<script>

export default {
  name: 'forms',
  data () {
    return {
      errors: [],
      titulo: null,
      sabor: null,
      valor: null,
      descricao: null,
      max: 60,
      min: 3
    }
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.titulo) {
        this.errors.push('O título do pedido é obrigatório.');
      }
      if (!this.sabor) {
        this.errors.push('O sabor é obrigatório.');
      }
      if (!this.valor) {
        this.errors.push('O valor é obrigatório.');
      }
      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

form {
  position: relative;
  bottom: 35px;

  .productGeneralInfo {
    display: flex;

    p {
      flex: 2;
      padding: 0 20px;

      &:last-child {
        flex: 1;
        padding: 0 20px;
      }

      input {
        width: 100%;
        border: 1px solid #E43636;
        border-radius: 10px;
        height: 40px;
        font: 400 16px Roboto;
      }
    }
  }

  .productDescription {
    p {
      margin: 0 20px;

      input {
        width: 100%;
        border: 1px solid #E43636;
        border-radius: 10px;
        height: 40px;
        font: 400 16px Roboto;
      }
    }
  }

  .productImage {
    max-width: 1140px;
    height: 110px;
  }

  .placeButton {
    display: flex;
    place-content: center;

    p {
      margin: 0 35px;

      input {
        height: 60px;
        width: 200px;
        border-radius: 30px;
        font-weight: 900;
        font-size: 20px; 
        font-style: normal;
        text-transform: uppercase;
        letter-spacing: 0;
        font-family: 'Roboto', sans-serif;
      
        &.eraseButton {

          background: #E43636 0% 0% no-repeat padding-box;
          color: #FFFFFF;
        }

        &.submitButton {
        
          background: #FFCA00 0% 0% no-repeat padding-box;
          color: #A03400;
        }
      }
    }
  }
}

</style>