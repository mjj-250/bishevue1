<template>
  <div class="home">
    <h1 style="color: aliceblue">社团交互平台</h1>

      <el-card class="card" style="margin-top: 100px">
          <template #header>
              <div class="card-header">
                  <h3>进入社团</h3>
              </div>
          </template>
          <el-row class="row">
              <el-col :span="4"></el-col>
              <el-col :span="4"> 账户：</el-col>
              <el-col :span="12"><el-input v-model="user" placeholder="请输入学工号或用户名" clearable /></el-col>
          </el-row>

          <el-row class="row">
              <el-col :span="4"></el-col>
              <el-col :span="4"> 密码：</el-col>
              <el-col :span="12"><el-input v-model="psw" placeholder="请输入密码" show-password /></el-col>
          </el-row>
          <el-row class="row"></el-row>
          <el-row class="row">
              <el-col :span="12"> <el-button type="primary" plain @click="login">登录</el-button> </el-col>
              <el-col :span="12"> <el-button type="info" plain>注册</el-button> </el-col>
          </el-row>

      </el-card>

      <el-card class="card" style="margin-top: 100px">
          <template #header>
              <div class="card-header">
                  <h3>感受科创</h3>
                  <span text>智能识别</span>
              </div>

          </template>

          <el-row class="row">
              <el-col :span="24">
                  <img src="../assets/img/photo.png" @click="addFile" class="imgsear">
                  <input type="file" ref="upload_input" style="display: none;" @change="select_file">
              </el-col>

          </el-row>

          <el-row class="row">
              <el-col :span="2"> </el-col>
              <el-col :span="4"> 垃圾分类：</el-col>
              <el-col :span="12"><el-input v-model="input" placeholder="请输入学工号或用户名" clearable /></el-col>
              <el-col :span="6"> <el-button type="success" plain @click="submit">点击分类</el-button> </el-col>
          </el-row>

      </el-card>



  </div>
</template>

<script>
import {config} from "@/assets/config";
import axios from "axios";
import { ElMessage, ElMessageBox } from 'element-plus'
import { markRaw } from 'vue'
import { WarningFilled,CircleCheck,CloseBold } from '@element-plus/icons-vue'

export default {
  name: 'LoginView',
    data: function () {
        return {
            user: '',
            psw: '',
            input:'',
            select_file_data:'',
            url:config.loadUrl
        }
    },
  methods:{
      addFile(){
          this.$refs.upload_input.click()
      },
      select_file: function (file) {
          this.select_file_data = file.target.files
          this.uploadFile()
      },
      uploadFile(){
          let uploads = new FormData () // 创建 FormData
          let config = { headers: { "Content-Type":"multipart/form-data"} }
          if (this.select_file_data != "") {
              uploads.append("file", this.select_file_data [0]) // 此处只展示上传单个文件
              axios.post(this.url+"upload", uploads, config).then(function (res) {
                    if (res.data=='识别失败_属于识别率低于50%物品'){
                        ElMessageBox.confirm(
                            '识别失败',
                            'NO',
                            {
                                type: 'error',
                                icon: markRaw(CloseBold),
                            }
                        )
                    }else {
                        ElMessageBox.confirm(
                            res.data,
                            'YES',
                            {
                                type: 'success',
                                icon: markRaw(CircleCheck),
                            }
                        )
                    }
              })
          }
      },
      submit(){
        if (this.input!=''){
            axios.get(this.url+"charact",{params:({ garbage:this.input})}).then(function (res) {
                if (res.data=="查询失败"){
                    ElMessageBox.confirm(
                        '查询失败',
                        'NO',
                        {
                            type: 'error',
                            icon: markRaw(CloseBold),
                        }
                    )
                }else {
                    ElMessageBox.confirm(
                        res.data,
                        'YES',
                        {
                            type: 'success',
                            icon: markRaw(CircleCheck),
                        }
                    )
                }

            })

        } else {
            ElMessageBox.confirm(
                '请输入',
                'Warning',
                {
                    type: 'warning',
                    icon: markRaw(WarningFilled),
                }
            )
        }

      },
      login(){
          this.$router.push('/Home');
      }
  }
}
</script>

<style scoped>
  @import '../assets/all.css';

  .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
  }
  .card{
      width: 50%;
      margin: auto;
  }
  .row{
      margin: 10px;
  }
  .imgsear {
      height:30px;
      width: 30px;
  }

</style>
