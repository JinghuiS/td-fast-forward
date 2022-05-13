import { LayoutService } from '@/app/layout/Layout.service'
import { Inject } from '@wendellhu/redi'
import type { APP_INITIALIZER_TYPE } from 'vdi'

export class StartupService implements APP_INITIALIZER_TYPE {
    constructor(@Inject(LayoutService) private layoutService: LayoutService) {}
    startup() {
        return new Promise((resolve) => {
            setTimeout(() => {
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
            }, 2000)
        })
    }
}
