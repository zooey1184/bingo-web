export default {
  props: {
    onlineInfo: {
      type: Object,
      default: () => ({})
    },
    size: {
      type: Number,
      default: 1920
    },
    logo: {
      type: String,
      default: '/st/images/bingo-logo.png'
    }
  },
  methods: {
    handleLogin() {
      const url = 'https://www.bingoenglish.net/lib/common/login.html'
      window.open(url, '_blank');
      this.$emit('login');
    },
    handleRegister() {
      const url = 'https://www.bingoenglish.net/lib/common/registuser.html'
      window.open(url, '_blank');
      this.$emit('register');
    }
  },
  template: `
    <div class="bg-cream overflow-hidden">
      <div style="max-width: 1200px; margin: 0 auto" class="pos-r navPane flex items-center flex-wrap justify-between">
        <div class="color-orange p-16 flex items-center">
          <div class="bg-orange flex items-center justify-center" style="border-radius: 30px; width: 44px; height: 44px">
            <img :src="logo" style="width: 20px" alt="">
          </div>
          <div v-if='size > 980' class="font-size-24 font-weight-600 ml-16">BingoEnglish</div>
        </div>

        <div class="gap-8 px-16 flex flex-1 justify-end items-center font-size-16 font-weight-300">
          <slot name='nav'></slot>
          <div>
            <div v-if="!onlineInfo?.online" class="flex items-center gap-8">
              <button class="loginBtn flex-0" @click='handleLogin'>登录</button>
              <button class="registerBtn flex-0" @click='handleRegister'>注册</button>
            </div>
            <div class="schoolText" v-if="onlineInfo.online && onlineInfo.school">
              {{onlineInfo.school}}
            </div>
          </div>
        </div>
        <div style='height: 10px'></div>
      </div>
      <slot></slot>
    </div>
  `
}