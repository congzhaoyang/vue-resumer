<template>
  <div id="resumeEditor">
        <nav>
            <ol>
        <li v-for="(item,index) in resume.visibleItems" 
            :class="{active: item === selected}"
            @click="selected = item"
            >
          {{index}}
        </li>
            </ol>
        </nav>
        <ol class="panels">
     <li v-for="item in resume.visibleItems" v-show="item === selected">
        {{resume[item]}}
      </li>     
        </ol>
  </div>
</template>

<script>
export default {
  name: 'ResumeEditor',
  data () {
    return {
        selected: 'bio',
        resume: {
            visibleItems: ['bio', 'work history', 'education', 'projects', 'awards', 'contacts', 'others'],
            bio: {
                name: '',
                city: '',
                title: ''
            },
            'work history': [],
            education: [],
            projects: [],
            awards: [],
            contacts: [],
            others: [] 
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
        ol {
            li {
                list-style: none;
            }
        }
    }
</style>




