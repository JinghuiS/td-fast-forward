import { useDependency } from 'vdi'
import { ref } from 'vue'

export class TokenService {
    token = ref(localStorage.getItem('td-fast-token') || '')

    setToken(token: string) {
        this.token.value = token
        localStorage.setItem('td-fast-token', token)
    }
}

//获取TokenService的服务
export function useTokenService() {
    const tokenService = useDependency(TokenService)
    return tokenService
}
