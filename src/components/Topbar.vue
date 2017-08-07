<template>
    <div id="topbar">
        <div class="wrapper">
            <span class="logo">resumer</span>
            <div class="actions">
                <div v-if="logined" class="userActions">
                    <span>你好，{{user.username}}</span>
                    <a class="button" href="#" @click.prevent="signOut">登出</a>
                    <el-button type="primary"@click.prevent="signOut"> &nbsp&nbsp登出&nbsp&nbsp</el-button>
                </div>
                <div v-else class="userActions">
                    <a class="button primary" hrefd="#" @click.prevent="signUpDialogVisible = true">注册</a>
                    <el-button type="primary" @click.prevent="signUpDialogVisible = true"> &nbsp&nbsp注册&nbsp&nbsp</el-button>
                    <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
                        <SignUpForm @success="signIn($event)"/>
                    </MyDialog>
                    <a class="button" href="#">登录</a>
                    <el-button type="primary"> &nbsp&nbsp登录&nbsp&nbsp</el-button>
                </div>
                <div class="element-button">
                    <el-button type="primary"> &nbsp&nbsp保存&nbsp&nbsp</el-button>
                    <el-button type="primary"> &nbsp&nbsp预览&nbsp&nbsp </el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyDialog from './MyDialog'
import SignUpForm from './SignUpForm'
import AV from '../lib/leancloud'
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
        },
        logind() {
            return this.user.id
        }
    },
    components: {
        MyDialog, SignUpForm
    },
    mothods: {
        signOut(user) {
            AV.user.logOut()
            this.$store.commit('removeUser')
        },
        signIn(user) {
            this.signUpDialogVisible = false
            this.$store.commit('setUser', user)
        }
    }
}
</script>

<style scoped lang="scss">
#topbar {
    height: 64px;
    width: 1220px;
    .wrapper {
        border: 1px solid red;
        width: 100%;
        display: flex;
        justify-content: space-around;
        .logo {
            display: block;
            width: 10%;
            border: 1px solid blue;
            height: 64px;
            line-height: 64px;
        }
        .actions {
            .user-action {
                display: flex;
                align-items: center;
            }
            border: 1px solid purple;
            display: flex;
            justify-content: space-between;
            width: 90%;
            height: 64px;
            .element-button {
                margin-right: 20px;
                width: 166px;
                border: 1px solid green;
                display: flex;
                align-items: center;
            }
        }
    }
}
</style>





