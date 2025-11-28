import React from "react";
import "./Comprar.css";

export default function Comprar(){
    return(
        <div className="contenedor-formulario">
            <header className="cabezal">
                <h1 className="titulo">Venta de Escanners</h1>
            </header>
        <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Nombre Completo</label>
            <input value={"Sandra Maldonado"} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Producto</label>
            <input value={"Escaner Fujitsu"} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
             </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Precio</label>
            <input value={"7000"} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
           
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Fecha Venta</label>
            <input value={"2025-11-19"} type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Ciudad</label>
            <input type="text" value={"Tarija"} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Observaciones</label>
            <textarea focus="true" value={"Ninguno"} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" c />
            
        </div>
        <button type="reset" className="btn btn-secondary">Cancelar</button>
        <button type="submit" class="btn btn-success">Submit</button>
        </form>
</div>
    )
}