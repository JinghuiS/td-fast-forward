import { VdiRouterModule, vueModule,  } from 'vdi'

import { createWebHashHistory } from 'vue-router'
import { LayoutModule } from './layout/Layout.Module'


//type
import type {VdiRouterRaw} from 'vdi'


const routes: VdiRouterRaw[] = [
    {
        path: '/',
        module: LayoutModule,
        children: [
            {
                path: '/STable',
                component: () =>
                    import('./feature/componentList/tableList/STableView.vue')
            },
            {
                path: '/dialog',
                component: () =>
                    import('./feature/componentList/overlayList/DialogView.vue')
            }
        ]
    },
    {
        path: '/login',
        component: () => import('./layout/login/LoginView.vue')
    }
]

/**vue路由模块 */
export const AppRoutingModule = vueModule({
    imports: [
        VdiRouterModule.forRoot({
            history: createWebHashHistory(),
            routes: routes
        })
    ]
})
