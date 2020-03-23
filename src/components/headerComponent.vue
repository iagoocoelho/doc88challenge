<template>
  <div id="headerComponent">
    <div class="logoPastelDeIdeias"><img src="../assets/Logo.svg" alt=""></div>
  </div>
</template>

<script>

  export default {
    name: 'headerComponent',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #headerComponent {
    display: flex;
    height: 100%;
    width: 100%;
    background: transparent url(../assets/wave.svg) no-repeat padding-box;
    background-size: contain;
    
    .logoPastelDeIdeias {
      
      width: 100%;

      img {
        width: 100%;
        height: 28%;
        position: relative;
        top: 11%;
      }
    }

  }

</style>
