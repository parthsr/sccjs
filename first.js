function foo()
{
  var quux = 5;
  function zip ()
  {
    quux = 10;
    console.log(quux);
  }
  console.log(quux);
  return zip;
}
var func = foo();
console.log(func());
