import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();

  customPaginatorIntl.itemsPerPageLabel = '';

  return customPaginatorIntl;
}
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
export interface Driver {
  nom: string;
  prenom: string;
  adresse: string;
  permis: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-driver-table',
  templateUrl: './driver-table.component.html',
  styleUrls: ['./driver-table.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class DriverTableComponent implements AfterViewInit {

  @Input()
  displayedColumns: string[] = ['action', 'nom', 'prenom', 'adresse', 'permis'];
  @Input()
  dataSource: MatTableDataSource<Driver>;

  // @ViewChild(MatPaginator) paginator: MatPaginator ;
  @ViewChild(MatSort)
  sort!: MatSort ;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private cdRef: ChangeDetectorRef,
    public dialog: MatDialog,) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    const users = Array.from({length: 100}, (_, k) => createNewDriver(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; 
    this.dataSource.sort = this.sort;
  }
  @ViewChild('addnewItem', { static: true, read: TemplateRef })
  public template!: TemplateRef<any>;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  AddItem() {
    const dialogRef = this.dialog.open(this.template, {
      width: '250px',
      data: {},
      minWidth: '90vw',
      maxHeight: '80vh',
      disableClose: true,
      panelClass: 'custom-dialog-container',
    });
    dialogRef.afterClosed().subscribe((result) => {
      // this.getArticle();
    });
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
  

}
function createNewDriver(id: number): Driver {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  
    return {
      nom: id.toString(),
      prenom: name,
      adresse: Math.round(Math.random() * 100).toString(),
      permis: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };///////////
  }