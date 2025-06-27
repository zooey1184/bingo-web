export default {
  name: 'ability-nav',
  data: () => ({
    navs: [
      {
        name: '关于冰果',
        url: 'http://www.bingoenglish.com/about',
        icon: 'icon-nav-img1',
        subName: 'Bingo English',
        desc: {
          content: '专注中国学习者的英语学习，提供优质学习内容和教学辅助工具，提升老师教学效率和学生听说读写译综合应用能力！',
          btnGroups: [
            { name: '渠道合作', url: '/apply/agent', class: 'bg-orange' },
            { name: '产品购买', url: '/apply/school', class: 'bg-red' }
          ]
        },
        subNavs: [
          {
            name: '了解冰果',
            subNavs: [
              { name: '公司介绍', url: 'http://www.bingoenglish.com/about' }
            ]
          },
          {
            name: '产品介绍',
            subNavs: [
              { name: '智能作文评阅系统', url: 'http://www.bingoenglish.com/about/intelligent_grading' },
              { name: '在线主题学习系统', url: 'http://www.bingoenglish.com/about/online_learning' }
            ]
          },
          {
            name: '合作伙伴',
            subNavs: [
              { name: '渠道合作', url: 'http://www.bingoenglish.com/apply/recruit' },
              { name: '合作院校', url: 'http://www.bingoenglish.com/about/partner' }
            ]
          }
        ]
      },
      {
        name: '能力提高',
        url: 'https://www.bingoenglish.com/st/ability.html',
        icon: 'icon-nav-img9',
        subName: 'English proficiency',
        desc: {
          content: '科学评测你的真实英语水平，并根据自身能力个性化学习，全面有效提升听说读写译综合应用能力。',
          btnGroups: [
            { name: '产品购买', url: 'http://www.bingoenglish.com/apply/school', class: 'free-trial btn bg-orange' }
          ]
        },
        subNavs: [
          {
            name: '了解冰果等级',
            subNavs: [
              { name: '冰果等级', url: 'http://www.bingoenglish.com/about/online_learning' }
            ]
          },
          {
            name: '水平自测',
            subNavs: [
              { name: '词汇测试', url: 'http://www.bingoenglish.com/w/firsttest/vocabulary.do' },
              { name: '听力测试', url: 'http://www.bingoenglish.com/w/firsttest/dictation.do' },
              { name: '阅读测试', url: 'http://www.bingoenglish.com/w/firsttest/reading.do' }
            ]
          },
          {
            name: '能力提高',
            subNavs: [
              { name: '冰果一级', url: 'https://www.bingoenglish.com/st/ability/level_1.html' },
              { name: '冰果二级', url: 'https://www.bingoenglish.com/st/ability/level_2.html' },
              { name: '冰果三级', url: 'https://www.bingoenglish.com/st/ability/level_3.html' },
              { name: '冰果四级', url: 'https://www.bingoenglish.com/st/ability/level_4.html' }
            ]
          }
        ]
      },
      {
        name: '大学英语',
        url: 'https://www.bingoenglish.com/st/cet4.html',
        icon: 'icon-nav-img3',
        subName: 'College',
        desc: {
          content: '围绕14个生活主题的听说读写译能力训练，“小鱼快吃”让背单词好玩刺激，庞大真题和模拟题轻松备考！',
          btnGroups: [
            { name: '产品购买', url: 'http://www.bingoenglish.com/apply/school', class: 'free-trial btn bg-orange' }
          ]
        },
        subNavs: [
          {
            name: '听说读写译',
            subNavs: [
              // { name: '三级', url: 'https://www.bingoenglish.com/st/zj3/ability.html' },
              { name: '四级', url: 'https://www.bingoenglish.com/st/cet4/ability.html' },
              { name: '六级', url: 'https://www.bingoenglish.com/st/cet6/ability.html' },
              { name: '考研', url: 'https://www.bingoenglish.com/st/graduate/ability.html' },
              // { name: '托业', url: 'https://www.bingoenglish.com/st/toeic/ability.html' }
            ]
          },
          {
            name: '轻松背单词',
            subNavs: [
              // { name: '三级', url: 'https://www.bingoenglish.com/st/zj3/voc.html' },
              { name: '四级', url: 'https://www.bingoenglish.com/st/cet4/voc.html' },
              { name: '六级', url: 'https://www.bingoenglish.com/st/cet6/voc.html' },
              { name: '考研', url: 'https://www.bingoenglish.com/st/graduate/voc.html' },
              // { name: '托业', url: 'https://www.bingoenglish.com/st/toeic/voc.html' }
            ]
          },
          {
            name: '模拟备考',
            subNavs: [
              // { name: '三级', url: 'https://www.bingoenglish.com/st/zj3/test.html' },
              { name: '四级', url: 'https://www.bingoenglish.com/st/cet4/test.html' },
              { name: '六级', url: 'https://www.bingoenglish.com/st/cet6/test.html' },
              { name: '考研', url: 'https://www.bingoenglish.com/st/graduate/test.html' },
              // { name: '托业', url: 'https://www.bingoenglish.com/st/toeic/test.html' }
            ]
          }
        ]
      },
      {
        name: '词汇',
        url: 'http://www.bingoenglish.com/st/index/voc.html'
      },
      {
        name: '休闲英语',
        url: 'http://www.bingoenglish.com/st/index/ent.html',
        icon: 'icon-nav-img8',
        subName: 'News',
        desc: {
          content: '精优适合大学生水平学习的内容，包括国外最新时事、新闻、热点、文化等，丰富眼界扩充知识面的同时提升英文能力。',
          btnGroups: [
            { name: 'free', url: 'javascript:void(0)', class: 'free-trial btn bg-orange' }
          ]
        },
        subNavs: [
          {
            name: '涨知识',
            subNavs: [
              { name: '国外头条', url: 'http://www.bingoenglish.com/content/html/news/' },
              { name: '图文', url: 'http://www.bingoenglish.com/content/html/photo/' },
              { name: '视频', url: 'http://www.bingoenglish.com/content/html/video/' },
              { name: '台词填空', url: 'http://www.bingoenglish.com/st/index/ent.html' }
            ]
          }
        ]
      },
      {
        name: '作文系统',
        url: 'http://writing.bingoenglish.com/',
        icon: 'icon-nav-img2',
        subName: 'Writing',
        desc: {
          content: '为大学师生提供实时精准的英语作文评阅系统，帮助老师提高教学效率，帮助学生提升作文能力！',
          btnGroups: [
            { name: '产品购买', url: 'http://www.bingoenglish.com/apply/school', class: 'free-trial btn bg-orange' }
          ]
        },
        subNavs: [
          {
            name: '老师入口',
            subNavs: [
              { name: '布置作文', url: 'http://writing.bingoenglish.com/www/index.php/teacher/home' },
              { name: '查看作文', url: 'http://writing.bingoenglish.com/www/index.php/teacher/writing/all' }
            ]
          },
          {
            name: '学生入口',
            subNavs: [
              { name: '提交新作文', url: 'http://writing.bingoenglish.com/www/index.php/student/writing/show_writing_upload' },
              { name: '查看作文', url: 'http://writing.bingoenglish.com/www/index.php/student/history/show_writings' }
            ]
          },
          {
            name: '日常练习',
            subNavs: [
              { name: '精选写作', url: 'http://writing.bingoenglish.com/www/index.php/instant/store' }
            ]
          }
        ]
      }
    ]
  }),
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
    }
  },

  // mounted(){
  //   window.addEventListener('mousemove', (event) => {
  //     const target = event.target;
  //     console.log('==target==:\n', target?.className);
  //     if (!target.closest('.navItem')) {
  //       // this.handleMouseLeave();
  //     }
  //   })
  // },
  template: `
    <div id="top_container_menu_inner" class="flex w-100p flex-wrap items-center">
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
    </div>
  `
}