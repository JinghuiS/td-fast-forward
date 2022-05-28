import { vueModule, VdiRouterModule } from 'vdi'

import { createWebHashHistory } from 'vue-router'
import { LayoutModule } from './layout/Layout.Module'

//type
import type { VdiRouterRaw } from 'vdi'
import { FormListModule } from './feature/componentList/formList/FormList.Module'
import { ResultLayoutModule } from './layout/result/ResultLayout.Module'

const routes: VdiRouterRaw[] = [
    {
        path: '/',
        module: LayoutModule,
        children: [
            {
                path: '/formList',
                name: 'form',
                module: FormListModule
            },
            {
                path: '/STable',
                component: () =>
                    import('./feature/componentList/tableList/STableView.vue')
            },
            {
                path: '/drawer',
                component: () =>
                    import(
                        './feature/componentList/overlayList/drawer/DrawerView.vue'
                    )
            },
            {
                path: '/dialog',
                component: () =>
                    import(
                        './feature/componentList/overlayList/dialog/DialogView.vue'
                    )
            }
        ]
    },
    {
        path: '/result',
        name: 'result',
        module: ResultLayoutModule
    },
    {
        path: '/:w+',
        name: '404Page',
        redirect: '/result/404'
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
            routes: routes,
            scrollBehavior() {
                return {
                    el: '#app',
                    top: 0,
                    behavior: 'smooth'
                }
            }
        })
    ]
})
