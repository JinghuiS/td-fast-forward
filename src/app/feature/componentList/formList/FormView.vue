<template>
    <div class="p-20px bg-white">
        <Form ref="form" :rules="rules" :data="data">
            <FormItem
                label="用户名"
                help="这是用户名字段帮助说明"
                name="account"
            >
                <Input v-model="data.account"></Input>
            </FormItem>
            <FormItem label="个人简介" help="一句话介绍自己" name="description">
                <Input v-model="data.description"></Input>
            </FormItem>
            <FormItem>
                <Button theme="primary" type="submit" style="margin-right: 10px"
                    >提交</Button
                >
            </FormItem>
        </Form>
    </div>
</template>

<script lang="ts" setup>
import { Form, FormItem, Input, Button } from 'tdesign-vue-next'
import { formGroup } from '@shared/components/form'

const { data, rules, form } = formGroup({
    account: ['', [{ required: true }]],
    description: [
        '',
        [
            {
                required: true,
                message: '不能超过 20 个字，中文长度等于英文长度'
            }
        ]
    ]
})
</script>
