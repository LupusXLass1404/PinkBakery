<template>
    <nav class="navbar navbar-expand-md">
        <div class="container py-1 my-1">
            <RouterLink :to="{ path: '/home' }" class="header__brand">
                <div class="header__logo">
                    <h1>PB</h1>
                </div>
                <div>
                    <div class="header__title">PinkBakery</div>
                    <div class="header__tagline">甜點 & 麵包 • 新鮮出爐</div>
                </div>
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="justify-content-end collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item btn btn-lg card-btn">
                        <RouterLink :to="{ path: '/home' }" class="nav-link cart-btn" active-class="btn--pink">關於
                        </RouterLink>
                    </li>
                    <li class="nav-item btn btn-lg card-btn">
                        <RouterLink :to="{ path: '/shop' }" class="nav-link cart-btn" active-class="btn--pink">商店
                        </RouterLink>
                    </li>
                    <li class="nav-item btn btn-lg card-btn">
                        <RouterLink :to="{ path: '/news' }" class="nav-link cart-btn" active-class="btn--pink">新聞
                        </RouterLink>
                    </li>
                    <li class="nav-item btn btn-lg">
                        <div class="cart-btn nav-link" @click="toggleCart">
                            <font-awesome-icon icon="fa-solid fa-cart-shopping" class="cart-icon" />
                            <div>購物車</div>
                            <div class="cart-count" v-if="cartCount">{{ cartCount }}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- cart panel -->
    <div class="cart-panel" v-if="showCart">
        <div class="cart-panel__title">
            <b>購物車</b>
            <div class="desc">共 {{ cartCount }} 項</div>
        </div>

        <div v-if="cart.length === 0" class="cart-panel__tip">你的購物車是空的</div>

        <div v-for="(c, idx) in cart" :key="c.id" class="cart-panel__item">
            <img :src="`${BASE_URL}images/product_${c.id}.jpg`" alt="" />

            <div class="cart-panel__price">
                <b>{{ c.name }}</b>
                <div class="desc">NT$ {{ c.price.toFixed(0) }}</div>
            </div>
            <div class="cart-panel__q">
                <button class="btn btn--outline" @click="decQ(idx)"> - </button>
                <div>{{ c.q }}</div>
                <button class="btn btn--outline" @click="incQ(idx)"> + </button>
            </div>
        </div>
        <div class="cart-panel__bottom">
            <div class="cart-panel__total">
                <b>總計</b>
                <b>NT$ {{ cartTotal.toFixed(0) }}</b>
            </div>

            <div class="cart-panel__buttons">
                <button class="btn btn--outline" @click="clearCart">清空</button>
                <button class="btn btn--pink" @click="checkout">結帳</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="Header">
import { ref, computed, defineProps } from 'vue'
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/store/cart';

const BASE_URL = import.meta.env.BASE_URL
const props = defineProps({
    title: String
})

const cartStore = useCartStore();

const { cart, showCart, count: cartCount, total: cartTotal } = storeToRefs(cartStore);
const { toggleCart, clearCart, checkout, incQ, decQ } = cartStore
</script>
