declare namespace BaseRequestAPI {
    type RemoteResultDTO<T> = {
        //数据
        data: T
        //状态
        code: number

        // 返回提示
        msg: string
    }
    type PageDTO<T> = {
        data: T
        total: string
    }
}
