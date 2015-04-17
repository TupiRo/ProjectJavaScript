/**
 * Class Calcutator that execute the basic functions Add, Subtraction, Multiplication and Division
 */
var Calculator = function(){
    /**
     * numeric value that save the results of the operations.
     * @type {number}
     */
    var result =  0;

    /**
     * Add numeric values.
     * @param number  num1
     * @param number  num2
     * @return number result add of numeric values.
     */
    this.add = function(num1, num2){
        if(num1==undefined && num2 == undefined)
        {
            throw('Error: Enter a value');
        }
        if(!isNaN(num1) && num2 == undefined)
        {
            result = result+num1;
            return result;
        }
        if(isNaN(num1) || isNaN(num2))
        {
            throw('Error: Invalid number');
        }
        result = num1 + num2;
        return result;
    };

    /**
     * Subtraction of numeric values.
     * @param number  num1
     * @param number  num2
     * @return number result of the subtraction of numeric values.
     */
	this.rest= function(num1, num2){

        if(num1==undefined && num2 == undefined)
        {
            throw('Error: Enter a value');
        }
        if(!isNaN(num1) && num2 == undefined)
        {
            result = result-num1;
            return result;
        }
        if(isNaN(num1) || isNaN(num2))
        {
            throw('Error: Invalid number');
        }
        result = num1 - num2;
        return result;
    };

    /**
     * Multiplication of numeric values.
     * @param number  num1
     * @param number  num2
     * @return number result of the multiplication of numeric values.
     */
	this.multiply= function(num1, num2){

        if(num1==undefined && num2 == undefined)
        {
            throw('Error: Enter a value');
        }
        if(!isNaN(num1)&& num2 == undefined)
        {
            result = result*num1;
            return result;
        }
        if(isNaN(num1) || isNaN(num2))
        {
            throw('Error: Invalid number');
        }
        result = num1 * num2;
        return result;
    };

    /**
     * Division of numeric values.
     * @param number  num1
     * @param number  num2
     * @return number result of the division of numeric values.
     */
	this.divide=function(num1, num2){

        if(num1==undefined && num2 == undefined)
        {
            throw('Error: Enter a value');
        }
        if((!isNaN(num1)&& (num2 == undefined)) && (num1 != 0))
        {
            result = result/num1;
            return result;
        }
        else
        {
            if((num2 == undefined) || (num2 == 0) || isNaN(num2))
                throw ('Error: Division "0" or entered an invalid number');
            else
            {
                result = num1 / num2;
                return result;
            }
        }
        result = num1 / num2;
        return result;
    };
};