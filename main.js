var input = "";
var num1 = "";
var num2 = "";
var firstnum = true;
var isresult = false;
var floatnum = false;
var resultval = "";
var oper = "";
var result = document.getElementById("output")

function fac(n)
{
    res = 1;
    for (var i = 1; i <= Math.floor(n); i++)
        res *= i;
    return res;
}

function update()
{
    result.innerHTML = isresult ? resultval : (firstnum ? num1 : num2);
    isresult = false;
}

function insert(n)
{
    console.log(">" + n)
    if (n == "." && floatnum) {
        window.alert("Illegal decimal point");
        return;
    } else if (n == ".") {
        console.log("><<>" + n)
        floatnum = true;
    }
    if (firstnum)
        num1 += n.toString();
    else
        num2 += n.toString();
    update();
}

function setoper(k)
{
    oper = k;
    floatnum = false;
    firstnum = false;
    if (k == 'p' || k == 'r' || k == '!') {
        calc();
        firstnum = true;
    }
}

function clear_()
{
    console.log("clear");
    input = "";
    num1  = "";
    num2  = "";
    firstnum = true;
    isresult = false;
    floatnum = false;
    resultval = "";
    oper = "";
    update();
}

function calc()
{
    a = Number(num1);
    b = Number(num2);

    switch (oper) {
    case '+':
        resultval = a + b;
        break;
    case '-':
        resultval = a - b;
        break;
    case '*':
        resultval = a * b;
        break;
    case '/':
        resultval = a / b;
        break;
    case '^':
        resultval = a ** b;
        break;
    case '!':
        resultval = fac(a);
        break;
    case 'r':
        resultval = Math.sqrt(a);
        break;
    case 'p':
        resultval = 1;
        for (var i = 2; i < Math.floor(a / 2); i++) {
            console.log(">> " + Math.floor(a) + " " + i);
            if (Math.floor(a) % i == 0) {
                resultval = 0;
                break;
            }
        }
        break;
    default:
        window.alert("No operator set");
        return;
    }

    isresult = true;
    floatnum = false;
    firstnum = true;
    num1 = "";
    num2 = "";
    update();
}
