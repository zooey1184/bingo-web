export default {
  data: () => ({
    list: [
      {
        icon: "icon-a",
        text: "真正的学术权威",
      },
      {
        icon: "icon-b",
        text: "基于话题的联想式学习方法",
      },
      {
        icon: "icon-c",
        text: "以用户为中心，量身定制学习内容和计划",
      },
      {
        icon: "icon-d",
        text: "丰富的英语娱乐内容",
      },
      {
        icon: "icon-e",
        text: "激励人心的学习方式",
      },
    ],
  }),
  props: {
    size: {
      type: Number,
      default: 1920,
    },
  },
  methods: {
    handlePlay() {
      const video = document.querySelector("#video");
      video.play();
    },
  },
  template: `
    <div class="advancePane">
      <div class="flex flex-col justify-center items-center">
        <div class="section-title color-white">
          冰果优势
        </div>
        <div class="section-desc color-gray">
          Advantage
        </div>
      </div>

      <div class="mt-40">
        <div :class='{flex: size > 980}' class="flex flex-wrap gap-16 px-24 items-center justify-between">
          <div :style='{width: size > 980 ? "60%" : "100%"}'>
            <video id='video' @click='handlePlay' poster='https://www.bingoenglish.com/assets/images/index/waiting-play.jpg' loop playsinline class="w-100p videoPane">
            <source src='../../images/bingo.mov' type='video/mov' >  
            <source src="../../images/bingo.mp4" type="video/mp4">
            </video>
          </div>
          <div :style='{width: size > 980 ? "35%" : "100%"}'>
            <div v-for="item in list" class="flex items-center gap-16 mb-24">
              <div class="icon-wrap flex-0">
                <div :class="item.icon"></div>
              </div>
              <span class='advancePaneText' :class='{"advancePaneTextM": size < 980}'>{{item.text}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
};
