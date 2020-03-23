<template>
  <div id="insertComponent">
    <div class="headerInsert">
      <h4>Monte aqui o seu cardápio. O que está esperando?</h4>
      <switchButton />
    </div>

    <forms />
  </div>

</template>

<script>

import switchButton from './subComponents/switchButton.vue'
import forms from './subComponents/forms.vue'

export default {
  name: 'insertComponent',
  components: {
    switchButton,
    forms
  }
}
</script>

  

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#insertComponent {
  max-width: 1180px;
  margin: 0 auto;
  box-shadow: 0px 0px 30px #740B0B45;
  border-radius: 20px;

  .headerInsert {

    display: flex;
    background-color: #FFCA00;
    border-radius: 20px 20px 0px 0px;
    padding: 0 50px;
    height: 93px;

    h4 {
      flex: 2;
      align-self: center;
      margin: 0 60px;
    }

    .switch-button-control {

      .switch-button {
        
        height: 1.0em;
        width: 3em;
        box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.33);
        border-radius: 1.5em;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        .button {
          height: 1.5em;
          width: 1.5em;
          border-radius: 1.5em;
          background: #E33535;
          transition: all 0.3s ease-in-out;
          position: relative;
          bottom: 4px;
        }

        &.enabled {
        
          .button {
            background: #E33535;
            transform: translateX(1.5em);
          }
        }
      }
      .switch-button-label {
        margin-left: 10px;
      }
    }
  }
}
</style>
