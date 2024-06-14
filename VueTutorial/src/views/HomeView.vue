<template>
  <div class="home">
    <h1> Vue.js 小教室</h1>
    <p>我會把每周的內容範例依照 branch 和頁面來管理</p>
    
    <div class="weeks">
      <div v-for="content in weekContents" :key="content.title" class="week">
        <h2>{{ content.title }}</h2>
        <ul>
          <li v-for="item in content.li">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const weekContents = [
  {
    title: '第 1 週：Vue.js 基礎',
    li: [
      '如何使用、創建元件',
      '元件的結構',
      'Vue 的指令',
      'Alias 設定',
    ]
  },
  {
    title: '第 2 週：路由與元件',
    li: [
      '如何使用 Vue Router',
      '元件生命週期 & 鉤子',
      '動態元件',
      'Vue 內建元件',
    ]
  },
  {
    title: '第 3 週：UI庫、組合式 API 和組件通信',
    li: [
      'UI庫和其他npm工具',
      '組合式 API(Composition API)核心',
      '元件通信',
    ]
  },
]
</script>

<style scoped>
.home {
  font-family: Arial, sans-serif;
  margin: 0 auto;
  padding: 20px;
  max-width: 800px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.weeks {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.week {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
}

h2 {
  margin-top: 0;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}
</style>
