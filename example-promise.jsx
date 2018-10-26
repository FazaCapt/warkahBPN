// function getTempCallback (location, callback){
//     callback(undefined, '78');
//     callback('City Not Found');
// }

// getTempCallback('Bandung', function(err, temp){
//     if(err){
//         console.log('error', err);
//     } else {
//         console.log('success', temp)
//     }
// })

// function getTempPromise(location){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve(73);
//             reject('City Not Found')
//         }, 1000);
        
//     })
// }

// getTempPromise('Bandung').then(function(temp){
//     console.log('Promise Success', temp);
// }, function (err){
//     console.log('Promise error');
// })


function addPromise(a, b){
    return new Promise(function(resolve, reject){
        if (typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        } else {
            reject('a and b to need number');
        }
    })
}

addPromise(7,9).then(function(c){
    console.log('Add Promise Success', c);
}, function(err){
    console.log('Promise Error');
})

addPromise('Faza',9).then(function(c){
    console.log('Add Promise Success', c);
}, function(err){
    console.log('Promise Error', err);
})