import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent { 
  columnDefs = [{ field: "make" }, { field: "model" }, { field: "price" }, { field: "liters" }];

  rowData = [
    { make: "Toyota", model: "Celica", price: 35000, liters: 1.6 },
    { make: "Ford", model: "Mondeo", price: 32000, liters: 2.0 },
    { make: "Porsche", model: "Boxter", price: 72000, liters: 7.1 },
    { make: "Nissan", model: "Silvia", price: 65000, liters: 5.2 },
    { make: "Mazda", model: "Miata", price: 35000, liters: 2.5 }
  ];
}