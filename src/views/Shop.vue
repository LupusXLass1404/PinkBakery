<template>
    <!-- main -->
    <div class="container">
        <div class="shop__main">
            <h2>新鮮出爐 · 甜蜜每一天</h2>
            <p class="desc">在 PinkBakery 我們只做可愛又好吃的甜點與手作麵包。直接加入購物車，結帳快速。</p>

            <!-- shop__toolbar -->
            <div class="shop__toolbar">
                <!-- filters -->
                <div class="shop__filters">
                    <div class="shop__chip" :class="{ active: filter === 'all' }" @click="filter = 'all'">全部</div>
                    <div class="shop__chip" :class="{ active: filter === 'cake' }" @click="filter = 'cake'">蛋糕</div>
                    <div class="shop__chip" :class="{ active: filter === 'bread' }" @click="filter = 'bread'">麵包</div>
                    <div class="shop__chip" :class="{ active: filter === 'cookie' }" @click="filter = 'cookie'">餅乾</div>
                    <div class="shop__chip" :class="{ active: filter === 'macaron' }" @click="filter = 'macaron'">馬卡龍
                    </div>
                </div>

                <!-- search -->
                <div class="shop__search">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    <input type="text" name="search" v-model="q" placeholder="搜尋蛋糕、麵包、馬卡龍..." />
                </div>
            </div>
        </div>
    </div>

    <!-- product -->
    <div class="container py-3">
        <div class="shop__products">
            <div class="shop__card shadow-sm" v-for="p in filtered" :key="p.id">
                <div class="thumb" :style="{ backgroundImage: 'url(' + `${BASE_URL}images/product_${p.id}.jpg` + ')' }">
                </div>
                <div>
                    <div class="meta">
                        <div>
                            <div class="name">{{ p.name }}</div>
                            <div class="desc">{{ p.short }}</div>
                        </div>
                        <div class="price">NT$ {{ p.price.toFixed(0) }}</div>
                    </div>
                </div>
                <div style="display:flex;justify-content:space-between;align-items:center">
                    <div class="actions">
                        <button class="btn btn--outline" @click="openProduct(p)" data-bs-toggle="modal"
                            data-bs-target="#myModal">查看</button>
                        <button class="btn btn--pink" @click="addToCart(p)">加入</button>
                    </div>
                    <div class="desc">⭐ {{ p.rate }}</div>
                </div>
            </div>
        </div>
    </div>

    <!-- The Modal -->
    <div class="modal" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content" v-if="productCurrent && productCurrent.id">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">{{ productCurrent.name }}</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <div class="thumb thumb--big"
                        :style="{ backgroundImage: 'url(' + `${BASE_URL}images/product_${productCurrent.id}.jpg` + ')' }">
                    </div>
                    <div>
                        <!-- 介紹 -->
                        <p>
                            {{ productCurrent.long }}
                        </p>
                    </div>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">關閉</button>
                </div>

            </div>
        </div>
    </div>
</template>
<script lang="ts" setup name="Shop">
import { ref, reactive, computed } from 'vue';
import { useProductStore } from '@/store/product';
import { useCartStore } from '@/store/cart';

const BASE_URL = import.meta.env.BASE_URL
const productStore = useProductStore();
const cartStore = useCartStore();
const q = ref('')
const filter = ref('all')
const productCurrent = reactive({
    id: 0,
    name: '',
    short: '',
    long: '',
    price: 0,
    rate: 0,
})

console.log(cartStore);

// 篩選
const filtered = computed(() => {
    const term = q.value.trim().toLowerCase()
    return productStore.products.filter(p => {
        const matchFilter = (filter.value === 'all') || p.category === filter.value

        // 搜尋框
        const matchQ = term === '' ? true : (p.name + ' ' + p.short + ' ' + p.long).toLowerCase().includes(term)
        return matchFilter && matchQ
    })
})

function openProduct(item) {
    Object.assign(productCurrent, item)
}

function addToCart(product: any, q = 1) {
    cartStore.addToCart(product, q)
}

</script>