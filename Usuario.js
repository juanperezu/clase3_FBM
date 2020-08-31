class Usuario{
constructor(id,nombre, clave,perfil){
this.id=id;
this.nombre=nombre;
this.clave=clave;
this.perfil=perfil;

}// constructor de la clase
crear(){
console.log(`Usuario creado ${this.nombre}, ${this.perfil}`);

}

editar(){
    console.log(`Usuario editado ${this.nombre}, ${this.perfil}`);
    
    }


}// fin de la clas
const Admin = new Usuario("01","Pedro","123","Administrador");
console.log(Admin.crear());
//export default Usuario;