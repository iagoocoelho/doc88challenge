<template>
  <div id="headerComponent">
    <div class="logoPastelDeIdeias"><img src="../assets/Logo.svg" alt=""></div>
    <div class="pasteisImg"></div>
    <div class="pastelParalax"></div>
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
    position: relative;
    left: -60px;

    img {
      width: 100%;
      margin: 5% 0 3% 0;
    }
  }

  .pasteisImg {
    
    position: relative;
    top: -167px;
    left: -18%;
    width: 19%;
    height: 312px;
    z-index: 0;
    float: right;

    background: transparent url(../assets/pasteis-img.png) no-repeat padding-box;
    background-size: contain;
    background-position-y: center;
  }

  .pastelParalax {

    height: 555px;
    width: 29%;
    float: left;
    position: absolute;
    z-index: 3;
    top: 34px;
    left: 3%;

    background: transparent url(../assets/pastel-paralax.png) no-repeat;
    background-size: contain;
  }

  // MEDIA QUERY -------------------------------------------------------------------
  @include laptop {
    .pasteisImg {
      width: 15%;
    }

    .pastelParalax {
      width: 25%;
      top: 53px;
      left: 1%;
    }
  }

  @include tablet {
    .logoPastelDeIdeias {
      left: 0;
    }

    .pasteisImg {
      width: 12%;
      left: -17%;
      top: -161px;
    }
    
    .pastelParalax {
      width: 29%;
      left: -2%;
      top: 36px;
    }
  }
}

</style>
