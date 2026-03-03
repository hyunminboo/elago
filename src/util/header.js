
const img =(path)=>`/img/${path}`

export const headerData ={

    logo:{
        src:img('logo.svg'),
        alt:'elago',
        href:'/'
    },
    menus:[
        {
            id:'hero',
            label:'hero',
            href:'#hero',
            type:'section'
        },
        {
            id:'follow',
            label:'follow',
            href:'#follow',
            type:'section'
        },
        {
            id:'collection',
            label:'collection',
            href:'#collection',
            type:'section'
        },
        {
            id:'product',
            label:'product',
            href:'#product',
            type:'section'
        },
        {
            id:'instargram',
            label:'instargram',
            href:'#instargram',
            type:'section'
        },
    ],

    utils: [
        { id: "search", label: "검색", icon: img("header-search.svg"), href: "#" },
        { id: "account", label: "마이", icon: img("header-mypage.svg"), href: "#" },
        { id: "cart", label: "장바구니", icon: img("header-mypage-bag.svg"), href: "#" },
        { id: "language", label: "언어선택", icon: img("icon_language.svg"), href: "#" },
    ],

    // 상단 공지/배너 TopBanner용
    topBanner: {
        enabled: true,
        height: 64,                  
        items: [
            { id: "tb-1", text: "새로운 소식이 있습니다.", href: "#" },
            { id: "tb-2", text: "업데이트 안내", href: "#" },
            { id: "tb-3", text: "이벤트 진행 중!", href: "#" },
        ],
        closeIcon: img("closebtn.svg"),
        background: "#DC272D",
        color: "#fff",
    },

}