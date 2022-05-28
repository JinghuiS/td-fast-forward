<template>
    <div class="p-20px bg-white">
        <TButton @click="openDrawer">打开抽屉</TButton>
        <TButton @click="openDrawerForm">打开表单抽屉</TButton>
        <TButton @click="openDrawerFormParams">打开表单传参抽屉</TButton>
    </div>
</template>

<script setup lang="ts">
import { Button as TButton } from 'tdesign-vue-next'
import { useDrawer } from '@shared/components'
import ChildrenDemo from './DrawerChildDemo.vue'
import ChildrenFormDemo from './DrawerForm.vue'
const { open } = useDrawer()

const openDrawer = () => {
    open({
        component: ChildrenDemo,
        options: {
            header: '测试弹窗'
        },
        params: {
            abc: 1
        }
    }).then((msg) => {
        console.log(msg)
    })
}
const openDrawerForm = () => {
    open({
        component: ChildrenFormDemo,
        options: {
            size: '800px',
            closeOnOverlayClick: false,
            header: '测试表单弹窗'
        },
        params: {
            abc: 1
        }
    }).then((msg) => {
        console.log(msg)
    })
}
const openDrawerFormParams = () => {
    open({
        component: ChildrenFormDemo,
        options: {
            size: '800px',
            closeOnOverlayClick: false,
            header: '测试表单弹窗'
        },
        params: {
            account: 'td-fast',
            password: 'Tdfastadmin',
            description: '这是传参的表单组件',
            email: '1111@email.com',
            gender: 'male'
        }
    }).then((msg) => {
        console.log(msg)
    })
}
</script>
