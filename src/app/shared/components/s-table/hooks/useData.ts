import {
    MessagePlugin,
    type PaginationProps,
    type TableRowData
} from 'tdesign-vue-next'
import { onMounted, ref } from 'vue'
import type { STableProps } from '../type'

export const useTableData = (props: STableProps) => {
    const pageConfig = ref<PaginationProps>({
        current: 1,
        pageSize: 10,
        total: 0,
        ...props.pagination
    })
    const data = ref<TableRowData[]>([])
    const loading = ref(false)

    const _query = ref<unknown>({})

    const fetchData = async (query: unknown) => {
        _query.value = query
        const request = props.request
        if (request) {
            loading.value = true
            try {
                const res = await request({
                    pageConfig: pageConfig.value,
                    query: _query.value
                })
                data.value = res.data
                pageConfig.value.total = res.total
            } catch (error) {
                MessagePlugin.error('请求数据失败')
                loading.value = false
            } finally {
                loading.value = false
            }
        }
    }

    onMounted(() => {
        fetchData(_query.value).then()
    })

    return { data, loading }
}
