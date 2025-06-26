/**
 * 四六级测试面板
 */

export default {
  props: {
    size: {
      type: Number,
      default: 1920
    }
  },
  data: () => ({
    list: [
      {
        name: '三级',
        description1: '核心提炼',
        description2: '轻松应考',
        link: '/st/zj3.html'
      },
      {
        name: '四级',
        description1: '紧贴考纲',
        description2: '权威科学',
        link: '/st/cet4.html'
      },
      {
        name: '六级',
        description1: '真题训练',
        description2: '高效提升',
        link: '/st/cet6.html'
      },
      {
        name: '考研',
        description1: '考研冲刺',
        description2: '快速突破',
        link: '/st/graduate.html'
      }
    ]
  }),

  template: `
    <div :class='{"flex": size > 980}' class=" mt-24 justify-between gap-24">
      <div v-for="item in list" :key="item.name" class="flex-1">
        <div class="goName">{{item.name}}</div>
        <div class="mb-16" :class='{"flex items-center justify-between": size < 980}'>
          <div>
            <div class="color-dark-gray line-height-18">{{item.description1}}</div>
            <div class="color-dark-gray line-height-18">{{item.description2}}</div>
          </div>
          <a :href="item.link" :class='{"pr-16": size<980}'>
            <div class="goBtn">GO</div>
          </a>
        </div>
      </div>
    </div>
  `
}