<template>
    <div>
        <div>111112222</div>
    </div>
</template>

<script setup lang="ts">
import { useDrawerRef } from '@shared/components'

const { confirm, close } = useDrawerRef()

confirm(() => {
    close(111)
})
</script>
