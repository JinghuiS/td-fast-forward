import { Inject } from '@wendellhu/redi'
import { useDependency } from 'vdi'
import { HttpClient } from 'vdi-axios'

export type LoginType = {
    username: string
    password: string
}

export class LoginService {
    constructor(@Inject(HttpClient) public http: HttpClient) {}

    public login(form: LoginType) {
        return this.http.post<BaseRequestAPI.RemoteResultDTO<any>>(
            '/user/login',
            form
        )
    }
}

export const useLoginService = () => {
    const loginService = useDependency(LoginService)
    return { login: loginService.login.bind(loginService) }
}
