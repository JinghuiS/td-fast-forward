<template>
    <div class="p-20px bg-white">
        <STable
            :tableProps="{
                rowKey: 'id'
            }"
            :columns="columns"
            :data="[]"
        ></STable>
    </div>
</template>
<script setup lang="tsx">
import { STable } from '@shared/components/s-table'
import type { STableColumns } from '@shared/components/s-table'
const columns: STableColumns[] = [
    {
        title: '测试'
    },
    {
        title: '测试'
    },
    {
        title: '测试'
    },
    {
        title: '测试'
    }
]
</script>
