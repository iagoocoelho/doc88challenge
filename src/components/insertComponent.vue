<template>

  <div>
    <!--                                     INSERT INFORMATION                               -->
    <div id="insertComponent">
      
      <div class="headerInsert">
        <h4>Monte aqui o seu cardápio. O que está esperando?</h4>
        <div id="switchButton" class="switch-button-control">
          <span class="switchButtonOptions">Comida</span>

          <div class="switch-button" :class="{ isEnabled: isEnabled }" v-on:click="productType">
            <div class="button"></div>
          </div>

          <span class="switchButtonOptions">Bebida</span>
        </div>
      </div>

      <!--                                        FORMS                                      -->

      <div id="forms">

          <div class="productGeneralInfo">
            <div class="inputContainer">
              <input
                id="titulo"
                v-model="titulo"
                type="text"
                name="titulo"
                placeholder="Título do pedido"
                :maxlength="this.max"
                :minlength="this.min"
              >
              <div class="errorsContainer" v-show="!this.errors.errorTitulo">
                  <span class="alertError" v-for="error in errors" v-bind:key="error.errorTitulo">{{ error.errorTitulo }}</span>
              </div>
            </div>
              
            <div class="inputContainer">
              <input
                id="sabor"
                v-model="sabor"
                type="text"
                name="sabor"
                placeholder="Sabor"
                :maxlength="this.max"
                :minlength="this.min"
              >
              <div class="errorsContainer" v-show="!this.errors.errorSabor">
                  <span class="alertError" v-for="error in errors" v-bind:key="error.errorSabor">{{ error.errorSabor }}</span>
              </div>
            </div>

            <div class="inputContainer">
              <input
                id="valor"
                v-model="valor"
                type="number"
                name="valor"
                min="1"
                placeholder="R$"
              >
              <div class="errorsContainer" v-show="!this.errors.errorValor">
                  <span class="alertError" v-for="error in errors" v-bind:key="error.errorValor">{{ error.errorValor }}</span>
              </div>
            </div>
          </div>

          <div class="productDescription">
              <input
                id="descricao"
                v-model="descricao"
                type="text"
                name="descricao"
                placeholder="Descrição"
              >
          </div>

          <div class="productImage">
            <div class="rokka-uploader upload">

              <table class="imagePreview" v-if="files.length">
                <tr v-for="file in files" :key="file.id">
                  <td class="remove">
                    <button
                      type="button"
                      class="removeButton"
                      @click.prevent="removeImage(file)"
                    >
                      x
                    </button>
                  </td>

                  <td class="thumb" @click="$emit('image-clicked', file, 'thumb')">
                    <img
                      v-if="file.thumb"
                      :src="file.thumb"
                    />
                    <span v-else>No Image</span>
                  </td>

                  <td v-if="file.error" @click="$emit('image-clicked', file, 'message')">
                    {{ file.error }}
                  </td>
                </tr>
              </table>

              <div v-show="$refs.upload && $refs.upload.dropActive" class="drop-active">
                <h3>Drop files to upload</h3>
              </div>

              <div class="rokka-upload-component">
                <vue-upload-component
                  ref="upload"
                  v-model="files"
                  :custom-action="customAction"
                  class="rokka-fileupload"
                  :multiple="true"
                  :drop="true"
                  :drop-directory="true"
                  :thread="3"
                  @input-filter="inputFilter"
                  @input-file="inputFile"
                >
                  <slot>
                    <i class="material-icons" style="font-size:48px;">file_upload</i>
                    <p>Jogue aqui o arquivo de imagem ou clique para localizar a pasta.</p>
                  </slot>
                </vue-upload-component>
              </div>
            </div>
          </div>
              
          <div class="placeButton">

              <input
                class="eraseButton"
                type="button"
                value="Limpar"
                v-on:click="onErase"
              >

              <input
                class="submitButton"
                type="button"
                value="Cadastrar"
                v-on:click="onSubmit"
              >

          </div>
      </div>

    </div>

    <!--                                      RESULT INFORMATION                               -->
    <div id="resultComponent">

      <div class="resultDivision" v-show="this.errors.length == 0">
          <span>Veja como será apresentado ao cliente</span>
      </div>

      <div class="resultContent">


        <div class="resultInfo" v-for="value in this.cardapio" :key="value.productType">
          <template v-if="value.productType == false">
            <span class="resultHeader">
              <h3> {{ value.titulo }}</h3>
              <p>R$ {{ value.valor }}</p>
            </span>

            <div class="resultImage">
              <img class="imageBox" :src="value.image" alt="">
            </div>

            <span>
              <h4>Sabor:</h4>
              <p>{{ value.sabor }}</p>
            </span>

            <span>
              <h4>Descrição:</h4>
              <p>{{ value.descricao }}</p>
            </span>
          </template>
          
          <template v-else>
            <span class="resultHeader">
              <h3> {{ value.titulo }}</h3>
              <p>R$ {{ value.valor }}</p>
            </span>

            <div class="resultImage">
              <img class="imageBox" :src="value.image" alt="">
            </div>

            <span>
              <h4>Sabor:</h4>
              <p>{{ value.sabor }}</p>
            </span>

            <span>
              <h4>Descrição:</h4>
              <p>{{ value.descricao }}</p>
            </span>
          </template>


        </div>

      </div>

    </div>

  </div>

</template>

<script>

import VueUploadComponent from 'vue-upload-component'
import rokka from 'rokka'

export default {
  name: 'insertComponent',
  components: {
    VueUploadComponent
  },
  data () {
    return {
      errors: [true],
      titulo: null,
      sabor: null,
      valor: null,
      descricao: null,
      max: 60,
      min: 3,
      cardapio: [],
      isEnabled: false,
      files: [],
      active: false,
      uploaded: false,
      foodImageStandard: '/img/pastel-img.b830d06c.png',
      drinkStandardImage: '/img/bebida-img.12a2afa8.jpg'
    }
  },
  methods: {
    checkForm: function () {
      this.errors = [];

      if (!this.titulo) {
        this.errors.push(
          {
            errorTitulo: 'O título do pedido é obrigatório.'
          }
        );
      }
      if (!this.sabor) {
        this.errors.push(
          {
            errorSabor: 'O sabor é obrigatório.'
          }
        );
      }
      if (!this.valor) {
        this.errors.push(
          {
            errorValor: 'O valor é obrigatório.'
          }
        );
      }
      if (this.checkMinLength(this.titulo)) {
        this.errors.push(
          {
            errorTitulo: 'É necessário no mínimo 3 caracteres'
          }
        );
      }
      if (this.checkMinLength(this.sabor)) {
        this.errors.push(
          {
            errorSabor: 'É necessário no mínimo 3 caracteres'
          }
        );
      }
    },

    checkMinLength: function (inputName) {
      
      if ( inputName == null) {
        return false
      } 
      if (inputName.length <= 2) {
        return true
      }
      if (inputName.length >= 3) {
        return false
      }
    },
    catchInputValue: function() {

      if (this.isEnabled == false) {
        if(this.files[0] == undefined){
          this.cardapio.unshift(
            {
              titulo: this.titulo,
              sabor: this.sabor,
              valor: this.valor,
              descricao: this.descricao,
              productType: false,
              image: this.foodImageStandard
            }
          );
        } else {
          this.cardapio.unshift(
            {
              titulo: this.titulo,
              sabor: this.sabor,
              valor: this.valor,
              descricao: this.descricao,
              productType: false,
              image: this.files[0].thumb
            }
          );
        }

      } else {

        if (this.files[0] == undefined) {
          this.cardapio.unshift(
            {
              titulo: this.titulo,
              sabor: this.sabor,
              valor: this.valor,
              descricao: this.descricao,
              productType: true,
              image: this.drinkStandardImage
            }
          );
        } else {
          this.cardapio.unshift(
            {
              titulo: this.titulo,
              sabor: this.sabor,
              valor: this.valor,
              descricao: this.descricao,
              productType: true,
              image: this.files[0].thumb
            }
          );
        }
      }
    },

    onSubmit: function () {

      if (!this.titulo == false && !this.sabor == false && !this.valor == false) {
        
        if (this.checkMinLength(this.titulo) == false && this.checkMinLength(this.sabor) == false && this.files) {
          this.catchInputValue();
          this.errors = [];
        } else {
          this.checkForm();
        }
      } else if (!this.titulo == false || !this.sabor == false || !this.valor == false) {
          this.checkForm();

      } else {
          this.checkForm();
        }
    },

    onErase: function () {
      this.cardapio = [];
      this.errors = [true];
      this.titulo = null;
      this.sabor = null;
      this.valor = null;
      this.descricao = null;
      this.files = [];
    },

    productType: function () {
      this.isEnabled= !this.isEnabled;
    },

    // ---------------------------------- METHODS UPLOADER ---------------------

    customAction(file) {
      const rokkaC = rokka({
        apiKey: this.rokkaKey,
      })
      let metadata = {}
      if (this.imageMetadata) {
        metadata = this.imageMetadata(file)
      }
      const request = rokkaC.sourceimages
        .create(this.rokkaOrg, file.name, file.file, metadata)
        .then(resp => {
          return resp
        })
        .catch(err => {
          if (err.body && err.body.error && err.body.error.message) {
            const message = err.body.error.message
            if (message.includes('Invalid image format')) {
              throw 'Error: ' +
                message.replace(/(Invalid image format [a-z/]+).*/, '$1')
            }
            throw 'Error: ' + err.body.error.message
          }
          throw err
        })
      if (this.appendPromise) {
        return this.appendPromise(request, file)
      }
      return request
    },
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Before adding a file
        // Filter system files or hide files
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent()
        }
      }
      if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
        // Create a blob field
        newFile.blob = ''
        let URL = window.URL || window.webkitURL
        if (URL && URL.createObjectURL) {
          newFile.blob = URL.createObjectURL(newFile.file)
        }
        // Thumbnails
        newFile.thumb = ''
        if (newFile.blob && newFile.type.substr(0, 6) === 'image/') {
          newFile.thumb = newFile.blob
        }
      }
      this.$emit('input-filter', newFile, oldFile, prevent)
    },
    inputFile(a, b) {
      this.$emit('input-file', a, b)
    },
    formatSize(size) {
      if (size > 1024 * 1024 * 1024 * 1024) {
        return (size / 1024 / 1024 / 1024 / 1024).toFixed(2) + ' TB'
      } else if (size > 1024 * 1024 * 1024) {
        return (size / 1024 / 1024 / 1024).toFixed(2) + ' GB'
      } else if (size > 1024 * 1024) {
        return (size / 1024 / 1024).toFixed(2) + ' MB'
      } else if (size > 1024) {
        return (size / 1024).toFixed(2) + ' KB'
      }
      return size.toString() + ' B'
    },
    removeImage(file) {
      this.$refs.upload.remove(file)
    },
  },
  watch: {
    files() {
      if (this.active !== this.$refs.upload.active) {
        this.active = this.$refs.upload.active
        this.$emit('uploading', this.active)
      }
      if (this.uploaded !== this.$refs.upload.uploaded) {
        this.uploaded = this.$refs.upload.uploaded
        this.$emit('uploaded', this.uploaded)
      }
    },
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#insertComponent {
  width: 62%;
  margin: 0 auto;
  box-shadow: 0px 0px 30px #740B0B45;
  border-radius: 20px;
  background-color: #ffffff;

  .headerInsert {

    display: flex;
    background-color: #FFCA00;
    border-radius: 20px 20px 0px 0px;
    padding: 0 50px;
    height: 93px;
    position: relative;
    z-index: 2;

    h4 {
      flex: 2;
      align-self: center;
    }

    .switch-button-control {
      display: flex;
      flex-direction: row;
      align-items: center;
  
      @include laptop {
        .switchButtonOptions {
          font-size: 14px;
        }
      }

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

        &.isEnabled {
        
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

  // MEDIA QUERY HEADER INSERT -------------------------------------------------------------------

  @include laptop {
    width: 70%;

    .headerInsert {
      padding: 0 20px;

      h4 {
        font: 700 14px Roboto;
        margin: 0;
      }
    }
  }

  @include tablet {
    width: 75%;

    .headerInsert {
        padding: 15px 30px;
        display: block;
        height: auto;

      h4 {
        font: 700 18px Roboto;
        text-align: center;
        padding: 15px 0;
      }

      .switch-button-control {
        place-content: center;
      }
    }
  }

  #forms {
    position: relative;
    bottom: 35px;
    position: relative;
    z-index: 3;

    .productGeneralInfo {
      margin: 15px 20px;
      display: flex;

      .inputContainer{
        display: flex;
        flex-grow: 10;
        flex-direction: column;
        margin-right: 20px;

          &:last-child {
            flex-grow: 0;
            margin-right: 0;
            
            input {
                width: 70px;
            }
          }

        input {
          padding: 0 20px;
          border: 1px solid #E43636;
          border-radius: 10px;
          height: 40px;
          font: 400 16px Roboto;
        }

        .errorsContainer {
          margin-top: 5px;
        }
      }
    }

    .productDescription {
      margin: 0 20px;

      input {
        width: 100%;
        padding: 0 20px;
        border: 1px solid #E43636;
        border-radius: 10px;
        height: 40px;
        font: 400 16px Roboto;
        box-sizing: border-box;
      }
    }

    .productImage {
      max-width: 1140px;
      margin: 20px;
      border: 1px solid #E43636;
      border-radius: 10px;

      .rokka-uploader /deep/ .drop-active {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        position: fixed;
        z-index: 9999;
        opacity: 0.6;
        text-align: center;
        background: #000;
      }
      
      .rokka-uploader .thumb img {
        max-width: 50%;
        margin-left: auto;
        margin-right: auto;
        display: block;
      }

      .rokka-uploader {
        margin: 20px;
        
        .imagePreview {
          width: 100%;
        }

      }

      .rokka-uploader .button,
      .rokka-uploader .rokka-fileupload {
        background-color: transparent;
        display: inline-block;
        vertical-align: middle;
        font-size: 16px;
        color: #A03400;
        width: 100%;
      }

      .rokka-uploader .drop-active h3 {
        margin: -0.5em 0 0;
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        font-size: 40px;
        color: #fff;
        padding: 0;
      }

      .rokka-uploader .removeButton {
        background-color: transparent;
        border: 0;
        color: black;
        cursor: pointer;
        font-size: 30px;
        position: relative;
        top: -38px;
        left: 140px;
      }
    }

    .placeButton {
      display: flex;
      place-content: center;

      input {
        margin: 0 35px;
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

    // MEDIA QUERY FORMS-------------------------------------------------------------------

    @include laptop {
      .productGeneralInfo{
        flex-direction: column;	

        .inputContainer{
          margin-bottom: 20px;
          margin-right: 0;

          &:last-child {
            margin-bottom: 0;

            input {
                width: auto;
            }
          }
        }
      }
    }

    @include tablet {
      bottom: 0px;

      .productGeneralInfo {
        flex-direction: column;

        .inputContainer {
          margin-bottom: 10px;
          margin-right: 0;

          &:last-child {
              margin-bottom: 0;

            input {
              width: auto;
            }
          }
        }
      }

      .productImage {

        .rokka-uploader  {

          .imagePreview tr td {

            button.removeButton {
            top: -30px;
            left: -10px;
          }
            img{
              max-width: 100%;
            }
          }
        }
      }

      .placeButton {
        padding-bottom: 18px;
        flex-direction: column;
        align-items: center;

        input {
          margin: 15px 35px;
        }
      }
    }
  }

}



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
    flex-direction: column;
    margin-bottom: 50px;
    max-width: 60%;
    margin: 50px auto;

    .resultInfo {
      width: 100%;
      height: 100%;
      box-shadow: 0px 0px 30px #740B0B45;
      border-radius: 20px;
      position: relative;
      margin: 20px 0;
      background-color: #ffffff;

      .resultHeader {
        background-color: #E43636;
        border-radius: 20px 20px 0px 0px;
        margin-bottom: 16px;

        h3 {
          align-self: center;
          width: 70%;
          padding-left: 110px;
          text-transform: capitalize;
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
        height: 150px;
        left: -120px;
        float: left;
        top: 0;
        
        .imageBox {
          width: 100%;
          height: 100%;
          background-color: transparent;
          position: relative;
          top: 30px;
        }
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

           .imageBox {
             position: initial;
           }
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

          .imageBox {
            position: initial;
          }
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
