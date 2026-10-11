export class RegistrationPage{
    constructor(page) {
        this.page = page
        this.firstName = page.locator("//input[@id='customer.firstName']")
        this.lastName = page.locator("//input[@id='customer.lastName']")
        this.Address = page.locator("//input[@id='customer.address.street']")
        this.City = page.locator("//input[@id='customer.address.city']")
        this.State = page.locator("//input[@id='customer.address.state']")
        this.Zipcode = page.locator("//input[@id='customer.address.zipCode']")
        this.PhoneNumber = page.locator("//input[@id='customer.phoneNumber']")
        this.Ssn = page.locator("//input[@id='customer.ssn']")
        this.UserName = page.locator("//input[@id='customer.username']")
        this.Password = page.locator("//input[@id='customer.password']")
        this.Confirm = page.locator("//input[@id='repeatedPassword']")
        this.RegisterButton = page.locator("//input[@value='Register']")
    }

    async registerUser(fname, lname, address, city, state, zipcode, phonenumber, ssn, username, password) {
        await this.firstName.fill(fname)
        await this.lastName.fill(lname)
        await this.Address.fill(address)
        await this.City.fill(city)
        await this.State.fill(state)
        await this.Zipcode.fill(zipcode)
        await this.PhoneNumber.fill(phonenumber)
        await this.Ssn.fill(ssn)
        await this.UserName.fill(username)
        await this.Password.fill(password)
        await this.Confirm.fill(password)
    }

    async registerButtonclick()
    {
         await this.RegisterButton.click()
    }
}