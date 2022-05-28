import { APP_INITIALIZER, vueModule } from 'vdi'
import { AuthModule } from './auth/Auth.Module'
import { HttpClientModule } from './http'

import { StartupService } from './startup/startup.service'

export const CodeModule = vueModule({
    providers: [
        [
            /**
             * @APP_INITIALIZER 注册一个启动服务
             * 在vue加载同时发送的promise vue会等待startup的promise加载完成才会挂载 */
            APP_INITIALIZER,
            { useClass: StartupService }
        ]
    ],
    imports: [
        AuthModule,
        /**
         * @HttpClientModule 注册一个http模块
         * @config 参数跟axios.create一致
         */
        HttpClientModule.forRoot({})
    ]
})
