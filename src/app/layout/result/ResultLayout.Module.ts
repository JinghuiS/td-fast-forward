import { vueModule, VdiRouterModule } from 'vdi'
export const ResultLayoutModule = vueModule({
    imports: [
        VdiRouterModule.forChild([
            {
                name: '404',
                component: () => import('./404/404View.vue'),
                path: '/result/404'
            }
        ])
    ]
})
