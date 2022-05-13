<template>
    <div class="t-layout">
        <Layout key="side">
            <LayoutHeader />
            <Layout class="t-layout--with-sider">
                <LayoutSideNav />
                <Layout class="tdesign-starter-layout">
                    <Content class="tdesign-starter-content-layout">
                        <LayoutContent />
                    </Content>
                    <Footer
                        >Copyright @ 2022-{{
                            new Date().getFullYear()
                        }}
                        td-fast-forward</Footer
                    >
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script setup lang="ts">
import { Layout, Content, Footer } from 'tdesign-vue-next'
import LayoutContent from './components/ContentComponent.vue'
import LayoutSideNav from './components/SideMenuComponent.vue'
import LayoutHeader from './components/HeaderComponent.vue'
</script>
<style lang="less">
@import '@/style/layout';
</style>
