import { ref } from 'vue'

export type MenuItem = {
    name: string
    path: string
    icon?: string
    children?: MenuItem[]
    disabled?: boolean
}

export class LayoutService {
    _menu = ref<MenuItem[]>([])

    get menu() {
        return this._menu
    }
    setMenu(menu: MenuItem[]) {
        this._menu.value = menu
    }
}
