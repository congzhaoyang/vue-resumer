<template>
    <div class=page>
      <header>
        <Topbar/>
      </header>
      <main>
        <ResumeEditor/>
        <ResumePreview/>
      </main>
    </div>
</template>

<script>
import './assets/normalize.css'
import './assets/reset.css'
import Topbar from './components/Topbar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'
import icons from './assets/icons'
import store from './store/index'

export default {
  name: 'app',
  /*
  data: function () {
    return {
      text: 'hello vue'
    }
  },
  */
  store,
  components: {
    Topbar, ResumeEditor, ResumePreview
  },
  created () {
    document.body.insertAdjacentHTML('afterbegin', icons)
    let state = localStorage.getItem('state')
    if(state){
      state = JSON.parse(state) 
    }
    this.$store.commit('initState', state)
  }
}
</script>

<style lang="scss">
body {
  background: #EDEDED;
}

svg.icon{
    height: 1em;
    width: 1em;
    fill: currentColor;
    vertical-align: -0.1em;
    font-size:16px;
}


.page {
  background: #EDEDED;
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 1220px;
  margin: 0 auto;
  header {
    height: 64px;
    margin-top: 16px;
    #topbar {
      height: 100%;
      margin-bottom: 8px;
      margin-bottom: 12px;
    }
  }
  main {
    flex-grow: 1;
    width: 1220px;
    margin: 0;
    display: flex;
    justify-content: space-around;
    overflow: auto;
    #resumeEditor {
      width: 36%;
      background: white;
      margin: 16px 8px 16px 0;
    }
    #resumePreview {
      width: 64%;
      background: white;
      margin: 16px 0 16px 8px;
    }
  }
}
</style>
