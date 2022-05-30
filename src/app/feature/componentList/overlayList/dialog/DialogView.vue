<template>
    <div class="p-20px bg-white">
        <OverlayAboutVue name="Dialog" />
        <TButton @click="openDialog">打开弹窗</TButton>
        <TButton @click="openDialogForm">打开表单弹窗</TButton>
        <TButton @click="openDialogFormParams">打开表单传参弹窗</TButton>
    </div>
</template>

<script setup lang="ts">
import { Button as TButton } from 'tdesign-vue-next'
import OverlayAboutVue from '../OverlayAbout.vue'
import { useDialog } from '@shared/components/dialog'
import ChildrenDemo from './DialogChildDemo.vue'
import ChildrenFormDemo from './DialogForm.vue'
const { open } = useDialog()

const openDialog = () => {
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
const openDialogForm = () => {
    open({
        component: ChildrenFormDemo,
        options: {
            closeOnOverlayClick: false,
            header: '测试表单弹窗'
        }
    }).then((msg) => {
        console.log(msg)
    })
}
const openDialogFormParams = () => {
    open({
        component: ChildrenFormDemo,
        options: {
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
