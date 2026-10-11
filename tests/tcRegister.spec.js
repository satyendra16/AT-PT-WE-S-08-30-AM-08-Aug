/*import { test, expect } from '@playwright/test'
import { HomePage } from '../pageobjects/HomePage.js'
import { RegistrationPage } from '../pageobjects/RegistrationPage.js'
test('regsiter test case', async ({ page }) => {
      const homepage=new HomePage(page)
     await homepage.goTo()
     await homepage.clickOnRegisterLink()

     const registerpage = new RegistrationPage(page)
     await registerpage.registerUser('jhon', 'peter', 'france', 'aska', 'nxzt', '12323434', '445566', '111111',
          'js13', 'asdf'
     )

     await registerpage.registerButtonclick()

     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
}) */

import { test, expect } from '@playwright/test'
import { POManager } from '../pageobjects/POManager'
test('regsiter test case', async ({ page }) => {
      const pomanger= new POManager(page)
      const homepage=pomanger.getHomePage()
     await homepage.goTo()
     await homepage.clickOnRegisterLink()

     const registerpage= pomanger.getRegistrationPage()
     await registerpage.registerUser('jhon', 'peter', 'france', 'aska', 'nxzt', '12323434', '445566', '111111',
          'js14', 'asdf'
     )

     await registerpage.registerButtonclick()

     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
})