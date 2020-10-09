const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const double = a => a*2;

function chain(functions) 
{
    class Chain 
    {
        constructor(val) 
        {
            this.execute = () => val;
        }
    }

    for(let fn in functions)
    {
        Chain.prototype[fn] = function (a, b) 
        {
            let currentValue = this.execute();
            if (currentValue === null) 
            {
                args = [a, b]  //first function
            }
            else
            {
                args = [value, a]; //adding new parameters
            }             
            return new Chain(functions[fn](...args));
        }

        Chain.prototype.sum = function(a,b)
        {
            return a+b;
        }
    }
    return new Chain(null);
}

const c = chain({add, subtract, double});

let result = c.sum(5,3).double().subtract(10).execute();
console.log(result);

let result2 = c.subtract(5,10).double().double().sum(22).execute();;
console.log(result2);