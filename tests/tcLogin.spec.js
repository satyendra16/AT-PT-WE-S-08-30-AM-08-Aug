import { POManager } from '../pageobjects/POManager'
import { customtest as test,expect } from '../fixtures/testfixture'

test('login user',async({page,testdataForregistration})=>
{
     const pomanger=new POManager(page)
     const homepage=pomanger.getHomePage()
      await homepage.goTo()

      const loginpage=pomanger.getLoginPage()
      await loginpage.loginToApplication(
        testdataForregistration.username,
        testdataForregistration.password
        
      )

      await loginpage.clickOnLoginButton()
})