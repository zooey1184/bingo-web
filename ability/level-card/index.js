export default {
  props: {
    size: {
      type: Number,
      default: 1920
    },
    images: {
      type: Array,
      default: () => [
        '/st/images/ability/l1.png',
        '/st/images/ability/l2.png',
        '/st/images/ability/l3.png',
        '/st/images/ability/l4.png'
      ]
    },
    topic: {
      type: String,
      default: '2'
    }
  },
  methods: {
    handlePickTopic(_level) {
      // const level = `https://www.bingoenglish.net/st/ability/__level_${_level}.html?topic=${this.topic}`;
      const level = `https://lib.bingoenglish.com/st/ability/level_${_level}.html?topic=${this.topic}`;
      window.open(level, '_self');
    }
  },
  template: `
    <div class='px-24'>
      <div class="serverPane flex-0">
        <img :src="images[0]" alt="">
        <div class="content">
          <div class="centerPane flex items-center flex-col justify-center">
            <div class="levelTitle">冰果一级</div>
            <div class="roundBtn mt-16 levelBtn" @click='handlePickTopic(1)'>开始学习</div>
          </div>
        </div>
      </div>

      <div class="serverPane flex-0">
        <img :src="images[1]" alt="">
        <div class="content">
          <div class="centerPane flex items-center flex-col justify-center">
            <div class="levelTitle">冰果二级</div>
            <div @click='handlePickTopic(2)' style="border: 1px solid transparent" class="levelBtn roundBtn bg-blue mt-16">开始学习</div>
          </div>
        </div>
      </div>


      <div class="serverPane flex-0">
        <img  :src="images[2]" alt="">
        <div class="content">
          <div class="centerPane flex items-center flex-col justify-center">
            <div class="levelTitle">冰果三级</div>
            <div class="levelBtn font-weight-400 color-white">大学水平</div>
            <div @click='handlePickTopic(3)' style="border: 1px solid transparent" class="levelBtn roundBtn mt-16 bg-orange">开始学习</div>
          </div>
        </div>
      </div>

      <div class="serverPane flex-0">
        <img :src="images[3]" alt="">
        <div class="content">
          <div class="centerPane flex items-center flex-col justify-center">
            <div class="levelTitle">冰果四级</div>
            <div class="levelBtn font-weight-400 color-white">研究生水平</div>
            <div @click='handlePickTopic(4)' class="roundBtn mt-16 levelBtn">开始学习</div>
          </div>
        </div>
      </div>
    </div>
  
  `
}