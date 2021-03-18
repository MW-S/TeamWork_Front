<template>
  <div class="app-container" style="padding: 20px 400px;">
    <el-form ref="teamForm" :model="teamForm" :rules="teamRules" autocomplete="on" label-position="left" label-width="100px">
      <el-form-item prop="name" label="项目名称 :">
        <el-input
          ref="name"
          v-model="teamForm.name"
          placeholder="name"
          name="name"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <el-form-item prop="type" label="项目类型 :">
        <el-input
          ref="type"
          v-model="teamForm.type"
          type="text"
          tabindex="2"
          autocomplete="on"
          placeholder="type"
          name="type"
        />
      </el-form-item>
      <el-form-item prop="descript" label="项目简述 :">
        <el-input
          ref="descript"
          v-model="teamForm.descript"
          type="textarea"
          tabindex="3"
          autocomplete="on"
          placeholder="descript"
          name="descript"
        />
      </el-form-item>
      <el-form-item style="text-align: center;">
        <el-button type="primary" @click="createData()">添加</el-button>
      </el-form-item>

    </el-form>

  </div>
</template>

<script>
import { updateProject, createProject, delProject } from '@/api/project'
export default {
  name: 'CreateProject',
  data() {
    const validateName = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The name can not be less than 3 digits'))
      } else {
        callback()
      }
    }
    return {
      teamForm: {
        name: '',
        type: '',
        descript: ''

      },
      teamRules: {
        name: [{ required: true, trigger: 'blur', validate: validateName }],
        type: [{ required: true, trigger: 'blur' }],
        descript: [{ required: false, trigger: 'blur' }]
      },
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined
    }
  },
  watch: {
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.teamForm.name === '') {
      this.$refs.name.focus()
    } else if (this.teamForm.type === '') {
      this.$refs.type.focus()
    } else if (this.teamForm.descript === '') {
      this.$refs.descript.focus()
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    createData() {
      this.$refs.teamForm.validate((valid) => {
        if (valid) {
          // this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
          // this.temp.author = 'vue-element-admin'
          createProject(this.teamForm).then(() => {
            // this.list.unshift(this.teamForm)
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Created Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleAddTeam() {
      this.$refs.teamForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('team/add', this.teamForm)
            .then(() => {
              this.$router.push({ path: '/project', query: this.otherQuery })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style>
</style>
