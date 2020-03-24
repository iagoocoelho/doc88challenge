<template>
  <div id="resultComponent">
    <div class="resultDivision"><span>Veja como será apresentado ao cliente</span></div>
    <div class="resultContent">
      <div class="resultInfo">
        
        <span class="resultHeader">
          <h3>"Titulo do pedido"</h3>
          <p>R$ 00,00</p>
        </span>
        

        <div class="resultImage"></div>

        <span>
          <h4>Sabor:</h4>
          <p>01 234 567 89012 3456789 012345 67890 1234 567 89012 345 67890123456789</p>
        </span>

        <span>
          <h4>Descrição:</h4>
          <p>01 234567 89012 3456789 012345 67890 1234 56 789012 345 67890123456789</p>
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

  .resultDivision {
    height: 1px;
    background-color: #E43636 ;
    text-align: center;
    margin: 50px 0;
    
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
    max-width: 60%;
    margin: 50px auto;

    .resultInfo {
      width: 100%;
      height: 100%;
      box-shadow: 0px 0px 30px #740B0B45;
      border-radius: 20px;
      position: relative;

      .resultHeader {
          background-color: #E43636;
          border-radius: 20px 20px 0px 0px;
          margin-bottom: 16px;

          h3 {
            align-self: center;
            width: 70%;
            padding-left: 110px;
          }

          p {
            width: 30%;
            text-align: right;
            font: 700 26px Roboto;
            font-style: italic;
            color: #ffffff;
            padding-right: 30px;
            align-self: center;
          }
      }



      .resultImage {
        position: absolute;
        width: 180px;
        height: 100%;
        left: -120px;
        float: left;
        top: 0;
        background: transparent url(../assets/pastel-img.png) no-repeat padding-box;
        background-position: center;
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
      }
    }
  }

  // MEDIA QUERY -------------------------------------------------------------------
  @include laptop {
    .resultContent {
      max-width: 70%;

      .resultInfo {

        .resultHeader {

          h3 {
            font: 700 24px Roboto;
            padding: 20px 0 20px 20px;
            margin-bottom: 0;
            text-align: center;
          }
        }

        .resultImage {
          position: initial;
          height: 180px;
        }

        span {

          h4 {
            padding-left: 20px;
            font: 700 20px Roboto;
          }

          p {
            font: 400 20px Roboto;
          }
        }
      }
    }
  }

  @include tablet {

    .resultContent {
      max-width: 75%;

      .resultInfo {

        .resultHeader {

          h3 {
            font: 700 24px Roboto;
            padding: 20px;
            text-align: center;
            margin-bottom: 0;
          }
        }

        .resultImage {
          position: initial;
          height: 180px;
          float: none;
          margin: 0 auto;
        }

        span {

          h4 {
            padding-left: 20px;
            font: 700 20px Roboto;
          }

          p {
            font: 400 18px Roboto;
          }
        }
      }
    }
  }
}
</style>
