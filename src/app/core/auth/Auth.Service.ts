import { useDependency } from 'vdi'
import { ref } from 'vue'

export class AuthService {
    token = ref(localStorage.getItem('td-fast-token') || '')

    setToken(token: string) {
        this.token.value = token
        localStorage.setItem('td-fast-token', token)
    }
}

export function useAuthService() {
    const tokenService = useDependency(AuthService)
    return {
        token: tokenService.token,
        setToken: tokenService.setToken.bind(tokenService)
    }
}
