<template>
  <div id="app">
    <nav-menu></nav-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    NavMenu: () => import("@/components/NavMenu.vue")
  }
};
</script>

<style>
.main-text {
  text-decoration: none;
  color: #303133;
}
.comm-text {
  text-decoration: none;
  color: #606266;
}
.secondary-text {
  text-decoration: none;
  color: #909399;
  font-size: 13px;
}
.space-text {
  text-decoration: none;
  color: #c0c4cc;
  font-size: 13px;
}
.link {
  text-decoration: none;
}
.link:hover {
  cursor: pointer;
  color: #409eff;
}
</style>
