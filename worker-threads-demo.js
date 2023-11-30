const { Worker, isMainThread, parentPort,workerData } = require('worker_threads');

if(isMainThread) {
    //This is the main thread
    //create a new worker thread and pass data to it

    const worker = new Worker(__filename,{
        workerData: {number:5}   //you can pass any data needed by the worker thread
        
    });
    //listen for messages from the worker thread

    worker.on('message',result=>{
        console.log(`Factorial result: ${result}`);
    })

    //listen for errors from the worker thread
    worker.on('error',err=>{
        console.error(err)
    });

    //listen for the worker thread to exit
    worker.on('exit', code=>{
        if(code !== 0){
            console.error(`worker stopped with exit code ${code}`)
        }
    })
}

    else{
        //This is the worker thread
        //perform the factorial calculation
        function calculateFactorail(n){
            if(n===0 || n===1){
                return 1;
            }
                else{
                    return n* calculateFactorail(n-1)
                }
            
        }

        // get data from the main thread
       const  {number} = workerData
        //calculate factorial and send the result back to the main thread
        const result = calculateFactorail(number);
        parentPort.postMessage(result);
    }
