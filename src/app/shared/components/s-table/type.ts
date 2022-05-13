import type {
    BaseTableCol,
    PaginationProps,
    PrimaryTableCol,
    TableRowData,
    TdBaseTableProps
} from 'tdesign-vue-next'

export type STablePageProps = {
    pageConfig: PaginationProps
    query: unknown
}

export type STableRespondProps = {
    data: TableRowData[]
    total: number
}
export interface STableColumns extends PrimaryTableCol<TableRowData> {
    search?: {
        show?: boolean
    }
}

export interface STableProps {
    tableProps: TdBaseTableProps
    /**表格数据请求 */
    request?: (data: STablePageProps) => Promise<STableRespondProps>
}
