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
  /**
   * <button class="loginBtn flex-0" @click='handleLogin'>登录</button>
              <button class="registerBtn flex-0" @click='handleRegister'>注册</button>
   */

  /**
   * <div v-if="!onlineInfo?.ip_valid" class="flex items-center gap-8">
  <svg t="1751022399636" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5653" width="30" height="30"><path d="M512.00128 1008.84864c-273.96992 0-496.84608-222.8736-496.84608-496.84352s222.87616-496.8448 496.84608-496.8448S1008.8448 238.03776 1008.8448 512.00512 785.96864 1008.84864 512.00128 1008.84864z m248.4224-166.4v-9.93408a83.03104 83.03104 0 0 0-41.73568-71.91808l-113.4016-64.79744c-28.19584 14.368-59.58272 23.22944-93.28512 23.22944s-65.088-8.86144-93.24288-23.22944l-113.4464 64.79744a83.03872 83.03872 0 0 0-41.728 71.91936v9.93408c69.31072 52.2112 155.1808 83.59808 248.42368 83.59808s179.11424-31.34208 248.4224-83.59808zM636.2112 512.00512v-82.80064a124.2112 124.2112 0 0 0-248.42112 0v82.80704a124.2112 124.2112 0 1 0 248.42112 0zM512.00128 97.96864c-228.29952 0-414.03648 185.73824-414.03648 414.03648a412.0512 412.0512 0 0 0 94.52288 263.04c13.37344-35.6928 37.71904-66.86976 71.75552-86.32832l85.99424-49.152c-27.904-35.2768-45.25696-79.20256-45.25696-127.56352v-82.7968c0-114.14784 92.87296-207.0208 207.0208-207.0208s207.01568 92.86656 207.01568 207.0208v82.80704c0 48.36096-17.34784 92.288-45.25056 127.56352l85.9904 49.152c34.03648 19.456 58.38208 50.63552 71.7568 86.32832a412.06016 412.06016 0 0 0 94.52544-263.04c0-228.29824-185.7408-414.03648-414.03776-414.03648z" fill="#d4237a" p-id="5654"></path></svg>
</div>
<div class="schoolText" v-if="onlineInfo.ip_valid && onlineInfo.school">
  {{onlineInfo.school}}
</div>
   */
  template: `
    <div class="bg-cream overflow-hidden">
      <div style="max-width: 1300px; margin: 0 auto" class="pos-r navPane flex items-center  justify-between">
        <div class="color-orange p-16 flex items-center">
          <div class="bg-orange flex items-center justify-center" style="border-radius: 30px; width: 44px; height: 44px">
            <img :src="logo" style="width: 20px" alt="">
          </div>
          <div v-if='size > 1400' class="font-size-24 font-weight-600 ml-16">BingoEnglish</div>
        </div>

        <div class="gap-8 px-16 flex flex-1 justify-end items-center font-size-16 font-weight-300">
          <slot name='nav'></slot>
          <div>
            <div class="schoolText">
              东北林业大学科技学院附属中学
            </div>
          </div>
        </div>
        <div style='height: 10px'></div>
      </div>
      <slot></slot>
    </div>
  `
}