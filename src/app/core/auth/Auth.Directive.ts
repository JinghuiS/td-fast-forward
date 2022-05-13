import type { DirectiveImplements } from 'vdi'
import type { Directive } from 'vue'

export type VAuth = Directive<string>

export class AuthDirective implements DirectiveImplements {
    name = 'auth'
}
