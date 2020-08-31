let materiales = ['oxigeno', 'Heli', 'Litio', 'Berilio','carbono','hierro','aluminio'];
// n=7 primero  i =0; el último i = n-1
// () funciones  métodos
//{ } serie de acciones  cuerpo del método función
{
let a=5;
console.log(a);
}// contexto
for(let i=0;i<materiales.length;i++){
console.log("pos ("+i+"): " + materiales[i]  );

}// fin para i

console.log(materiales.map(material=>material.length));
console.log(materiales.map(material=>material));

