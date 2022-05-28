import { LayoutService } from '@/app/layout/Layout.service'
import { Inject } from '@wendellhu/redi'
import { VDI_ROUTER } from 'vdi'
import type { APP_INITIALIZER_TYPE } from 'vdi'
import type { Router } from 'vue-router'
import { AuthService } from '../auth/Auth.Service'

export class StartupService implements APP_INITIALIZER_TYPE {
    constructor(
        @Inject(LayoutService) private layoutService: LayoutService,
        @Inject(AuthService) private AuthService: AuthService,
        @Inject(VDI_ROUTER) private router: Router
    ) {}
    startup() {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (!this.AuthService.token.value) {
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
                                    },
                                    {
                                        name: 'drawer',
                                        path: '/drawer'
                                    }
                                ]
                            },
                            {
                                name: '表单组件',
                                path: 'form',
                                children: [
                                    {
                                        name: 'formGroup',
                                        path: '/formList/formGroup'
                                    }
                                ]
                            }
                        ]
                    }
                ])
                resolve(true)
            }, 100)
        })
    }
}
