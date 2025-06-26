export default {
  props: {
    size: {
      type: Number,
      default: 1920,
    },
    onlineInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    handleLogin() {
      const url = 'https://www.bingoenglish.net/lib/common/login.html';
      window.open(url, '_blank');
      this.$emit('login');
    },
    handleRegister() {
      const url = 'https://www.bingoenglish.net/lib/common/registuser.html';
      window.open(url, '_blank');
      this.$emit('register');
    },
  },
  template: `
    <div>
      <div v-if="!onlineInfo?.online" class="flex items-center gap-8">
        <button class="loginBtn flex-0" @click='handleLogin'>登录</button>
        <button class="registerBtn flex-0" @click='handleRegister'>注册</button>
      </div>
      <div class="schoolText" v-if="onlineInfo.online && onlineInfo.school">
        {{onlineInfo.school}}
      </div>
    </div>
  `
}