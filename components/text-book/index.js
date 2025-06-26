export default {
  props: {
    size: {
      type: Number,
      default: 1920
    }
  },
  methods: {
    handleGoTextBook() {
      {
        const url = 'https://www.bingoenglish.com/nce/';
        window.open(url, '_blank');
        this.$emit('goTextBook');
      }
    },
  },
  template: `
    <div style="margin: 32px auto; max-width: 1200px;" class="p-32 ">
      <div :class='{"flex flex-wrap": size > 980}' class="overflow-hidden  justify-between bg-red-10 rounded-16 mt-32 jiaocaiPane"
        style="padding: 2vw">
        <div class="flex mr-32 overflow-hidden">
          <img src="/st/images/home/1.png" class='eduItem_20' alt="" srcset="">
          <img src="/st/images/home/edu2.png" class='eduItem_20' alt="" style='margin-left: -10px' srcset="">
          <img src="/st/images/home/3.png" class='eduItem_30' style='margin-left: -20px'  alt="" srcset="">
          <img src="/st/images/home/4.png" class='eduItem_30' style='margin-left: -10px' alt="" srcset="">
        </div>
        <div :class='{"flex flex-1 flex-wrap justify-between": size > 980}'>
          <div>
            <div class="color-dark-gray font-weight-200">普通高等教育“十一五”国家级规划教材，</div>
            <div class="color-dark-gray font-weight-200">教育部“2007年度普通高等教育精品教材”</div>
            <div :style="{width: size > 980 ? '140px' : '100%'}"
              class="mt-16 mb-8 font-size-18 font-weight-400 flex items-center justify-between">浙江大学
              <div>编著</div>
            </div>
            <div :style="{width: size > 980 ? '140px' : '100%'}" class="font-size-18 font-weight-400 flex items-center justify-between">应惠兰
              <div>主编</div>
            </div>
          </div>
          <div>
            <div class="font-size-18 font-weight-200">新编大学英语用户</div>
            <div class="engTitle mt-8 mb-16">New College English</div>
            <div>
              <button @click='handleGoTextBook' style="width: 140px" class="custom-btn rounded-8 custom-primary-btn">进入</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}