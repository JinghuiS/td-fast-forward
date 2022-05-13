import { ref } from 'vue'

export class DialogService {
    confirm(fn: () => void) {
        this._parentEvents.confirm = fn
    }

    _parentEvents = {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        confirm: () => {}
    }
}
