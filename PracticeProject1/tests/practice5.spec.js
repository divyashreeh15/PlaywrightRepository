const {test, expect} = require("@playwright/test")
 
test("Acti time login form", async function display({page}){
    await page.goto("http://localhost/login.do")
})