<template>
  <div id="resultComponent">
    <div class="resultTittle"><span>Veja como será apresentado ao cliente</span></div>
    <div class="resultContent">
      <div class="resultInfo">
        <div class="resultImage"></div>

        <h3>"Titulo do pedido"</h3>

        <span>
          <h4>Sabor:</h4>
          <p>Teste</p>
        </span>

        <span>
          <h4>Descrição:</h4>
          <p>Teste</p>
        </span>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resultComponent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#resultComponent {
  max-width: 1070px;
  margin: 0 auto;

  .resultTittle {
    height: 1px;
    background-color: #E43636 ;
    text-align: center;
    margin: 100px 0;
    
      span {
        background-color: #ffffff;
        position: relative;
        top: -0.7em;
        padding: 0 10px;
      }
  }

  .resultContent {
  display: flex;
  margin-bottom: 50px;

    .resultInfo {
      width: 100%;
      height: 221px;
      box-shadow: 0px 0px 30px #740B0B45;
      border-radius: 20px;
      position: relative;

      .resultImage {
        align-self: center;
        display: block;
        position: absolute;
        width: 180px;
        height: 100%;
        left: -120px;
        float: left;

        background: transparent url(../assets/pastel-img.png) no-repeat padding-box;
        background-position: center;
      }

      h3 {
        background-color: #E43636;
        border-radius: 20px 20px 0px 0px;
        padding: 20px 110px;
        margin-bottom: 16px;
      }
      span {
        display: flex;

        h4 {
          margin: 15px 0;
          padding-left: 110px;
          place-self: center;
        
        }

        p {
          font: 400 24px Roboto;
          letter-spacing: 0;
          color: #A03400;
          padding: 0 10px;
          margin: 16px 0;
        }

        &:last-child h4, &:last-child p {
          margin: 0;
        }
      }
    }
  }
}
</style>
