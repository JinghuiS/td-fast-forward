import { DIRECTIVE, ROUTER_GUARD, vueModule } from 'vdi'
import { AuthDirective } from './Auth.Directive'
import { AuthGuard } from './Auth.Guard'
import { AuthService } from './Auth.Service'

export const AuthModule = vueModule({
    providers: [
        [AuthService],
        [DIRECTIVE, { useClass: AuthDirective }],
        [ROUTER_GUARD, { useClass: AuthGuard }]
    ]
})
