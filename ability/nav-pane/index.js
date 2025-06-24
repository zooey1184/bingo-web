import options from './options.js'

export default {
  name: 'ability-nav',
  data: () => ({
    navs: [...options],
    showMenu: false
  }),
  props: {
    size: {
      type: Number,
      default: 1920
    }
  },
  methods: {
    handleMouseEnter(item) {
      this.navs.forEach(nav => {
        nav.show = false;
      });
      item.show = true;
    },
    handleMouseLeave() {
      this.navs.forEach(nav => {
        nav.show = false; // Hide all submenus when mouse leaves
      });
    },
    handleToggleMenu() {
      this.showMenu = !this.showMenu;
      console.log('==this.showMenu==:\n', this.showMenu)
    }
  },

  template: `
    <div id="top_container_menu_inner" class="flex flex-wrap items-center">
      <template v-if='size > 1000'>
        <div class="navItem" v-for="item in navs" :key="item.name">
          <a :href="item.url" class="lev1">{{item.name}}</a>
          <div class="child" v-if="item.subName || item.desc || item.subNavs">
            <div class="flex h-100p p-24">
              <div class="flex flex-col items-center justify-center nav-title-block">
                <i v-if="item.icon" :class="['imgNav', 'flex-0', item.icon]"></i>
                <b class="mt-8 font-size-16">{{item.subName}}</b>
              </div>
              <div class="pl-24 flex-1">
                <div class="nav-intro flex items-center justify-between" v-if="item.desc">
                  <p>{{item.desc.content}}</p>
                  <div class="flex items-center gap-8" v-if="item.desc.btnGroups && item.desc.btnGroups.length">
                    <a
                      v-for="btn in item.desc.btnGroups"
                      :key="btn.name"
                      class="btn"
                      :class="btn.class"
                      :href="btn.url"
                    >{{btn.name}}</a>
                  </div>
                </div>
                <ul class="nav2 mt-24" v-if="item.subNavs && item.subNavs.length">
                  <li class="flex items-center" v-for="subNav in item.subNavs" :key="subNav.name">
                    <b class='flex-0'>{{subNav.name}}:</b>
                    <span v-for="(link, idx) in subNav.subNavs" :key="link.name + idx" style="min-width:150px;" class="flex items-center gap-4">
                      <a class="flex items-center gap-4" :href="link.url">
                        {{link.name}}
                        <i class="iconfont icon-xiayige"></i>
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </template>
      <div v-else class='flex-1'>
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
                <a :href="menu.url">
                  <div class='navBtn mb-8'>{{menu.name}}</div>
                </a>

                <div v-for='item in menu.subNavs' :key='item.name'>
                  <div style='width: 100px' class='flex-0 mt-16 m_navLintTitle'>{{item.name}}</div>
                  <div class='flex items-center gap-8 flex-wrap' v-if='item.subNavs && item.subNavs.length'>
                    <div v-for='ii in item.subNavs' class='m_navLink font-size-12'>
                      <a class="flex items-center gap-4" :href="ii.url">
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
  `
}