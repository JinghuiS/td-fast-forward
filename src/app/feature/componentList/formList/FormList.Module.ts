import { vueModule, VdiRouterModule } from 'vdi'
export const FormListModule = vueModule({
    imports: [
        VdiRouterModule.forChild([
            {
                path: '/formList/formGroup',
                name: 'formGroup',
                component: () => import('./FormView.vue')
            }
        ])
    ]
})
