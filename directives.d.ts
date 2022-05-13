import '@vue/runtime-core'
declare module '@vue/runtime-core' {
    export interface GlobalDirectives {
        vAuth: FunctionDirective<HTMLElement, string>
    }
}

export {}
