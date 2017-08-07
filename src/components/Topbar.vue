<template>
    <div id="topbar">
        <div class="h1">topbar</div>
        <span>{{ user }}</span>
        <a class="button primary" href="#" @click.prevent="signUpDialogVisible = true">注册</a>
        <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
          <SignUpForm @success="login($event)"/>
        </MyDialog>
        <a class="button" href="#">登录</a>
        <div class="button">
            <el-button type="primary"> &nbsp&nbsp保存&nbsp&nbsp</el-button>
            <el-button type="primary"> &nbsp&nbsp预览&nbsp&nbsp </el-button>
        </div>
    </div>
</template>

<script>
import MyDialog from './MyDialog'
import SignUpForm from './SignUpForm'
export default {
    name: 'Topbar',
    data(){
        return {
        signUpDialogVisible: false
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    components: {
        MyDialog, SignUpForm
    },
    mothods: {
        login(user) {
            this.signUpDialogVisible = false
            this.$store.commit('setUser', user)
        }
    }
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





