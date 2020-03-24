<template>
  <div id="app">
    <headerComponent/>
    <insertComponent/>
    <resultComponent/>
  </div>
</template>

<script>
import headerComponent from './components/headerComponent.vue'
import insertComponent from './components/insertComponent.vue'
import resultComponent from './components/resultComponent.vue'

export default {
  name: 'App',
  components: {
    headerComponent,
    insertComponent,
    resultComponent
  }
}
</script>

<style lang="scss">
#app {
  max-width: 1920px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  background: transparent url(./assets/wave.svg) no-repeat padding-box;
  background-size: contain;

  h4, .resultTittle span {
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

  p input::placeholder, .switchButtonOptions {
    letter-spacing: 0;
    color: #A03400;
    padding: 5px 10px;
    font-family: 'Roboto', sans-serif;
  }
}
</style>
