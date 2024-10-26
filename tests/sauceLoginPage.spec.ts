import {expect, test} from '@playwright/test'
import { Login } from '../Login'
import { AsyncLocalStorage } from 'async_hooks'

let login : Login

test.beforeEach(async ({page})=>{
    login = new Login(page)
    await login.navigateTo()
})

test('login with valid credintiL', async()=>{
    await login.login()
    
})
