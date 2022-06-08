import { Inject } from '@wendellhu/redi'
import { HttpClient } from 'vdi-axios'

export class TableService {
    constructor(@Inject(HttpClient) public http: HttpClient) {}
    getGithub() {
        this.http.get('https://api.github.com/users?since=100').then((res) => {
            console.log(res.data)
        })
    }
}
