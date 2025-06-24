export default {
  props: {
    size: {
      type: Number,
      default: 1920
    }
  },
  template: `
    <div class='px-24'>
      <div class="serverPane flex-0">
        <img src="/images/ability/l1.png" alt="">
        <div class="content">
          <div class="centerPane flex items-center flex-col justify-center">
            <div class="levelTitle">冰果一级</div>
            <div class="roundBtn mt-16 levelBtn">开始学习</div>
          </div>
        </div>
      </div>

      <div class="serverPane flex-0">
        <img src="/images/ability/l2.png" alt="">
        <div class="content">
          <div class="centerPane flex items-center flex-col justify-center">
            <div class="levelTitle">冰果二级</div>
            <div style="border: 1px solid transparent" class="levelBtn roundBtn bg-blue mt-16">开始学习</div>
          </div>
        </div>
      </div>


      <div class="serverPane flex-0">
        <img src="/images/ability/l3.png" alt="">
        <div class="content">
          <div class="centerPane flex items-center flex-col justify-center">
            <div class="levelTitle">冰果三级</div>
            <div class="levelBtn font-weight-400 color-white">大学水平</div>
            <div style="border: 1px solid transparent" class="levelBtn roundBtn mt-16 bg-orange">开始学习</div>
          </div>
        </div>
      </div>

      <div class="serverPane flex-0">
        <img src="/images/ability/l4.png" alt="">
        <div class="content">
          <div class="centerPane flex items-center flex-col justify-center">
            <div class="levelTitle">冰果四级</div>
            <div class="levelBtn font-weight-400 color-white">研究生水平</div>
            <div class="roundBtn mt-16 levelBtn">开始学习</div>
          </div>
        </div>
      </div>
    </div>
  
  `
}