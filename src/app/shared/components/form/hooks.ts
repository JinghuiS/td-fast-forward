import type { FormInstanceFunctions, FormRule } from 'tdesign-vue-next'
import { ref, type Ref } from 'vue'

export type formType<T> = {
    [P in keyof T]: [T[P], FormRule[]]
}

type FormDataType<O> = {
    [P in keyof O]: O[P]
}
type RuleType<O> = {
    [P in keyof O]: FormRule[]
}

export const formGroup = <O extends Record<any, any>, P extends keyof O>(
    formItems: formType<P>
) => {
    const data = ref({}) as Ref<FormDataType<P>>
    const rules = ref({}) as Ref<RuleType<P>>

    const form = ref<FormInstanceFunctions>()

    const patchValue = (values: Partial<FormDataType<P>>) => {
        data.value = { ...data.value, ...values }
    }

    Object.keys(formItems).forEach((key) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        data.value[key] = formItems[key][0]
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        rules.value[key] = formItems[key][1]
    })
    return { data, rules, form, patchValue }
}
