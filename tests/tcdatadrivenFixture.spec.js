
import { POManager } from '../pageobjects/POManager'
import { customtest as test,expect } from '../fixtures/testfixture'
test('regsiter test case', async ({ page,testdataForregistration}) => {
      const pomanger= new POManager(page)
      const homepage=pomanger.getHomePage()
     await homepage.goTo()
     await homepage.clickOnRegisterLink()

     const registerpage= pomanger.getRegistrationPage()
     await registerpage.registerUser(
        testdataForregistration.firstname,
        testdataForregistration.lastname,
        testdataForregistration.city,
        testdataForregistration.address,
        testdataForregistration.state,
        testdataForregistration.zipcode,
        testdataForregistration.phonenumber,
        testdataForregistration.ssn,
        testdataForregistration.username,
        testdataForregistration.password,
        testdataForregistration.confirmpassword
        
        
     )

     await registerpage.registerButtonclick()

     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
})