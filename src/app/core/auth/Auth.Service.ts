import { useLocalStorage } from '@vueuse/core'
import { useDependency } from 'vdi'
import { ref } from 'vue'

export class AuthService {
    private tokenLocal = useLocalStorage('td-fast-token', '')
    token = ref(this.tokenLocal.value)

    setToken(token: string) {
        this.token.value = token
        this.tokenLocal.value = token
    }
}

export function useAuthService() {
    const tokenService = useDependency(AuthService)
    return {
        token: tokenService.token,
        setToken: tokenService.setToken.bind(tokenService)
    }
}
