<template>
    <div id="resumeEditor">
            <nav>
                <ol>
                    <li v-for="(item, index) in resume.config" :class="{active: item.field === selected}" @click="selected = item.field">
                        {{ null }}
                        <svg class="icon">
                            <use :xlink:href="`#icon-${item.icon}`"></use>
                        </svg>
                    </li>
                </ol>
            </nav>
            <ol class="panels">
                <li v-for="item in resume.config" v-show="item.field === selected">
                        <div v-if="resume[item.field] instanceof Array">
                            <div class="subitem" v-for="subitem in resume[item.field]">
                                <div class="resumeField" v-for="(value,key) in subitem">
                                    <!-- 
                                    <label> {{key}} </label>
                                    <input type="text" :value="value">
                                    -->
                                    <el-input class="inputer" placeholder="请输入内容" :value="value">
                                        <template class="input-helper" slot="prepend">{{key}}</template>
                                    </el-input>
                                </div>
                            </div>
                        </div>
                        <div v-else class="resumeField" v-for="(value, key) in resume[item.field]">
                            <!--
                            <label> {{key}} </label>
                            -->
                            <!--
                            <input type="text" v-model="resume[item.field][key]">
                            -->
                            <el-input class="inputer" placeholder="请输入内容" :value="value" @input="changeResumeField(item.field, key, $event.target.value)">
                                <template class="input-helper" slot="prepend">{{key}}</template>
                            </el-input>
                        </div>
                </li>   
            </ol>
    </div>
</template>

<script>
export default {
  name: 'ResumeEditor',
    computed: {
        selected: {
            get() {
                return this.$store.state.selected
            },
            set(value) {
                return this.$store.commit('switchTab', value)
            }
        },
        resume() {
            return this.$store.state.resume
        }
    },
    methods: {
    changeResumeField(field, subfield, value){
        this.$store.commit('updateResume',{
          field,
          subfield,
          value
        })
      }
    }
}
</script>

<style scoped lang="scss">
    #resumeEditor {
        border-radius: 4px;
        display: flex;
        box-sizing: content-box;
        overflow: hidden;
        nav {
            width: 16%;
            height: 100%;
            color: white;
            ol {
                width: 100%;
                height: 100%;
                display: flex;
                flex-flow: column nowrap;
                justify-content: flex-start;
                background: black;
                li {
                    height: 60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    svg.icon{
                        width: 24px;
                        height: 24px;
                    }
                    &.active {
                        background: #324057;
                    }
                }

            }
        }
        .panels {
            width: 80%;
            flex-grow: 1;
            li {
                list-style: none;
                width: 80%;
                margin: 0 auto;
            }
        }
    }
.resumeField{
    .inputer {
        margin: 10px auto;
    }
}
</style>




