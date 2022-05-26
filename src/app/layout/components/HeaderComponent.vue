<template>
    <Header class="td-starter-header-layout"> </Header>
</template>

<script setup lang="ts">
import { Header } from 'tdesign-vue-next'
</script>

<style lang="less" scoped>
@import '@/style/layout';
.td-header {
    border-bottom: 1px solid var(--td-border-level-1-color);

    &-layout {
        height: 64px;
    }
    &-menu-fixed {
        position: fixed;
        top: 0;
        z-index: 1001;
        &-side {
            left: 232px;
            right: 0;
            z-index: 10;
            width: auto;
            transition: all 0.3s;
            &-compact {
                left: 64px;
            }
        }
    }
}
:deep(.t-head-menu__inner) {
    border-bottom: 1px solid @border-level-1-color;
}
</style>
