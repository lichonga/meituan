<template>
  <div class="page-login">
    <div class="login-header">
      <a class="site-logo logo" href="http://www.meituan.com"></a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        />
      </div>
      <div class="form">
          <h4 v-if="error" class='tips'>{{error}}</h4>
        <p>
          <span>账号登录</span>
        </p>
        <el-input :class="{error: error && !username}" v-model="username" placeholder="手机号/用户名/邮箱" prefix-icon="profile"></el-input>
        <el-input
          v-model="password"
          :class="{error: error && !password}"
          placeholder="手机号/用户名/邮箱"
          prefix-icon="password"
          type="password"
        ></el-input>
        <div class="foot">
          <router-link :to="{name: 'forget'}">忘记密码?</router-link>
        </div>
        <el-button class="btn-login" type="success" @click="submit">登录</el-button>
        <p class="signup-guide">
          还没有账号？
          <a
            href="/account/unitivesignup?service=www&amp;continue=http%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken"
            target="_top"
          >免费注册</a>
        </p>
        <div class="oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <div class="oauth cf">
            <a
              class="oauth__link oauth__link--qq"
              href="/account/connect/tencent"
              data-mtevent="{&quot;la&quot;:&quot;oauth/qq&quot;}"
              target="_blank"
            ></a>
            <a
              class="oauth__link oauth__link--weibo"
              href="/account/connect/sina"
              data-mtevent="{&quot;la&quot;:&quot;oauth/sina&quot;}"
              target="_blank"
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            username: '',
            password: '',
            error: ''
        }
    },
    methods: {
        submit(){
            if(!this.username){
                this.error = '请输入账号'
                return false
            }
            if(!this.password){
                this.error = '请输入密码'
                return false
            }
           this.error = ''
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>
