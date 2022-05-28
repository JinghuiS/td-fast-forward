<template>
    <component
        :is="Drawer"
        destroyOnClose
        v-bind="options"
        @confirm="confirm"
        :visible="props.visible"
    >
        <slot></slot>
    </component>
</template>
<script lang="ts">
import type { TdDrawerProps } from 'tdesign-vue-next'
export interface DrawerProps extends TdDrawerProps {
    onClose: (msg?: unknown) => void
}
</script>
<script setup lang="ts">
import { Drawer } from 'tdesign-vue-next'
import { onProvider, useDependency } from 'vdi'

import { DrawerService } from './Drawer.Service'
onProvider([[DrawerService]])

const drawerService = useDependency(DrawerService, { self: true })

const confirm = () => {
    drawerService._parentEvents.confirm()
}

const props = withDefaults(
    defineProps<{
        visible: boolean
        options?: TdDrawerProps
    }>(),
    {
        visible: false,
        options: () => ({
            destroyOnClose: true
        })
    }
)
</script>
