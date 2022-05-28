import type { AxiosRequestConfig } from 'axios'
import type { ModuleWithProviders } from 'vdi'
import { HTTP_CLIENT_CONFIG, HTTP_CLIENT_INTERCEPTORS } from './axiosToken'
import { HttpClient } from './client'
import { CreateHttpInterceptor, NoopInterceptor } from './httpInterceptor'

export class HttpClientModule {
    static forRoot(config: AxiosRequestConfig): ModuleWithProviders {
        return {
            providers: [
                [HTTP_CLIENT_CONFIG, { useValue: config }],
                [HTTP_CLIENT_INTERCEPTORS, { useClass: NoopInterceptor }],
                [CreateHttpInterceptor],
                [HttpClient]
            ],
            vueModule: HttpClient
        }
    }
}
