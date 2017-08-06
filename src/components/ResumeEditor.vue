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
                    {{resume[item.field]}}
                </li>   
            </ol>
    </div>
</template>

<script>
export default {
  name: 'ResumeEditor',
  data () {
    return {
        selected: 'profile',
        resume: {
            config: [
                { field: 'profile', icon: 'id' },
                { field: 'work history', icon: 'work' },
                { field: 'education', icon: 'book' },
                { field: 'projects', icon: 'heart' },
                { field: 'awards', icon: 'cup' },
                { field: 'contacts', icon: 'phone' },
            ],
            profile: {
                name: '',
                city: '',
                title: ''
            },
            'work history': [],
            education: [],
            projects: [],
            awards: [],
            contacts: [],
        }
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
        ol {
            li {
                list-style: none;
            }
        }
    }
</style>




