export default {
  data: () => ({
    showMenu: false,
    topic: '2'
  }),
  props: {
    topicsList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleToggleMenu() {
      this.showMenu = !this.showMenu;
    },
    handlePickTopic(item) {
      this.topic = item.id; // Update the current topic
      this.$emit('pick', item);
      this.showMenu = false; // Close the menu after picking a topic
    }
  },
  template: `
    <div>
      <div class="articleMenu" @click='handleToggleMenu'>
        <span class="iconfont icon-menu"></span>
      </div>

      <Transition name='slide-fade'>
        <div class='m_menu_mask' v-if='showMenu'>
          <div class='closeIcon z-index-9'>
            <i class='iconfont icon-close' @click='handleToggleMenu'></i>
          </div>
          <div class='pos-a h-100p w-100p p-48 overflow-y-auto'>
            <div v-for="item in topicsList" @click="handlePickTopic(item)"
              :class="{menuItemActive: topic === item.id}" class="flex items-center menuItem">
              <img class="mr-8" :src="item.image" alt="">
              <div>
                <div class="font-size-16 font-weight-600" style="color: rgb(31, 41, 55)">{{item.en_name}}</div>
                <div class="font-size-12" style="color: rgb(107, 114, 128)">{{item.ch_long_name}}</div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  
  `
}