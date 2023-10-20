const calculatorPage = require("../../pageObjects/calculator.page");
const expect = require('chai').expect;

describe('Calculator', () => {
    beforeEach(() => {
        // clear all recent calculator activities
        calculatorPage.clear.click();
    });

    it('Verify that 1 + 1 = 2', async () => {
        calculatorPage.number1.click();
        calculatorPage.plus.click();
        calculatorPage.number1.click();
        calculatorPage.equals.click();
        const resultField = await calculatorPage.resultField;
        console.log(await resultField.getText());
        expect(await resultField.getText()).equal("2");
    })
})