import { defineStore } from "pinia";

export const useProductStore = defineStore('product',{
    state(){
        return {
            products: [
                { id: 1, name: '草莓千層', short: '新鮮草莓與奶油', long: '多層千層蛋糕，中間夾有新鮮草莓與輕盈奶油，適合午茶享用。', price: 680, rate: 4.9, category: 'cake'},
                { id: 2, name: '香草可頌', short: '外酥內軟的可頌', long: '法式可頌，使用天然發酵，層次分明。早餐搭配咖啡或茶最合適。', price: 95, rate: 4.7, category: 'bread'},
                { id: 3, name: '玫瑰馬卡龍', short: '夢幻粉色馬卡龍', long: '外殼酥脆，內餡香濃，帶有淡淡玫瑰香。非常適合作為禮物。', price: 55, rate: 4.8, category: 'macaron'},
                { id: 4, name: '巧克力布朗尼', short: '濕潤濃郁', long: '使用頂級可可，口感濃郁且不乾硬，搭配一球香草冰淇淋極致享受。', price: 120, rate: 4.6, category: 'cookie'},
                { id: 5, name: '藍莓芝士塔', short: '酸甜平衡', long: '酥脆塔皮搭配綿密奶酪與新鮮藍莓，口味清爽。', price: 220, rate: 4.8, category: 'cake'},
                { id: 6, name: '巧達起司麵包', short: '拉絲起司流心', long: '微鹹的起司麵包，內餡有拉絲效果，烤得表皮金黃。', price: 85, rate: 4.5, category: 'bread'},
            ]
        }
    }
})