import { Inject } from '@wendellhu/redi'
import axios, {
    type AxiosDefaults,
    type AxiosInstance,
    type AxiosRequestConfig
} from 'axios'
import { HTTP_CLIENT_CONFIG } from './axiosToken'
import { CreateHttpInterceptor } from './httpInterceptor'

export class HttpClient {
    static defaults: AxiosDefaults = axios.defaults
    private axiosInstance: AxiosInstance

    constructor(
        @Inject(HTTP_CLIENT_CONFIG) public config: AxiosRequestConfig,
        @Inject(CreateHttpInterceptor)
        public CreateHttpInterceptor: CreateHttpInterceptor
    ) {
        this.axiosInstance = axios.create(this.config)
        this.CreateHttpInterceptor.register(this.axiosInstance.interceptors)
    }
    get request() {
        return this.axiosInstance.request
    }
    get get() {
        return this.axiosInstance.get
    }
    get post() {
        return this.axiosInstance.post
    }

    get put() {
        return this.axiosInstance.put
    }
    get delete() {
        return this.axiosInstance.delete
    }

    get head() {
        return this.axiosInstance.head
    }
    get options() {
        return this.axiosInstance.options
    }
    get patch() {
        return this.axiosInstance.patch
    }
}
