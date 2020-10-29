/*function compare(a, b) {
    if (a is less than b by some ordering criterion) {
      return -1;
    }
    if (a is greater than b by the ordering criterion) {
      return 1;
    }
    // a must be equal to b
    return 0;*/

    function compareNumbers(a, b) {
        return a - b;
      }

      let myArray = new Array(4, 1, 12,2, 22)
      myArray.sort(compareNumbers); // no le pongo() porque es un callback

      // con arrow queda mas limpio

      // para comentar alt+shift+a