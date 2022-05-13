<template>
    <div class="p-20px bg-white">
        <TButton @click="openDialog">打开弹窗</TButton>
    </div>
</template>

<script setup lang="ts">
import { Button as TButton } from 'tdesign-vue-next'
import { useDialog } from '@shared/components/dialog'
import ChildrenDemo from './OverlayChildDemo.vue'

const { open } = useDialog({
    component: ChildrenDemo,
    options: {
        header: '测试弹窗'
    },
    params: {
        abc: 1
    }
})

const openDialog = () => {
    open({ params: { abc: 222 } }).then((msg) => {
        console.log(msg)
    })
}
</script>
