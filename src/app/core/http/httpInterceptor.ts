import { Many } from '@wendellhu/redi'
import { HTTP_CLIENT_INTERCEPTORS } from './axiosToken'
import type { AxiosClient, HttpClientInterceptor, HttpResponse } from './type'

export class CreateHttpInterceptor {
    constructor(
        @Many(HTTP_CLIENT_INTERCEPTORS)
        private interceptors: HttpClientInterceptor[]
    ) {}
    register(httpClientInterceptors: AxiosClient['interceptors']) {
        const defaultError = (error: any) => {
            console.error(error)
            return Promise.reject(error)
        }
        this.interceptors.forEach((interceptor) => {
            httpClientInterceptors.request.use(
                (...args) => {
                    return interceptor.request(...args)
                },
                (error) => {
                    if (interceptor.requestError) {
                        return interceptor.requestError(error)
                    }
                    return defaultError(error)
                }
            )
            httpClientInterceptors.response.use(
                (...args) => {
                    return interceptor.response(...args)
                },
                (error) => {
                    if (interceptor.responseError) {
                        return interceptor.responseError(error)
                    }
                    return defaultError(error)
                }
            )
        })
    }
}
export class NoopInterceptor implements HttpClientInterceptor {
    request(request: any) {
        return request
    }

    response(response: HttpResponse) {
        return response
    }
}
