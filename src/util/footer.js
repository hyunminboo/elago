// src/util/footer.js
const img = (path) => `/img/${path}`;
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

// 로고
export const logoData = {
  src: img("logo.svg"),
  alt: "ELAGO 로고",
  href: "/",
};

// 회사 정보
export const companyData = [
  "(주)엘라고 컴퍼니 : 이찬우",
  "주소 : 경기도 고양시 일산동구 일산로138,224호",
  "사업자등록번호 : 655-86-00288 ",
  "통신판매업신고 : 제2020-고양일산동-1751호",
  "TEL : 070-4616-2667  E-MAIL : B2B@elago.com ",
  "마케팅문의 : 마케팅팀 mkt@thepicton.com",
  "수출문의 : 해외영업팀 sales1@thepicton.com",
  "특판&대량구매문의 : 국내영업팀 sales@thepicton.com",
];
export const footerLegal = {
  copyright: "© Copyright 엘라고 코리아 All right reserved",
  links: [
    { label: "이용약관", href: "/terms" },
    { label: "개인정보처리방침", href: "/privacy" },
    { label: "이용안내", href: "/guide" }
  ]
};
// 고객센터
export const customerCenterData = {
  title: "CS Center",
  tel: { value: "031-901-4535", href: "tel:0319014535" },
  hours: "AM 13:00 - PM 17:00 ",
  notice: "토, 일요일 및 공휴일 휴무",
  talk: { label: "1:1 TALK", href: "#" },
};

// 메뉴
export const footerMenus = [
  {
    title: "Brand",
    items: [
      { label: "Brand Story", href: "/brand-story" },
      { label: "Collection", href: "/collection" },
    ],
  },
  {
    title: "Store Shop",
    items: [
      { label: "All Product", href: "/shop" },
      { label: "HandPhone Case", href: "/Store shop/HandPhone Case" },
      { label: "MagSafe", href: "/Store shop/MagSafe" },
      { label: "Earphones", href: "/Store shop/Earphones" },    
    ],
  },
  {
    title: "Promotion",
    items: [{ label: "Promotion", href: "/promotion" }],
  },
  {
    title: "Community",
    items: [
      { label: "FAQ", href: "/faq" },
      { label: "1:1 CS", href: "/cs" },
    ],
  },
];

export const socialLinks = [
  {
    id: "kakao",
    label: "KakaoTalk 채널",
    href: "https://pf.kakao.com/your-channel",
    icon: RiKakaoTalkFill
  },
  {
    id: "instagram",
    abel: "Instagram",
    href: "https://www.instagram.com/your-instagram",
    icon: FaInstagramSquare
  },
  {
    id: "youtube", 
    label: "YouTube",
    href: "https://www.youtube.com/@your-youtube",
    icon: FaYoutube
  },
];