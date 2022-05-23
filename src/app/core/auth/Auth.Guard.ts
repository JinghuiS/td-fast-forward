import { Inject } from '@wendellhu/redi'
import type { RouterGuardImplements } from 'vdi'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { TokenService } from '../service/Token.Service'

export class AuthGuard implements RouterGuardImplements {
    constructor(@Inject(TokenService) private TokenService: TokenService) {}
    beforeEach(
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        next: NavigationGuardNext
    ) {
        //如果去的路由是login就不做判断了
        if (to.path === '/login') {
            return next()
        }

        //判断token是否存在，没有跳转到login
        if (!this.TokenService.token.value) {
            return next('/login')
        }

        // 都满足直接进入
        return next()
    }
}
