<template>
  <div id="app">
    <headerComponent/>
    <insertComponent/>
  </div>
</template>

<script>
import headerComponent from './components/headerComponent.vue'
import insertComponent from './components/insertComponent.vue'

export default {
  name: 'App',
  components: {
    headerComponent,
    insertComponent
  }
}
</script>

<style lang="scss">
#app {
  max-width: 1920px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  background: url(./assets/wave.svg) ,radial-gradient(closest-side at 50% 50%, #FFFFFF 0%, #FFFFFF 67%, #FFFFFF00 100%) 0% 0% no-repeat, url(./assets/pattern.png);
  background-repeat: no-repeat, 
    no-repeat,
    repeat;
  background-size: contain,
  cover,
  auto;

  h4, .resultDivision span {
    font-family: 'Roboto', sans-serif;
    font: 700 24px Roboto;
    font-style: italic;
    letter-spacing: 0;
    color: #A03400;
    margin: 0;
    padding: 0;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    font: 700 30px Roboto;
    font-style: italic;
    letter-spacing: 0;
    color: #FFCA00;
    margin: 0;
    padding: 0;
  }

  input::placeholder, .switchButtonOptions, .uploadText {
    letter-spacing: 0;
    color: #A03400;
    padding: 5px 10px;
    font-family: 'Roboto', sans-serif;
  }
  .alertError {
    letter-spacing: 0;
    color: #ec0000;
    font-family: 'Roboto', sans-serif;
  }
}
</style>
