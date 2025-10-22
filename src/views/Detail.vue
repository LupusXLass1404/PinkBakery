<template>
    <div v-if="findNews">
        <div class="container my-3 py-5 news-detail">
            <div class="news-detail__main">
                <div class="news-detail__img">
                    <img :src="`/images/news_${findNews.id}.jpg`" />
                </div>
                <div class="news-detail__info">
                    <h2>{{ findNews.title }}</h2>
                    <small class="text-muted">{{ findNews.date }}</small>
                    <hr>
                    <p>{{ findNews.content }}</p>
                </div>
            </div>
            <div class="pt-3 news-detail__return">
                <RouterLink :to="{ path: '/news' }" class="nav-link cart-btn" active-class="btn--pink">返回新聞列表
                </RouterLink>
            </div>
        </div>
    </div>
    <div v-else>
        <p>找不到該新聞</p>
    </div>
</template>

<script setup lang="ts" name="Detail">
import { computed } from 'vue'
import { useNewsStore } from '@/store/news';
import { useRoute, RouterLink } from 'vue-router';

const newsStore = useNewsStore();
const route = useRoute();
const newsId = computed(() => Number(route.query.id));

const findNews = computed(() => newsStore.newsList.find(item => item.id === newsId.value))
</script>