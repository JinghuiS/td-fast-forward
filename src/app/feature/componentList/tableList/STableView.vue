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
import { useDependency } from 'vdi'
import { HttpClient } from 'vdi-axios'
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
const http = useDependency(HttpClient)
onMounted(() => {
    http.get('https://api.github.com/users?since=100').then((res) => {
        console.log(res.data)
    })
})
</script>
