<template>
  <div id="resumeEditor">
      <nav>
          <ol>
              <li class="active"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
          </ol>
      </nav>
      <ol class="panels">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li></li>
          <li></li>
          <li></li>
      </ol>
  </div>
</template>

<script>
export default {
  name: 'ResumeEditor',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
    #resumeEditor {
        border-radius: 4px;
        nav {
            width: 80px;
            height: 100%;
            color: white;
            ol {
                width: 100%;
                height: 100%;
                display: flex;
                flex-flow: column nowrap;
                justify-content: space-around;
                li {
                    border: 1px solid white;
                    height: (1/7)*100%;
                    background: #ddd;
                    &.active {
                        background: white;
                    }
                }

            }
        }
    }
</style>




