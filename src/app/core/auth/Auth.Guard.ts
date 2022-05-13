import type { RouterGuardImplements } from 'vdi'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

export class AuthGuard implements RouterGuardImplements {
    beforeEach(
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        next: NavigationGuardNext
    ) {
        next()
    }
}
