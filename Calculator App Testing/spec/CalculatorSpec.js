describe("Calculator", function() {
    var calculator;
    var val1;
    var val2;
  
    beforeEach(function() {
      val1 = 10;
      val2 = 5;
     calculator = new Calculator();
    });

  //  AfterEach(function() {
    //    calculator = null;
    //});

    /**
     * Test Cases to Functionality of Add.
     */
    describe("Function Add", function() {

        /**
         * Test Case to verify the Add of two numbers.
         */
        it("should be able to add two numbers", function () {
            var actualResult = calculator.add(val1, val2);
            var expectResult = val1 + val2;
            expect(actualResult).toEqual(expectResult);
        });

        /**
         * Test Case to verify the add of one number.
         */
        it("should be able to add one numbers", function () {
            var actualResult = calculator.add(2);
            var expectResult = 0 + 2;
            expect(actualResult).toEqual(expectResult);
        });

        /**
         * Test Case to verify the validation  of the entered values.
         */
        it("should not be able to add one number and one letter", function () {
            expect(function(){calculator.add(val1,'R');}).toThrow('Error: Invalid number');
        });

        /**
         * Test Case to verify the validation  of the entered values.
         */
        it("should not be able to add two letters", function () {
            expect(function(){calculator.add('Z','R');}).toThrow('Error: Invalid number');
        });
    });

    /**
     * Test Cases to Functionality of Subtraction.
     */
    describe("Function Subtraction", function() {

        /**
         * Test Case to verify the Subtraction of two numbers.
         */
        it("should be able to subtract two numbers", function () {
            var actualResult = calculator.rest(val1, val2);
            var expectResult = val1 - val2;
            expect(actualResult).toEqual(expectResult);
        });

        /**
         * Test Case to verify the subtraction of one numbers.
         */
        it("should be able to subtract one number", function () {
            var actualResult = calculator.rest(1);
            var expectResult = 0 - 1;
            expect(actualResult).toEqual(expectResult);
        });

        /**
         * Test Case to verify the validation  of the entered values.
         */
        it("should not be able to subtract one number and one letter", function () {
            expect(function(){calculator.rest(val1,'R');}).toThrow('Error: Invalid number');
        });

        /**
         * Test Case to verify the validation  of the entered values.
         */
        it("should not be able to subtract two letters", function () {
            expect(function(){calculator.rest('Z','R');}).toThrow('Error: Invalid number');
        });
    });

    /**
     * Test Cases to Functionality of Multiplication.
     */
    describe("Function Multiplication", function() {

        /**
         * Test Case to verify the Multiplication of two numbers.
         */
        it("should be able to multiply two numbers", function () {
            var actualResult = calculator.multiply(val1, val2);
            var expectResult = val1 * val2;
            expect(actualResult).toEqual(expectResult);
        });

        /**
         * Test Case to verify the Multiplication of one number.
         */
        it("should be able to multiply one number", function () {
            var actualResult = calculator.multiply(2);
            var expectResult = actualResult * 2;
            expect(actualResult).toEqual(expectResult);
        });

        /**
         * Test Case to verify the validation  of the entered values.
         */
        it("should not be able to multiply one number and one letter", function () {
            expect(function(){calculator.multiply(val1,'R');}).toThrow('Error: Invalid number');
        });

        /**
         * Test Case to verify the validation  of the entered values.
         */
        it("should not be able to multiply two letters", function () {
            expect(function(){calculator.multiply('Z','R');}).toThrow('Error: Invalid number');
        });
    });

    /**
     * Test Cases to Functionality of Division.
     */
    describe("Function Division", function() {

        /**
         * Test Case to verify the Division of two numbers.
         */
        it("should be able to divide two numbers", function () {
            var actualResult = calculator.divide(val1, val2);
            var expectResult = val1 / val2;
            expect(actualResult).toEqual(expectResult);
        });

        /**
         * Test Case to verify the Division of one number.
         */
        it("should be able to divide one number", function () {
            var actualResult = calculator.divide(2);
            var expectResult = actualResult / 2;
            expect(actualResult).toEqual(expectResult);
        });

        it("should not be able to divide one number and one letter", function () {
            expect(function(){calculator.divide(val1,'R');}).toThrow('Error: Division "0" or entered an invalid number');
        });

        it("should not be able to divide by 0", function () {
            expect(function(){calculator.divide(val1,0);}).toThrow('Error: Division "0" or entered an invalid number');
        });
    });
    
});