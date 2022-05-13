import { VdiRouterModule, vueModule, type VdiRouterRaw } from 'vdi'
import { createWebHashHistory } from 'vue-router'
import { LayoutModule } from './layout/Layout.Module'
// import Layout from './layout/LayoutComponent.vue'

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
