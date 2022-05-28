import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export type HttpResponse<T = any> = AxiosResponse<T>

export interface HttpClientInterceptor {
    request(
        request: AxiosRequestConfig
    ): AxiosRequestConfig | Promise<AxiosRequestConfig>
    requestError?(error: any): Promise<any> | any
    response(response: HttpResponse): HttpResponse | Promise<HttpResponse>
    responseError?(error: any): Promise<any> | any
}

export type AxiosClient = Pick<AxiosInstance, keyof AxiosInstance>
