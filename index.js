function receivesAFunction(callback) {
  callback ();
}

function  returnsANamedFunction() {
  return function guitarName(){
    console.log (`This is a Gibson Les Paul.`);
  }
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log (`This is an SG.`);
  }
}
