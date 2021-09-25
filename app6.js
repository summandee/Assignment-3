


// let arr = [{id:1,name:"abc"},{id:1,name:"efg"},{id:2,name:"hij"},{id:3,name:"xyz"}]
// iterate the given array through map function and print the name and id



let arr = [ {id:1,name:"abc"},
            {id:1,name:"efg"},
            {id:2,name:"hij"},
            {id:3,name:"xyz"} ]

  let b = arr.map(dataRec);

  function dataRec (x){
          console.log(x);
        }
    dataRec(arr[1]);