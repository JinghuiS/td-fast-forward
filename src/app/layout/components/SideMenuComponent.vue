<template>
    <div class="tdesign-starter-sidebar-layout">
        <Menu
            expand-mutex
            class="t-side-nav"
            theme="light"
            :value="$route.path"
        >
            <template #logo>
                <div class="font-bold text-2xl text-center w-232px">
                    <RouterLink
                        class="no-underline"
                        style="color: #0052d9"
                        to="/"
                    >
                        🖥td-fast-forward</RouterLink
                    >
                </div>
            </template>
            <MenuItemRender />
        </Menu>
        <div class="tdesign-starter-side-nav-placeholder"></div>
    </div>
</template>

<script setup lang="tsx">
import { Submenu, Menu, MenuItem, Icon } from 'tdesign-vue-next'
import { RouterLink } from 'vue-router'
import { useDependency } from 'vdi'
import { useRouter } from 'vue-router'
import { LayoutService } from '../Layout.service'
import type { MenuItem as MenuItemProps } from '../Layout.service'

const { menu } = useDependency(LayoutService)

const { push } = useRouter()

const MenuItemRender = () => {
    function scan(_menu: MenuItemProps[], nodes = []) {
        _menu.map((item) => {
            const icon = item.icon ? <Icon name={item.icon} /> : null
            const m = item.children ? (
                <Submenu
                    value={item.path}
                    title={item.name}
                    v-slots={{
                        icon
                    }}
                >
                    {scan(item.children)}
                </Submenu>
            ) : (
                <MenuItem
                    onClick={() => {
                        push(item.path)
                    }}
                    value={item.path}
                    v-slots={{ icon }}
                >
                    {item.name}
                </MenuItem>
            )
            nodes.push(m as never)
        })
        return nodes
    }
    return scan(menu.value)
}
</script>

<style lang="less">
@import '@/style/layout';
</style>
