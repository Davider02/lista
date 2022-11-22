import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  empleados: any[] = [];
imagen: any;
imagen2: string; 


  constructor(private _empleadoService: EmpleadoService) {
    this.imagen2="https://www.vecinosdelacosta.com/wp-content/uploads/2021/11/team.jpg"

  }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados() {
    this._empleadoService.getEmpleados().subscribe(data => {
      this.empleados = [];
      data.forEach((element: any) => {
        this.empleados.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.empleados);
    });
  }
  eliminar(id:string){
    this._empleadoService.eliminar(id).then(()=> {
      console.log("Se elimino correctamente!");
    }).catch(error =>{
      console.log(error);
    })  
  }
}
