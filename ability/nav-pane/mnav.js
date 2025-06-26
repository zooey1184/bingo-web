import options from "./options.js";

export default {
  name: "ability-nav",
  data: () => ({
    navs: [...options],
    showMenu: false,
  }),
  methods: {
    handleToggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },

  template: `
    <div id="top_container_menu_inner" class="flex flex-wrap items-center">
      <div>
        <div class='m_menu_trigger' @click='handleToggleMenu'>
          <i class='iconfont icon-menu'></i>
        </div>

        <Transition name='slide-fade'>
          <div class='m_menu_mask' v-if='showMenu'>
            <div class='closeIcon'>
              <i class='iconfont icon-close' @click='handleToggleMenu'></i>
            </div>
            <div style='overflow-y: auto; height: 100vh; padding: 16px;' class='color-white'>
              <div class='text-align-center font-size-24 font-weight-600 color-gold mb-16'>BingoEnglish</div>
              <div v-for='menu in navs' class='mb-24' :key='menu.name'>
                <a :href="nav?.url">
                  <div class='navBtn mb-8'>{{menu.name}}</div>
                </a>

                <div v-for='item in menu.subNavs' :key='item.name'>
                  <div style='width: 100px' class='flex-0 mt-16 m_navLintTitle'>{{item.name}}</div>
                  <div class='flex items-center gap-8 flex-wrap' v-if='item.subNavs && item.subNavs.length'>
                    <div v-for='ii in item.subNavs' class='m_navLink font-size-12'>
                      <a class="flex items-center gap-4" :href="ii?.url">
                        {{ii.name}}
                        <i class="iconfont icon-xiayige"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  `,
};
