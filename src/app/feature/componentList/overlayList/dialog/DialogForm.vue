<template>
    <Form
        ref="form"
        :data="formData"
        :rules="rules"
        scroll-to-first-error="smooth"
    >
        <FormItem label="用户名" help="这是用户名字段帮助说明" name="account">
            <Input v-model="formData.account"></Input>
        </FormItem>
        <FormItem label="个人简介" help="一句话介绍自己" name="description">
            <Input v-model="formData.description"></Input>
        </FormItem>
        <FormItem label="密码" name="password">
            <Input v-model="formData.password" type="password"></Input>
        </FormItem>
        <FormItem label="邮箱" name="email">
            <Input v-model="formData.email"></Input>
        </FormItem>
        <FormItem label="性别" name="gender">
            <RadioGroup v-model="formData.gender">
                <Radio value="male">男</Radio>
                <Radio value="femal">女</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="课程" name="course">
            <t-checkbox-group
                v-model="formData.course"
                :options="courseOptions"
            ></t-checkbox-group>
        </FormItem>
        <FormItem label="学院" name="college">
            <Select
                v-model="formData.college"
                class="demo-select-base"
                clearable
            >
                <Option
                    v-for="(item, index) in options"
                    :key="index"
                    :value="item.value"
                    :label="item.label"
                >
                    {{ item.label }}
                </Option>
            </Select>
        </FormItem>
        <FormItem label="入学时间" name="date">
            <Input v-model="formData.date"></Input>
        </FormItem>
    </Form>
</template>
<script lang="ts" setup>
import {
    Form,
    FormItem,
    Button,
    Input,
    Radio,
    RadioGroup,
    Select,
    Option,
    type FormValidateParams
} from 'tdesign-vue-next'
import { formGroup, useDialogRef } from '@shared/components'
import { onMounted } from 'vue'

const { confirm, close, params } = useDialogRef()

const {
    data: formData,
    rules,
    form,
    patchValue
} = formGroup({
    account: [
        '',
        [
            { required: true, message: '姓名必填' },
            { min: 2, message: '至少需要两个字符，一个中文等于两个字符' },
            { max: 10, message: '姓名字符长度超出' }
        ]
    ],
    password: [
        '',
        [
            { required: true, message: '密码必填' },
            { len: 8, message: '请输入 8 位密码' },
            { pattern: /[A-Z]+/, message: '密码必须包含大写字母' }
        ]
    ],
    description: [
        '',
        [
            {
                validator: (val) => val.length >= 5,
                message: '至少 5 个字，中文长度等于英文长度'
            },
            {
                validator: (val) => val.length < 20,
                message: '不能超过 20 个字，中文长度等于英文长度'
            }
        ]
    ],
    email: [
        '',
        [
            { required: true, message: '邮箱必填' },
            {
                email: { ignore_max_length: true },
                message: '请输入正确的邮箱地址'
            }
        ]
    ],
    gender: ['', [{ required: true, message: '性别必填' }]],
    college: ['', []],
    date: ['', []],
    course: [
        [],
        [
            { required: true, message: '课程必填' },
            {
                validator: (val) => val.length <= 2,
                message: '最多选择 2 门课程'
            }
        ]
    ]
})
const courseOptions = [
    { label: '语文', value: '1' },
    { label: '数学', value: '2' },
    { label: '英语', value: '3' },
    { label: '体育', value: '4' }
]
const options = [
    { label: '计算机学院', value: '1' },
    { label: '软件学院', value: '2' },
    { label: '物联网学院', value: '3' }
]

confirm(() => {
    if (form.value?.validate) {
        form.value?.validate().then((valid) => {
            if (valid === true) {
                close(formData.value)
            }
        })
    }
})
onMounted(() => {
    if (params) {
        patchValue(params)
    }
})
</script>
