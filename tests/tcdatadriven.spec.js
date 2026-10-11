import { test, expect } from '@playwright/test'
import { POManager } from '../pageobjects/POManager'
import testdata  from '../utils/data.json' assert{type:'json'}
 
 for(const data of testdata )
 {

test(`regsiter test case ${data.username}`, async ({ page }) => {
      const pomanger= new POManager(page)
      const homepage=pomanger.getHomePage()
     await homepage.goTo()
     await homepage.clickOnRegisterLink()

     const registerpage= pomanger.getRegistrationPage()
     await registerpage.registerUser(
        data.firstname,
        data.lastname,
        data.address,
        data.city,
        data.state,
        data.zipcode,
        data.phonenumber,
        data.username,
        data.password,
        data.confirmpassword
     )

     await registerpage.registerButtonclick()

     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
})

 }
