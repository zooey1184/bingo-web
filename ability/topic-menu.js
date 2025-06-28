export default {
  data: () => ({
    showMenu: false,
    topicActive: "2", // Default active topic
  }),
  props: {
    topicsList: {
      type: Array,
      default: () => [],
    },
    topic: {
      type: String,
      default: "2",
    },
  },
  watch: {
    topic: {
      handler(newVal) {
        this.topicActive = newVal; // Update the active topic when prop changes
      },
      immediate: true, // Ensure it runs immediately on component creation
    }
  },
  methods: {
    handleToggleMenu() {
      this.showMenu = !this.showMenu;
    },
    handlePickTopic(item) {
      this.topicActive = item.id; // Update the current topic
      this.$emit("pick", item);
      this.showMenu = false; // Close the menu after picking a topic
    },
  },
  template: `
    <div>
      <div class="articleMenu flex items-center" @click='handleToggleMenu'>
        <span class="iconfont icon-menu"></span>
        <span class='font-size-12 ml-4'>选择主题</span>
      </div>

      <Transition name='slide-fade'>
        <div class='m_menu_mask' v-if='showMenu'>
          <div class='closeIcon z-index-9'>
            <i class='iconfont icon-close' @click='handleToggleMenu'></i>
          </div>
          <div class='pos-a h-100p w-100p p-48 overflow-y-auto'>
            <div v-for="item in topicsList" @click="handlePickTopic(item)"
              :class="{menuItemActive: topicActive === item.id}" class="flex items-center menuItem">
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
  
  `,
};
