<template>
  <div class="p-5 text-center bg-light shadow-sm">
    <h1 class="display-4 fw-bold text-pink">歡迎來到 PinkBakery</h1>
    <p class="fs-4 text-muted">甜點 & 麵包 • 新鮮出爐</p>
    <RouterLink :to="{ path: '/shop' }" class="btn btn--pink btn-lg mt-3">查看甜點</RouterLink>
  </div>

  <div class="container px-4 py-5">
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex align-items-start">
        <div class="icon-square flex-shrink-0 me-3">
          <font-awesome-icon icon="fa-solid fa-bread-slice" size="2x" />
        </div>
        <div>
          <h2>新鮮出爐</h2>
          <p>在 PinkBakery，我們相信最單純的幸福來自一口剛出爐的美味。從鬆軟香氣的麵包，到層次細膩的糕點，每一份作品都由我們的烘焙師精心準備，只為帶給你最真實的溫暖與滿足。</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square flex-shrink-0 me-3">
          <font-awesome-icon icon="fa-solid fa-stroopwafel" size="2x" />
        </div>
        <div>
          <h2>創意甜點</h2>
          <p>我們不僅重視口感，更注重創意與美感的融合。PinkBakery 的甜點總是帶有一點小巧思，無論是特別的風味搭配，還是充滿藝術感的外觀設計，每一次品嚐，都是一次獨特的體驗。</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square flex-shrink-0 me-3">
          <font-awesome-icon icon="fa-solid fa-house" size="2x" />
        </div>
        <div>
          <h2>溫馨氛圍</h2>
          <p>除了美味，我們希望 PinkBakery 成為你心中一個溫暖的角落。無論是獨 自享受寧靜的午後時光，還是與親友一同分享甜蜜時刻，我們都致力於營造舒適的環境，讓每位顧客都能帶著笑容離開。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="Main">
import { RouterLink } from 'vue-router';
</script>

<style>
h1 {
  font-family: 'Delius', Arial, 'NotoSansTC', sans-serif;
}

.text-pink {
  color: #e83e8c;
}
</style>
