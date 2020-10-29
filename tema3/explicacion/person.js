function Person() {
    // The Person() constructor defines `this` as itself.
    this.age = 0;
  
    setInterval(function growUp() {
      // In nonstrict mode, the growUp() function defines `this` 
      // as the global object, which is different from the `this`
      // defined by the Person() constructor.
      this.age++;
    }, 1000);
  }
  
  var p = new Person();
  // en este caso tenemos que usar la funcion arrow para solucionarlo
  // ya que si no toma como this a window, y no a nuestro objeto

  function Person() {
    
    this.age = 0;
  
    setInterval( () => this.age++ , 1000) };
      // In nonstrict mode, the growUp() function defines `this` 
      // as the global object, which is different from the `this`
      // defined by the Person() constructor.
      this.age++;

  }