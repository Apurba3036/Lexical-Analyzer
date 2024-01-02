function isPunctuator(ch) {
    return (
        ch === ' ' || ch === '+' || ch === '-' || ch === '*' ||
        ch === '/' || ch === ',' || ch === ';' || ch === '>' ||
        ch === '<' || ch === '=' || ch === '(' || ch === ')' ||
        ch === '[' || ch === ']' || ch === '{' || ch === '}' ||
        ch === '&' || ch === '|' || ch==='#' ||ch==='?'||ch==='!'||ch===':'||ch==='E'||ch==='^');
}


function isOperator(ch) {
    return ['+','++', '-','--','^','*','**', '/', '>', '<', '=','==', '|','||','&', '&&'].includes(ch);
}

function isKeyword(str) {
    const keywords = ['if', 'else', 'while', 'do', 'break', 'continue', 'int', 'double', 'for','cin',
        'float', 'return', 'char', 'case', 'long', 'short', 'typedef', 'switch','using','namespace','std',
        'unsigned', 'void', 'static', 'struct', 'sizeof', 'long', 'volatile','main','float', 'include', 'iostream'
         , 'long', 'typedef', 'enum', 'const', 'union', 'extern', 'bool', 'cout','cin','printf','scanf','function'];

    return keywords.includes(str);
}

function isNumber(str) {
    const validNumberRegex = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][-+]?\d+)?$/;
    return validNumberRegex.test(str) && !isNaN(Number(str));
}


function subString(realStr, l, r) {
    return realStr.substring(l, r + 1);
}

function validIdentifier(str) {
    if (str.match(/[0-9]/g) || isPunctuator(str[0])) {
        return false;
    }

    if (str.length === 1) {
        return true;
    } else {
        for (let i = 1; i < str.length; i++) {
            if (isPunctuator(str[i])) {
                return false;
            }
        }
    }

    return true;
}


function checkCode(str) {
    let left = 0;
    let right = 0;
    const len = str.length;
    const results = [];

    while (right <= len && left <= right) {
        if (!isPunctuator(str[right])) {
            right++;
        }

        if (isPunctuator(str[right]) && left === right) {
            if (isOperator(str[right])) {
                results.push(`${str[right]}--> <Token , Op>`);
            }
            right++;
            left = right;
        } else if ((isPunctuator(str[right]) && left !== right) || (right === len && left !== right)) {
            const sub = subString(str, left, right - 1);
            
            if (isKeyword(sub)) {
                results.push(`${sub}--> <Token , KW>`);
            } else if (isNumber(sub)) {
                results.push(`${sub}--> <Token , num>`);
            } else if (validIdentifier(sub) && !isPunctuator(str[right - 1])) {
                results.push(`${sub}--> <Token , id>`);
            } else if (!validIdentifier(sub) && !isPunctuator(str[right - 1])) {
                results.push(`${sub}--> Error: Variable can not start with a number or digit`);
            }

            left = right;
        }
    }

    return results;
}



document.getElementById('btn').addEventListener('click',function(){
    const code= document.getElementById('floatingTextarea1').value.replace(/[\r\n]+/g, '');
    //  const code = prompt('Enter your code: ');
     const result=checkCode(code);
     document.getElementById('floatingTextarea').value=result.join('\n');
})
document.getElementById('btn2').addEventListener('click',function(){
    document.getElementById('floatingTextarea1').value='';
    
     document.getElementById('floatingTextarea').value='';
})



const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
    let fr = new FileReader();
    fr.onload = function () {
        document.getElementById('floatingTextarea1').value= fr.result;
    };

  
    fr.readAsText(event.target.files[0]);
});





