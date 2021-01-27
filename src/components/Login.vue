<template>
<div class="login_container">
  <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <el-form  label-width="0px" :rules="rules" ref="ruleForm" :model="ruleForm" >
      <!-- 用户名 -->
           <el-form-item class="a" prop="uname">
                    <el-input type="primary" v-model="ruleForm.uname"></el-input>
           </el-form-item>
           <!-- 密码 -->
           <el-form-item class="b" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass"  autocomplete="off"></el-input>
           </el-form-item>
     
  <!-- 登录 -->
       <el-form-item class="btns">
         <!-- @click="submitForm('ruleForm')" -->
                 <el-button type="primary">登录</el-button>
  <!-- 重置 -->
                <el-button  type="info" @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
   </el-form>
  </div>
</div>
</template>

<script>
export default {
data(){
    
  return {
    ruleForm: {
      uname:'abbye',
      pass:'ilovehl'
    },
      rules: {
   uname: [
            { required: true, message: '请输入名称', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
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
      }
  }
  
}
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
    padding: 0 20px;
    box-sizing: border-box;
  }
  .btns {
    margin-top: 10px;
    margin-right: 5px;
    display: flex;
    justify-content: flex-end;
  }
</style>