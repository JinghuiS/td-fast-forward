<template>
    <Header class="tdesign-starter-header-layout">
        <HeadMenu
            class="tdesign-starter-header-menu tdesign-starter-header-menu-fixed-side"
            value="item1"
        >
            <MenuItem value="item1"> 已选内容 </MenuItem>
            <MenuItem value="item2"> 菜单内容一 </MenuItem>
            <MenuItem value="item3"> 菜单内容二 </MenuItem>
            <MenuItem value="item4" :disabled="true"> 菜单内容三 </MenuItem>
            <template #operations>
                <a href="javascript:;"
                    ><Icon class="t-menu__operations-icon" name="search"
                /></a>
                <a href="javascript:;"
                    ><Icon
                        class="t-menu__operations-icon"
                        name="notification-filled"
                /></a>
                <a href="javascript:;"
                    ><Icon class="t-menu__operations-icon" name="home"
                /></a>
            </template>
        </HeadMenu>
    </Header>
</template>

<script setup lang="ts">
import { Header, HeadMenu, MenuItem, Icon } from 'tdesign-vue-next'
</script>

<style lang="less" scoped>
@import '@/style/layout';
.@{prefix}-header {
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
