<template>
    <div id="topbar">
        <div class="h1">topbar</div>
        <div class="button">
            <el-button type="primary"> &nbsp&nbsp保存&nbsp&nbsp</el-button>
            <el-button type="primary"> &nbsp&nbsp预览&nbsp&nbsp </el-button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Topbar'
}
</script>

<style scoped lang="scss">
#topbar {
    width: 1220px;
    background: white;
    line-height: 64px;
    border-radius: 4px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    .h1 {
        width: 100px;
    }
    .button {
        margin-right: 20px;
        width: 166px;
    }
}
</style>





