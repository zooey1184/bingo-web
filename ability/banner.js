export default {
  props: {
    size: {
      type: Number,
      default: 1920
    }
  },
  template: `
    <div class="bg-cream">
      <div style="margin: 0 auto; max-width: 1200px; padding: 0 24px;" class="abilityHomeBanner">
        <div
          class="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
          <h1 data-aos="fade-right" data-aos-once="true" class="my-4 text-5xl font-bold leading-tight text-darken">
            <span class="color-orange">Studying</span> Online is now much easier
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="leading-normal subTitle mb-8">
            BingoEnglish is an interesting platform that will teach you in more an interactive way
          </p>

        </div>

        <div class="abilityHomeGirleWrap" id="girl">
          <img data-aos="fade-up" data-aos-once="true" class=" abilityHomeGirle" src="img/girl.png" />

          <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true"
            class="absolute top-20 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-0 lg:top-52 floating-4">
            <img class="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16" src="img/calendar.svg">
          </div>

          <div data-aos="fade-up" data-aos-delay="400" data-aos-once="true"
            class="absolute top-20 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-32 lg:right-16 floating">
            <svg class="h-16 sm:h-24" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d)">
                <rect x="40" y="32" width="69" height="69" rx="14" fill="#F3627C" />
              </g>
              <rect x="51.35" y="44.075" width="47.3" height="44.85" rx="8" fill="white" />
              <path d="M74.5 54.425V78.575" stroke="#F25471" stroke-width="4" stroke-linecap="round" />
              <path d="M65.875 58.7375L65.875 78.575" stroke="#F25471" stroke-width="4" stroke-linecap="round" />
              <path d="M83.125 63.9125V78.575" stroke="#F25471" stroke-width="4" stroke-linecap="round" />
              <defs>
                <filter id="filter0_d" x="0" y="0" width="149" height="149" filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="8" />
                  <feGaussianBlur stdDeviation="20" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.825 0 0 0 0 0.300438 0 0 0 0 0.396718 0 0 0 0.26 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
          <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true"
            class="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20 lg:bottom-24 lg:-left-4 floating">
            <img class="bg-white bg-opacity-80 rounded-lg gh-10" src="img/ux-class.svg" alt="">
          </div>
          <div data-aos="fade-up" data-aos-delay="600" data-aos-once="true"
            class="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-8 floating-4">
            <img class="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16" src="img/congrat.svg" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="bg-cream" style="margin-top: -18vh">
      <svg class="xl:w-full z-index-9 pos-r" style="width: 100vw; height: 18vh;" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          fill="#fff"></path>
      </svg>
      <div class="bg-white overflow-hidden z-index-9 pos-r"></div>
    </div>
  `
}