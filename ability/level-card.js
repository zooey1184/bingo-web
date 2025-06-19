export default {
  template: `
    <div class='p-24'>
      <div class="text-align-center font-size-32 color-dark-blue">能力提升</div>
      <div class="flex items-center justify-around" style="margin-top: 10vh;">
        <div class="serverPane">
          <img src="/images/tsdxy.png" alt="">
          <div class="content">
            <div class="centerPane flex items-center flex-col justify-center">
              <div class="font-size-20 font-weight-600">冰果一级</div>
              <div class="roundBtn mt-16">开始学习</div>
            </div>
          </div>
        </div>

        <div class="serverPane">
          <img src="/images/translate.png" alt="">
          <div class="content">
            <div class="centerPane flex items-center flex-col justify-center">
              <div class="font-size-20 font-weight-600">冰果二级</div>
              <div style="border: 1px solid transparent" class="roundBtn bg-blue mt-16">开始学习</div>
            </div>
          </div>
        </div>
      </div>


      <div class="flex items-center justify-around" style="margin-top: 10vh;">
        <div class="serverPane">
          <img src="/images/3.png" alt="">
          <div class="content">
            <div class="centerPane flex items-center flex-col justify-center">
              <div class="font-size-20 font-weight-600">冰果三级</div>
              <div class="font-size-16 font-weight-400 color-gray">大学水平</div>
              <div style="border: 1px solid transparent" class="roundBtn mt-16 bg-orange">开始学习</div>
            </div>
          </div>
        </div>

        <div class="serverPane">
          <img src="/images/4.png" alt="">
          <div class="content">
            <div class="centerPane flex items-center flex-col justify-center">
              <div class="font-size-20 font-weight-600">冰果四级</div>
              <div class="font-size-16 font-weight-400 color-gray">研究生水平</div>
              <div class="roundBtn mt-16">开始学习</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  `
}