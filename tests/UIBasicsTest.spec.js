const{test}=require('@playwright/test');

test('First Playwright Test with browser context', async ({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName=await page.locator('#username');
    const password=await page.locator('#password');
    const loginButton=await page.locator('#signInBtn');

    await userName.type('rahulshettyacademy ');
    await password.type('learning');
    await loginButton.click();
    console.log(await page.locator('[style*=block]').textContent());
});

test('First Playwright Test without browser context,with page context', async ({page})=>{
    await page.goto("https://www.google.com/");
});

test.only('Lets shop assignment',async({page})=>{
    const registerLink=await page.getByText('Register here');
    const firstName=await page.locator('#firstName');
    const lastName=await page.locator('#lastName');
    const email=await page.locator('#userEmail');
    const phone=await page.locator('#userMobile');
    const occupation=await page.locator('[formcontrolname=occupation]');
    const gender=await page.locator('[value=Male]');
    const password=await page.locator('#userPassword');
    const confirmPassword=await page.locator('#confirmPassword');
    const checbox=await page.locator('[type=checkbox]');
    const registerButton=await page.locator('#login');
    await page.goto('https://rahulshettyacademy.com/client/');
    

    // await registerLink.click();
    // await firstName.type("test1");
    // await lastName.type('test1');
    // await email.type('test@mailinator.com');
    // await phone.type('1234567890');
    // await page.selectOption('[formcontrolname=occupation]',[
    //     {
    //         index:3
    //     }
    // ]);
    // await gender.click();
    // await password.type('Password1');
    // await confirmPassword.type('Password1');
    // await checbox.click();
    // await registerButton.click();

    await email.type('tushar@mailinator.com');
    await password.type('Tushar@54');
    await registerButton.click();

    await page.pause();
})