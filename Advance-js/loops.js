// for loop

    for(let n = 4; n<=10;n=n+2){
        // console.log(n)
    }

    // print even number 
    // console.log("print even number")
    for(let n = 0; n<=10;n=n+2){
        // console.log(n)
    }

    // print odd number 
    // console.log("print odd number")
    for(let n = 1; n<=10;n=n+2){
        // console.log(n);
    }

    // backword loop
    // console.log("backword loop")
    for(let n = 10; n>=0;n=n-2){
        // console.log(n);
    }

    // nested loop
    // print tables
    // console.log("print Tables")
    for(let i = 1;i<=10;i++){
        // console.log(`${i} Table`)
        for(let j = 1;j<=10;j++){
            // console.log(i+'*'+j+'='+i*j);
        } 
    }


    // while loop
    let i = 0;
    while(i<=10){
        // console.log( `number ${i}`);

        i=i+2;
    }

    let j = 10;
    while(j>=0){
        // console.log( `number ${j}`);
        j=j-2;
    }


    // do-while loop
    let score = 0;
    let arr = ["sahith","vinesh","sri","cherry"]
    do{
        if(score<arr.length){
            console.log(`your score is ${score} ${arr[score]}`)
        }
        score++;
    }while(score<=5);