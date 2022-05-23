import { LayoutService } from '@/app/layout/Layout.service'
import { Inject } from '@wendellhu/redi'
import { VDI_ROUTER } from 'vdi'
import type { APP_INITIALIZER_TYPE } from 'vdi'
import type { Router } from 'vue-router'
import { TokenService } from '../service/Token.Service'

export class StartupService implements APP_INITIALIZER_TYPE {
    constructor(
        @Inject(LayoutService) private layoutService: LayoutService,
        @Inject(TokenService) private TokenService: TokenService,
        @Inject(VDI_ROUTER) private router: Router
    ) {}
    startup() {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (!this.TokenService.token.value) {
                    this.router.replace('/login')
                }
                this.layoutService.setMenu([
                    {
                        name: '组件',
                        path: 'components',
                        children: [
                            {
                                name: '表格组件',
                                path: 'table',
                                children: [
                                    {
                                        name: 'STable',
                                        path: '/STable'
                                    }
                                ]
                            },
                            {
                                name: '弹出层组件',
                                path: 'overlay',
                                children: [
                                    {
                                        name: 'dialog',
                                        path: '/dialog'
                                    }
                                ]
                            }
                        ]
                    }
                ])

                resolve(true)
            }, 1000)
        })
    }
}
