<template>
    <div v-if="$route.name !== 'detail'" class="container news">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col" v-for="news in newsStore.newsList" :key="news.id">
                <RouterLink :to="`/news/detail?id=${news.id}`">
                    <div class="card h-100 shadow-sm">
                        <img :src="`/images/news_${news.id}.jpg`" class="card-img-top shadow-sm" width="100%"
                            height="225" />
                        <div class="card-body py-0 pt-3">
                            <h4 class="card-title">
                                {{ news.title }}
                            </h4>
                            <p class="desc">{{ news.content.slice(0, 20) }} ... <span style="float: right;">{{ news.date
                                    }}</span></p>
                        </div>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>


    <div>
        <RouterView />
    </div>

</template>
<script lang="ts" setup name="News">
import { reactive } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { useNewsStore } from '@/store/news';


const newsStore = useNewsStore();
</script>