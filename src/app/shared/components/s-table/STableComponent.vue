<template>
    <EnhancedTable
        v-bind="tableProps"
        :data="props.data ? props.data : data"
        :loading="
            props.tableProps.loading !== null
                ? props.tableProps.loading
                : loading
        "
        :columns="columns"
    ></EnhancedTable>
</template>

<script setup lang="ts">
import { EnhancedTable } from 'tdesign-vue-next'

import { useTableData } from './hooks/useData'

//type
import type { TableRowData, TdBaseTableProps } from 'tdesign-vue-next'
import type { STablePageProps, STableRespondProps, STableColumns } from './type'
const props = withDefaults(
    defineProps<{
        tableProps: TdBaseTableProps
        request?: (data: STablePageProps) => Promise<STableRespondProps>
        columns: STableColumns[]
        data?: TableRowData[]
    }>(),
    {
        tableProps: {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            rowKey: 'id',
            data: null,
            loading: null
        }
    }
)

const { data, loading } = useTableData(props)
</script>
