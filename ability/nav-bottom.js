export default {
  template: `
    <div style="height: 30vh; z-index: 1" class=" pos-r flex items-center justify-center">
        <div class="absolute inset-0 z-0" style="pointer-events:none;">
          <div class="navPane-ball1" style="
          position:absolute;left:10%;top:20%;width:120px;height:120px;
          background:radial-gradient(circle at 60% 40%, #facc15cc 60%, transparent 100%);
          border-radius:50%;filter:blur(2px);">
          </div>
              <div class="navPane-ball2" style="
          position:absolute;right:15%;top:10%;width:80px;height:80px;
          background:radial-gradient(circle at 40% 60%, #38bdf8cc 60%, transparent 100%);
          border-radius:50%;filter:blur(2px);">
          </div>
              <div class="navPane-ball3" style="
          position:absolute;left:40%;bottom:10%;width:100px;height:100px;
          background:radial-gradient(circle at 50% 50%, #a78bfa99 60%, transparent 100%);
          border-radius:50%;filter:blur(2px);">
          </div>
              <div class="navPane-ball4" style="
          position:absolute;right:25%;bottom:15%;width:60px;height:60px;
          background:radial-gradient(circle at 50% 50%, #f472b6aa 60%, transparent 100%);
          border-radius:50%;filter:blur(2px);">
          </div>
        </div>
        <div class="z-10 text-center">
          <div class="font-size-32 font-weight-700 text-gray-800 mb-8" style="letter-spacing:2px;">
            Welcome to Bingo English
          </div>
          <div class="font-size-18 text-gray-500">
            科学提升你的英语能力，开启高效学习之旅
          </div>
        </div>
      </div>
  
  `
}