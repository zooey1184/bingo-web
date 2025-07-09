export default {
  props: {
    aboutUsURL: {
      type: String,
      // default: 'https://www.bingoenglish.com/about'
      default: 'http://www.bingoenglish.net/st/aboutbingo.html'
    }
  },
  template: `
      <div id="bottom" class="w-100p">
      <div class="page-footer">
        <div class="flex items-center pt-24 justify-center title">
          <div class="mr-16">合作伙伴</div>
          <div class='cooperateImage'></div>
        </div>

        <div class="text-align-center mt-48 font-size-14">
          <div class="mb-16">杭州增慧网络科技有限公司</div>
          <div>
            <div>公司地址：中国杭州浙江大学国家大学科技园A栋东区422</div>
            <div class="flex items-center gap-16 flex-wrap justify-center mt-8">
              <div class="flex items-center"><i class="iconfont icon-lianxiwomen mr-4"></i>联系电话：0571-28991078</div>
              |
              <div class="flex items-center">
                <i class="iconfont icon-kefu mr-4"></i>客服在线：<a target="_blank"
                  href="http://wpa.qq.com/msgrd?v=3&amp;uin=996091820&amp;site=qq&amp;menu=yes">QQ
                  996091820</a>
              </div>
              |
              <div class="flex items-center"><i class="iconfont icon-youxiang mr-4"></i>客服邮箱：996091820@qq.com</div>
            </div>

          </div>
        </div>

        <div class="footer-header flex justify-center">
          <div class="container pt-24 px-24 flex flex-wrap items-center flex-wrap justify-center gap-16">
            <a :href="aboutUsURL">关于我们</a>
            <span class="splice">|</span>
            <a href="/st/agreement.html">服务条款</a>
            <span class="splice">|</span>
            <a href="/st/help.html">使用帮助</a>
            <span class="splice">|</span>
            <a href="/w/common/kefu.html">客服中心</a>
          </div>
        </div>
        <div class="footer-body flex justify-center">
          <div class="container  pb-48 px-24">

            <div class="text-align-center mt-48 font-size-12">
              版权所有 © 2005 - 2025 杭州增慧网络科技有限公司保留所有权利.
            </div>
            <div class="FL-r text-align-center mt-8 font-size-12">
              <a rel="nofollow" href="http://www.beian.miit.gov.cn/" target="_blank">浙ICP证B2-20140303号</a>
              <a rel="nofollow" href="http://beian.miit.gov.cn/" target="_blank">浙ICP备14032562号-2</a>
              <div class="text-align-center flex items-center justify-center mt-8">
                <a class="beian flex items-center" target="_blank"
                  href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602002579">
                  <div class='beianImage mr-8'></div>
                  <p>浙公网安备 33010602002579号</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}