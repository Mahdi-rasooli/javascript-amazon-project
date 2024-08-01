import { formatCurrency } from '../../javascripts/utils/money.js'


console.log('test suit : format currency');

console.log('convert cents into dollar');
if(formatCurrency(2095) === '20.95'){
    console.log('passed');
}  else{
    console.log('failed');
};


console.log('work with zero');
if(formatCurrency(0) === '0.00'){
    console.log('passed');
}  else{
    console.log('failed');
};


console.log('round up to nearest cents');
if(formatCurrency(2000.5) === '20.01'){
    console.log('passed');
}  else{
    console.log('failed');
};

console.log('round down to nearest cents');
if(formatCurrency(2000.4) === '20.00'){
    console.log('passed');
}  else{
    console.log('failed');
};

console.log('using negative');
if(formatCurrency(-1950) === '-19.50'){
    console.log('passed');
}  else{
    console.log('failed');
};

