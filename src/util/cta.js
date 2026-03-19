const img = (path) => `/img/${path}`;
export const categories = [
  {
    id: 61,
    slug: "맥세이프",
    name: "맥세이프",
    href: "/category/make-up/61/",
    img: {
      src: img("cate-1.png"),
      alt: "맥세이프",
    },
  },
  {
    id: 42,
    slug: "이어폰",
    name: "이어폰",
    href: "/category/sun/42/",
    img: {
      src: img("cate-2.png"),

      alt: "이어폰",
    },
  },
  {
    id: 52,
    slug: "케이블",
    name: "케이블",
    href: "/category/lip/52/",
    img: {
      src: img("cate-3.png"),

      alt: "케이블",
    },
  },
  {
    id: 50,
    slug: "스트랩",
    name: "스트랩",
    href: "/category/str/50/",
    img: {
      src: img("cate-4.png"),

      alt: "스트랩",
    },
  },
  {
    id: 47,
    slug: "워치거치대",
    name: "워치거치대",
    href: "/category/cleansing/47/",
    img: {
      src: img("cate-5.png"),

      alt: "워치거치대",
    },
  },

];

export default categories;