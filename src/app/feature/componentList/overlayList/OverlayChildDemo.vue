<template>
    <div>
        <div>111112222</div>
    </div>
</template>

<script setup lang="ts">
import { useDialogRef } from '@/app/shared/components/dialog'

const { confirm, close } = useDialogRef()

confirm(() => {
    // console.log(close)
    close(111)
    // close(111)
})
</script>
