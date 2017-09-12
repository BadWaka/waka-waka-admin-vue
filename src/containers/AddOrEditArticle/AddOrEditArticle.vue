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
               :rules="formDataRules"
               :label-position="labelPosition">
        <!--标题-->
        <el-form-item label="标题" prop="title">
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <!--简介-->
        <el-form-item label="简介">
          <el-input v-model="formData.intro"></el-input>
        </el-form-item>
        <!--类型选择框-->
        <el-form-item label="类型" prop="type">
          <el-select class="el-select"
                     v-model="formData.type"
                     placeholder="请选择">
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <!--标签选择框-->
        <el-form-item label="标签" prop="tag">
          <el-select class="el-select"
                     v-model="formData.tag"
                     multiple
                     filterable
                     allow-create
                     placeholder="请选择标签">
            <el-option
              v-for="item in tagOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <!--内容-->
        <el-form-item label="内容" prop="content">
          <el-input v-model="formData.content"
                    type="textarea"
                    :rows="10">
          </el-input>
        </el-form-item>
        <!--按钮栏-->
        <el-form-item>
          <el-button type="primary" @click="submitForm('formData')">立即创建</el-button>
          <el-button @click="resetForm('formData')">重置</el-button>
          <el-button @click="axiosTest()">axios 测试</el-button>
        </el-form-item>
      </el-form>
    </section>
  </section>
</template>

<script>
  import axios from 'axios';

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
          content: '',
          type: '',
          tag: [],
        },
        // 表单校验规则
        formDataRules: {
          // 标题
          title: [
            {
              required: true,
              message: '请输入标题',
              trigger: 'change'
            },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'change'
            }
          ],
          // 类型
          type: [
            {
              required: true,
              message: '请选择类型',
              trigger: 'change'
            }
          ],
          // 标签
          tag: [
            {
              type: 'array',
              required: true,
              message: '请至少选择一个标签',
              trigger: 'change'
            }
          ],
          // 内容
          content: [
            {
              required: true,
              message: '请填写内容',
              trigger: 'change'
            }
          ],
        },
        // 类型选项
        typeOptions: [
          {
            value: '技术',
            label: '技术'
          }
        ],
        // 标签选项
        tagOptions: [
          {
            value: 'HTML',
            label: 'HTML'
          }, {
            value: 'CSS',
            label: 'CSS'
          }, {
            value: 'JavaScript',
            label: 'JavaScript'
          }, {
            value: 'React',
            label: 'React'
          }, {
            value: 'Vue',
            label: 'Vue'
          }, {
            value: 'Angular',
            label: 'Angular'
          }, {
            value: 'Canvas',
            label: 'Canvas'
          }, {
            value: 'WebGL',
            label: 'WebGL'
          }
        ],
      }
    },
    methods: {
      // 提交表单
      submitForm(formName) {
        console.log('formName', formName, 'formData', this.formData);
        this.$refs[formName].validate((valid) => {
          // 这里的 valid 是一个 bool 型，如果校验成功，valid === true ，如果校验失败，valid === false
          console.log('valid', valid);
          // 校验失败
          if (!valid) {
            console.log('error submit!!');
            return false;
          }
          // 校验成功
          console.info('校验成功');
        });
      },
      // 重置表单
      resetForm(formName) {
        // 重置表单 api
        this.$refs[formName].resetFields();
      },
      // axios 测试
      axiosTest() {
        axios.get('http://localhost:5000/api/getArticle')
          .then(function (response) {
            console.log('response', response);
          })
          .catch(function (error) {
            console.log('error', error);
          });
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
    background: #20A0FF;
    font-size: 20px;

    .title {
      margin-left: 40px;
    }
  }

  .content {
    padding: 40px;

    .el-select {
      width: 400px;
    }
  }

</style>
