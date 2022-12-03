import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ToastSharedService } from 'app/shared/services/toast-shared.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'name', 'type', 'manufacturingDate', 'unitPrice', 'quantityProduced', 'action'];
  dataSource: any = new MatTableDataSource([]);

  constructor(
    private _service: ProductService, 
    private _toast: ToastSharedService
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      let response = await this._service.getAll();
      
      if((response.body || []).length > 0) {
        this.dataSource = new MatTableDataSource(response.body);
      } else {
        this._toast.openWarning('Dados não encontrados!');
      }
    } catch (error) {
      this._toast.openError('Falha ao carregar dados!');
    }
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
