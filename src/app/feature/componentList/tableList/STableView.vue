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
import { onProvider, useDependency } from 'vdi'
import { TableService } from './Table.Service'
import { onMounted } from 'vue'
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
onProvider([[TableService]])
const tableService = useDependency(TableService, { self: true })
onMounted(() => {
    tableService.getGithub()
})
</script>
