const img = (path) => `/img/${path}`;

export const heroSlides = [
  {
    id: "hs-1",
    title: "BETTER DESK, <br>BETTER DAY",
    subtitle: "걱정 없이 자유로운 외출! <br>다양한 상품들을 할인가로 만나보세요",
    desc: "피부 본연의 균형을 위한 미니멀 케어",
    ctaText: "이벤트 만나보기",
    ctaHref: "/products",
    image: {
      desktop: img("main_d_1.png"),
      mobile: img("main_mo_1.jpg"),
    },
    alt: "이벤트 배너",
    active: true,
    order: 1,
  },
  {
    id: "hs-2",
    title: "PINK의 설례임",
    subtitle: "다체로운 4가지 컬러 속 2가직 Pick! <br>버즈3 아름다운 케이스를 1+1으로 만나보세요",
    desc: "가볍지만 깊게, 산뜻한 촉촉함",
    ctaText: "이벤트 만나보기",
    ctaHref: "/story/hydration",
    image: {
      desktop:  img("main_d_2.png"),
      mobile: img("main_mo_2.jpg"),
    },
    alt: "이벤트 배너",
    active: true,
    order: 2,
  },
  {
    id: "hs-3",
    title: "다양한 멕세이프, 지갑들을, <br>지갑들을 만나보세요",
    subtitle: "다양한 맥세이프 제품들로 나의 폰을 꾸며 보세요",
    desc: "묵진한 가죽 느낌의 케이스",
    ctaText: "이벤트 만나보기",
    ctaHref: "/collections/sensitive",
    image: {
      desktop:  img("main_d_3.png"),
      mobile: img("main_mo_3.jpg"),
    },
    alt: "이벤트 배너",
    active: true,
    order: 3,
  },
  {
    id: "hs-4",
    title: "Eco-Conscious Beauty",
    subtitle: "Vegan & Cruelty-Free",
    desc: "지속 가능성을 생각한 깔끔한 선택",
    ctaText: "혜택보러가기",
    ctaHref: "/about",
    image: {
      desktop:  img("main_d_4.png"),
      mobile: img("main_mo_4.jpg"),
    },
    alt: "브랜드 철학 배너",
    active: true,
    order: 4,
  },
];