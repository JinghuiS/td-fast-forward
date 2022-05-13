<template>
    <Dialog
        :header="props.options?.header"
        @confirm="confirm"
        :visible="props.visible"
    >
        <slot></slot>
    </Dialog>
</template>
<script lang="ts">
import type { TdDialogProps } from 'tdesign-vue-next'
export interface DialogProps extends TdDialogProps {
    onClose: (msg?: unknown) => void
}
</script>
<script setup lang="ts">
import { Dialog } from 'tdesign-vue-next'
import { onProvider, useDependency } from 'vdi'

import { DialogService } from './Dialog.Service'
onProvider([[DialogService]])

const dialogService = useDependency(DialogService, { self: true })

const confirm = () => {
    dialogService._parentEvents.confirm()
}

const props = defineProps<{
    visible: boolean
    options?: TdDialogProps
}>()
</script>
