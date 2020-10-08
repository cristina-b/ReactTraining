const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const double = a => a*2;

function chain()
{

}

const c = chain({add, substract, double});
c.sum(5,3).double().subtract(10).execute();
c.subtract(5,10).double().double().add(22);