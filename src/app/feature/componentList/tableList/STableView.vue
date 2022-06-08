<template>
    <div class="p-20px bg-white">
        <STable
            :tableProps="{
                rowKey: 'id'
            }"
            :columns="columns"
            :data="data"
        ></STable>
    </div>
</template>
<script setup lang="tsx">
import { STable } from '@shared/components/s-table'
import type { STableColumns } from '@shared/components/s-table'
import { onProvider, useDependency } from 'vdi'
import { TableService, type githubTypes } from './Table.Service'
import { onMounted, ref } from 'vue'
const columns: STableColumns[] = [
    {
        title: 'login',
        colKey: 'login'
    },
    {
        title: '头像',
        colKey: 'avatar_url',
        cell: (cell, { col, row }) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            return <img class="w-50px h-50px" src={row[col.colKey]} alt="" />
        }
    },
    {
        title: '测试'
    },
    {
        title: '测试'
    }
]
const data = ref<githubTypes[]>([])
onProvider([[TableService]])
const tableService = useDependency(TableService, { self: true })
onMounted(() => {
    tableService.getGithub().then((res) => {
        data.value = res.data
    })
})
</script>
