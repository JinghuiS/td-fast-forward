import { Inject } from '@wendellhu/redi'
import { HttpClient } from 'vdi-axios'

const paramKey = `__Base_api_params`

function setParam(target: any, key: string = paramKey): any {
    let params = target[key]
    if (typeof params === 'undefined') {
        params = target[key] = {}
    }
    return params
}

export abstract class BaseApi<T> {
    path = ''
    pagePath = ''
    loading = false
    constructor(@Inject(HttpClient) public _http: HttpClient) {
        const baseData = setParam(this)
        this.path = `${baseData.baseUrl}`
        this.pagePath = `${this.path}/GetList`
    }
    /**删除 */
    delete(uuid: any) {
        this.loading = true
        return this._http.delete(`${this.path}/${uuid}`)
    }
    /**查询 */
    find(uuid: string) {
        this.loading = true
        return this._http.get<BaseRequestAPI.RemoteResultDTO<T>>(
            `${this.path}/${uuid}`
        )
    }

    /**修改 */
    edit(form: any) {
        this.loading = true
        return this._http.post<BaseRequestAPI.RemoteResultDTO<any>>(
            `${this.path}/${form.id}`,
            form
        )
    }
    /**新增 */
    add(form: any) {
        this.loading = true
        return this._http.post<BaseRequestAPI.RemoteResultDTO<any>>(
            `${this.path}`,
            form
        )
    }

    /**分页 */
    page(pageConfig: any) {
        this.loading = true
        return this._http.get<
            BaseRequestAPI.RemoteResultDTO<BaseRequestAPI.PageDTO<T[]>>
        >(`${this.path}`, {
            params: {
                ...pageConfig
            }
        })
    }
}

/**
 * 默认基准URL
 * - 有效范围：类
 */
export function BaseUrl(url: string) {
    return function <TClass extends new (...args: any[]) => BaseApi<any>>(
        target: TClass
    ): TClass {
        const params = setParam(target.prototype)
        params.baseUrl = url

        return target
    }
}
