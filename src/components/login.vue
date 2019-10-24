<template>
  <div class="login">
  <el-form ref="form" status-icon :model="ruleForm" :rules="rules" label-width="80px" class="demo-ruleForm" >
  <img src="../assets/yzm.jpg" >
  <el-form-item label="用户名" prop="username">
    <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
  </el-form-item>
   <el-form-item label="密码" prop="password">
    <el-input v-model="ruleForm.password" type="password" placeholder="请输入密码"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="login">登录</el-button>
    <el-button @click="reset">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: ['blur', 'change'] },
          { min: 3, max: 12, message: '用户名长度在 3 到 12 个字符', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: ['blur', 'change'] },
          { min: 3, max: 12, message: '密码长度在 3 到 12 个字符', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {

    login () {
      this.$refs.form.validate(isVaild => {
        if (!isVaild) return
        console.log('发送ajax请求')
        axios.post('http://localhost:8888/api/private/v1/login', this.ruleForm).then(res => {
          const { meta } = res.data
          console.log(meta)
          if (meta.status === 200) {
            this.$message({
              type: 'success',
              message: meta.msg,
              duration: 1000
            })
            this.$router.push({ name: 'index' })
          } else {
            this.$message.error(meta.msg)
          }
        })
      })
    },
    reset () {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
$bgColor: #2d434c;
  .login{
    width: 100%;
    height: 100%;
    background-color: $bgColor;
    list-style: none;
    overflow: hidden;
    .el-form{
      width: 400px;
      margin: 200px auto;
      background-color: #fff;
      padding: 75px 20px 20px;;
      border-radius: 20px;
      position: relative;
      .el-button{
        margin-right: 75px;
      }
      img{
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 5px solid #fff;
        position: absolute;
        left:50%;
        transform:translateX(-50%);
        top: -70px;
          }
    }
  }
</style>
