<template>
  <div id="headerComponent">
    <div class="logoPastelDeIdeias"><img src="../assets/Logo.svg" alt=""></div>
    <div class="pasteisImg"><img src="../assets/pasteis-img.png" alt=""></div>
    <div class="pastelParalax"><img src="../assets/pastel-paralax.png" alt=""></div>
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
  width: 100%;

  .logoPastelDeIdeias {
    margin: 0 30%;

    img {
      width: 100%;
      margin: 5% 0 3% 0;
    }
  }

  .pasteisImg {
    
    position: relative;
    right: 370px;
    bottom: 168px;
    z-index: 0;

    img {
      float: right;
      width: 13%;
      height: 392px;
    }
  }

  .pastelParalax {

    position: absolute;
    left: 130px;
    top: 20px;
    z-index: 2;
    // width: 100%;

    img {
      width: 25%;
      height: 100%;
    }
  }

  // MEDIA QUERY -------------------------------------------------------------------
  @include laptop {
    .pasteisImg {
      right: 150px;
      bottom: 150px;
    }
  }

  @include tablet {

  }
}

</style>
