function Numbers (firstNum, secondNum) {

    this.firstNum = firstNum; // public variable
    this.secondNum = secondNum;

    var result = 0; // private variable


    //methods
    this.add = function () {
        result = this.firstNum + this.secondNum;
        console.log("sum is : "+ result)
    }
    this.substract = function () {
        result = this.firstNum - this.secondNum;
        console.log("result is : "+ result)
    }
    this.multiply = function () {
        result = this.firstNum * this.secondNum;
        console.log("result is : "+ result)
    }
    this.divide = function () {
        result = this.firstNum / this.secondNum;
        console.log("result is : "+ result)
    }
}

var result1 = new Numbers (20, 10);

result1.add();
result1.substract();
result1.multiply();
result1.divide();