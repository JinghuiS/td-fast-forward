import { CommonModule, vueModule } from 'vdi'

/**模块 */
import { AppRoutingModule } from './AppRouting.Module'

import { LayoutService } from './layout/Layout.service'
/**视图 */
import AppView from './AppView.vue'
import { CodeModule } from './core/Code.Module'

export const AppModule = vueModule({
    declarations: AppView,
    providers: [[LayoutService]],
    imports: [CommonModule, AppRoutingModule, CodeModule]
})
