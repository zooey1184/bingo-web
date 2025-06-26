// 自测

export default {
  template: `
    <div style="min-height: 65vh">
          <div class="flex items-center justify-center gap-8" style="margin-top: 10vh">
            <div class="font-size-32 font-weight-600 color-orange">冰果专家</div>
            <div class="font-size-32 font-weight-600 color-dark-blue">智能诊断</div>
          </div>
          <div class="color-gray text-align-center mt-32 font-size-16">
            <div>权威教授，全新理念</div>
            <div class="mt-8">国家精品教材主编教授团队 + 最前沿的网络学习体验</div>
          </div>

          <div class="flex items-center justify-around gap-16" style="padding-bottom: 7vh; max-width: 1200px; margin: 0 auto; margin-top: 12vh;">
            <a href="/st/eva/voc_eva.html" class="card-pane  pos-r ">
              <div class="flex flex-col items-center ">
                <div class="pos-a cardIcon">
                  <svg t="1747064449651" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9049" width="64" height="64"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#FEA914" p-id="9050"></path><path d="M554.288 291.312v91.008l0.096 1.344c0.8 6.048 6.96 9.92 12.72 8.048l1.44-0.576 21.84-10.928 21.84 10.928 1.248 0.512a9.856 9.856 0 0 0 12.88-7.776l0.128-1.552v-89.632a96.032 96.032 0 0 1 79.728 94.624v249.392a96 96 0 0 1-96 96H413.792a96 96 0 0 1-96-96V387.312a96 96 0 0 1 96-96h140.496z m-101.328 212.32a59.024 59.024 0 0 0-59.04 59.04v86.288l0.128 2a15.888 15.888 0 0 0 31.664-2v-27.264h54.496v27.264l0.144 2A15.888 15.888 0 0 0 512 648.96v-86.288l-0.08-3.248a59.04 59.04 0 0 0-58.96-55.792z m0 31.776c15.072 0 27.264 12.192 27.264 27.264v27.248h-54.528v-27.248l0.128-2.48a27.248 27.248 0 0 1 27.136-24.784z" fill="#FFFFFF" p-id="9051"></path><path d="M610.208 291.312c5.552 0 10.976 0.48 16.272 1.376v89.632a9.84 9.84 0 0 1-13.008 9.328l-1.248-0.512-21.84-10.928-21.84 10.928a9.84 9.84 0 0 1-14.16-7.472l-0.08-1.344-0.016-91.008h55.92z" fill="#FFFFFF" opacity=".5" p-id="9052"></path></svg>
                </div>
                <div class="color-dark-blue font-size-24 font-weight-600 mt-24">词汇测试</div>
                <div class="color-dark-gray font-size-18 font-weight-200">Vocaulary</div>
                <div class="color-gray text-align-center mt-16">在学习之前，也许你会想知道一个有趣的问题：我到底掌握了多少词汇？</div>
              </div>
            </a>
            <a class="card-pane  pos-r " href="/st/cet4/test.html?target=writing">
              <div class="flex flex-col items-center ">
                <div class="pos-a cardIcon">
                  <svg t="1747066103790" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="38052" width="64" height="64"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#F6625A" p-id="38053"></path><path d="M523.093333 656.725333V416.8192c-2.7648-51.3024 21.504-72.789333 65.1776-80.418133 33.28-6.2464 67.9424-7.6288 106.769067-11.776v306.449066s-88.064-6.946133-171.946667 25.6512z m-20.804266 0c-83.882667-32.597333-171.946667-25.6512-171.946667-25.6512V324.608c38.826667 4.164267 73.489067 5.546667 106.769067 11.776 43.690667 7.645867 67.959467 29.1328 65.877333 81.134933-0.682667-0.682667-0.682667 239.2064-0.682667 239.2064z m28.433066 16.64c60.3136-9.728 121.344-19.421867 188.586667-30.5152V368.981333H733.866667v285.661867c0 11.776-13.175467 33.28-20.804267 33.28h-170.564267c-4.846933 0-11.776-14.557867-11.776-14.557867z m-38.144 0s-6.929067 14.557867-11.776 14.557867h-169.864533c-6.946133 0-20.804267-21.504-20.804267-33.28V369.664h15.2576v273.8688c66.56 10.410667 126.8736 20.104533 187.1872 29.815467z" fill="#FFFFFF" p-id="38054"></path></svg>
                </div>
                <div class="color-dark-blue font-size-24 font-weight-600 mt-24">阅读测试</div>
                <div class="color-dark-gray font-size-18 font-weight-200">Reading</div>
                <div class="color-gray text-align-center mt-16">阅读一篇文章后，你能抓住作者的核心观点吗？也许该测试一下你的阅读理解能力了</div>
              </div>
            </a>
            <a href="/st/eva/listening_eva.html" class="card-pane  pos-r ">
              <div class="flex flex-col items-center">
                <div class="pos-a cardIcon">
                  <svg t="1747065901681" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15382" width="64" height="64"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#00E28C" p-id="15383"></path><path d="M810.666667 613.333333a64 64 0 0 0-128 0v96a64 64 0 0 0 128 0v-96zM426.666667 613.333333a64 64 0 0 0-128 0v96a64 64 0 0 0 128 0v-96z" fill="#FFFBF5" p-id="15384"></path><path d="M768 570.666667a64 64 0 0 0-128 0v96a64 64 0 0 0 128 0v-96z" fill="#FFFBF5" p-id="15385"></path><path d="M704 538.666667a32 32 0 0 0-32 32v96a32 32 0 0 0 64 0v-96a32 32 0 0 0-32-32z m-96 32a96 96 0 0 1 192 0v96a96 96 0 0 1-192 0v-96z" fill="#FFFBF5" p-id="15386"></path><path d="M384 570.666667a64 64 0 0 0-128 0v96a64 64 0 0 0 128 0v-96z" fill="#FFFBF5" p-id="15387"></path><path d="M320 538.666667a32 32 0 0 0-32 32v96a32 32 0 0 0 64 0v-96a32 32 0 0 0-32-32z m-96 32a96 96 0 0 1 192 0v96a96 96 0 0 1-192 0v-96z" fill="#FFFBF5" p-id="15388"></path><path d="M256 506.666667a32 32 0 0 1 32 32v96a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32zM768 506.666667a32 32 0 0 1 32 32v96a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32z" fill="#FFFBF5" p-id="15389"></path><path d="M307.072 313.770667C360.704 253.397333 434.304 218.666667 512 218.666667c77.653333 0 151.296 34.730667 204.928 95.104 53.546667 60.202667 83.072 141.184 83.072 224.896a32 32 0 0 1-64 0c0-69.034667-24.405333-134.570667-66.901333-182.4-42.368-47.658667-98.986667-73.6-157.098667-73.6s-114.730667 25.941333-157.098667 73.6c-42.496 47.786667-66.901333 113.365333-66.901333 182.4a32 32 0 0 1-64 0c0-83.712 29.525333-164.693333 83.072-224.896z" fill="#FFFBF5" p-id="15390"></path></svg>
                </div>
                <div class="color-dark-blue font-size-24 font-weight-600 mt-24">听力测试</div>
                <div class="color-dark-gray font-size-18 font-weight-200">Listening</div>
                <div class="color-gray text-align-center mt-16">你是否有兴趣深入了解自己在听力理解中可能存在的薄弱环节？</div>
              </div>
            </a>
          </div>
        </div>
  `
}