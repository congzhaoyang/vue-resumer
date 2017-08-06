<template>
  <div id="resumePreview">
      {{resume}}
  </div>
</template>

<script>
export default {
    name: 'ResumePreview',
    computed: {
        resume(){
        return this.$store.state.resume
        }
    }
}
</script>

<style lang="scss">
    #resumePreview {
        border-radius: 4px;
    }
</style>

