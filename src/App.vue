<template>
  <div id="app">
    <p>{{ text }}</p>
    <Topbar/>
    <ResumeEditor/>
    <ResumePreview/>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'
export default {
  name: 'app',
  data: function () {
    return {
      text: 'hello vue'
    }
  },
  components: {
    Topbar, ResumeEditor, ResumePreview
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  p {
    background: #ddd;
  }
}
</style>
