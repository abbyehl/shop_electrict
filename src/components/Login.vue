<template>
<div class="login_container">
  <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <el-form  label-width="0px" :rules="rules" ref="ruleForm" :model="ruleForm" >
      <!-- 用户名 -->
           <el-form-item class="a" prop="username">
                    <el-input type="primary" v-model="ruleForm.username"></el-input>
           </el-form-item>
           <!-- 密码 -->
           <el-form-item class="b" prop="password">
                    <el-input type="password" v-model="ruleForm.password"  autocomplete="off"></el-input>
           </el-form-item>
     
  <!-- 登录 -->
       <el-form-item class="btns">
         <!-- @click="submitForm('ruleForm')" -->
                 <el-button type="primary" @click="login">登录</el-button>
  <!-- 重置 -->
                <el-button  type="info" @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
   </el-form>
  </div>
</div>
</template>

<script>
let flag=0;
export default {
data(){
    
  return {
    ruleForm: {
      username:'admin',
      password:'123456'
    },
      rules: {
   uname: [
            { required: true, message: '请输入名称', trigger: 'blur' },
            { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
          ],
           pass: [
           { required: true, message: '请输入密码', trigger: 'blur' },
            {
              min: 6,
              max: 15,
              message: '密码长度在 6 到 15 个字符',
              trigger: 'blur',
            },
          ],
  },
  }
  },
  methods:{
      
    resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      login() {
        this.$refs.ruleForm.validate(async (valid) => {
          if (!valid){return}
          const { data:res }=await this.$http.post('login',this.ruleForm)
           if (res.meta.status !== 200) {
              console.log("失败");
               return  this.$message.error('未注册'+res.meta.msg)
             
          }
         this.$message.success('登录成功')
       
         window.sessionStorage.setItem('token',res.data.token)
         this.$router.push('/home')
        })
      }
}}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;

}
.a {
  margin:80px 5px 0 5px;
}
.b {
  margin:15px 5px;
}
.login_box {
    width: 450px;
    height: 300px;
    background: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
     
    .avatar_box {
      height: 130px;
      width: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }
  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
  }
  .btns {
    margin-top: 10px;
    margin-right: 5px;
    display: flex;
    justify-content: flex-end;
  }
</style>