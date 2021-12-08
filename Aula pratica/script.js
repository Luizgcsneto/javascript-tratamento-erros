function tratamentoErro(arr,num){
    try {
        if(!arr && !num) throw new ReferenceError('Parâmetros inválidos');

        if(typeof arr !== 'object') throw new TypeError('array passado não é um object');
    
        if(typeof num !== 'number') throw new TypeError('array preciso ser do tipo number');
    
        if(arr.length !== num) throw new RangeError("Tamanha inválido");

        return arr
    } catch (error) {
        if(error instanceof RangeError){
            console.log('esse erro é um RangeError!');
			// console.log(error.name);
			console.log(error.stack);
        } else if (error instanceof ReferenceError) {
			console.log('esse erro é um ReferenceError!');
			// console.log(error.name);
			console.log(error.stack);
        } else if (error instanceof TypeError){
            console.log('esse erro é um TypeError!');
            // console.log(error.name);
            console.log(error.stack);
        } else {
			console.log('Outro tipo de erro!');
			console.log(error.stack);
		}
    }
   
}

const meuArray = [12,4,3]

console.log(tratamentoErro(meuArray),3)

// function validaArrays(arr, num) {
// 	try {
// 		if (!arr && !num) throw new ReferenceError('Envie os parâmetros!');

// 		if (typeof arr !== 'object')
// 			throw new TypeError('Envie um elemento do tipo Array!');

// 		if (typeof num !== 'number')
// 			throw new TypeError('Envie um elemento do tipo Number!');

// 		if (arr.length !== num) throw new RangeError('Tamanho do array inválido!');

// 		return arr;
// 	} catch (e) {
// 		if (e instanceof RangeError) {
// 			console.log('RangeError!');
// 			console.log(e.stack);
// 		} else if (e instanceof ReferenceError) {
// 			console.log('ReferenceError!');
// 			console.log(e.stack);
// 		} else {
// 			console.log('Outro tipo de erro!');
// 			console.log(e.stack);
// 		}
// 	}
// }

// console.log(validaArrays([1, 2, 3], 0));

