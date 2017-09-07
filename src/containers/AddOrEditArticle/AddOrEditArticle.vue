<template>
  <!--添加或编辑文章-->
  <section class="addOrEditArticle">
    <!--头部-->
    <header class="header">
      <span class="title">{{title}}</span>
    </header>
    <!--内容区域-->
    <section class="content">
      <!--表单-->
      <el-form :model="formData"
               ref="formData"
               :rules="rules"
               :label-position="labelPosition">
        <el-form-item label="标题" prop="title">
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item label="简介">
          <el-input v-model="formData.intro"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="formData.content"></el-input>
        </el-form-item>
        <!--按钮栏-->
        <el-form-item>
          <el-button type="primary" @click="submitForm('formData')">立即创建</el-button>
          <el-button @click="resetForm('formData')">重置</el-button>
        </el-form-item>
      </el-form>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'AddOrEditArticle',
    data() {
      return {
        // 标题
        title: '添加作品',
        // 标签对齐方式
        labelPosition: 'top',
        // 表单数据
        formData: {
          title: '',
          intro: '',
          content: ''
        },
        // 表单校验规则
        rules: {
          title: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          region: [
            {required: true, message: '请选择活动区域', trigger: 'change'}
          ]
        }
      }
    },
    methods: {
      // 提交表单
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          // 这里的 valid 是一个 bool 型，如果校验成功，valid === true ，如果校验失败，valid === false
          console.log('valid', valid);
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // 重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped lang="scss">

  .header {
    display: flex;
    align-items: center;
    height: 60px;
    color: #fff;
    background: #000;
    font-size: 20px;

    .title {
      margin-left: 20px;
    }
  }

  .content {
    padding: 40px;
  }

</style>
