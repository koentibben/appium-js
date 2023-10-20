class CalculatorPage {
  // numbers
  get number1() { return $('//android.widget.ImageButton[@content-desc="1"]'); }
  get number2() { return $('//android.widget.ImageButton[@content-desc="2"]'); }
  get number3() { return $('//android.widget.ImageButton[@content-desc="3"]'); }
  get number4() { return $('//android.widget.ImageButton[@content-desc="4"]'); }
  get number5() { return $('//android.widget.ImageButton[@content-desc="5"]'); }
  get number6() { return $('//android.widget.ImageButton[@content-desc="6"]'); }
  get number7() { return $('//android.widget.ImageButton[@content-desc="7"]'); }
  get number8() { return $('//android.widget.ImageButton[@content-desc="8"]'); }
  get number9() { return $('//android.widget.ImageButton[@content-desc="9"]'); }

  // operators
  get equals() { return $('//android.widget.ImageButton[@content-desc="equals"]'); }
  get plus() { return $('//android.widget.ImageButton[@content-desc="plus"]'); }
  get minus() { return $('//android.widget.ImageButton[@content-desc="minus"]'); }
  get multiply() { return $('//android.widget.ImageButton[@content-desc="multiply"]'); }
  get divide() { return $('//android.widget.ImageButton[@content-desc="divide"]'); }
  get percent() { return $('//android.widget.ImageButton[@content-desc="percent"]'); }

  // result
  get resultField() { return $('//android.widget.TextView[@resource-id="result_final"]'); }

  // clear state
  get clear() { return $('//android.widget.ImageButton[@content-desc="clear"]'); }
}
module.exports = new CalculatorPage();