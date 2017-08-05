<template>
  <div class="page">
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
body {
  background: #EDEDED;
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
    #resumeEditor {
      display: inline-block;
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
