<template>

  <div id="switchButton" class="switch-button-control">
    <span class="switchButtonOptions">Comida</span>
    <div class="switch-button" :class="{ enabled: isEnabled }" v-on:click="productType">
      <div class="button"></div>
    </div>
    <span class="switchButtonOptions">Bebida</span>
  </div>

</template>

<script>

export default {
  name: 'switchButton',
  data () {
    return {
      isEnabled: false
    }
    
  },
  methods: {
    productType: function () {
      this.isEnabled = !this.isEnabled
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.switch-button-control {
  display: flex;
  flex-direction: row;
  align-items: center;
  
  .switch-button {
    
    height: 1.0em;
    width: 3em;
    box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.33);
    border-radius: 1.5em;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    background-color: #ffffff;

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

</style>