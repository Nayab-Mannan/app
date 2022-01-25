import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


import { AbcComponent } from './abc/abc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
// import { FlexLayoutModule } from '@angular/flex-layout';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { DesignComponent } from './design/design.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDialogModule } from "@angular/material/dialog";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import {MatChipsModule} from '@angular/material/chips';
import { GridListComponent } from './grid-list/grid-list.component';
import {MatSelectModule} from '@angular/material/select';
import { PopupComponent } from './popup/popup.component';
import { TemplateComponent } from './template/template.component';
import {MatSliderModule} from '@angular/material/slider';
import { TemplateSecondComponent } from './template-second/template-second.component';
import { DemoComponent } from './demo/demo.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule} from '@angular/forms';
import { DropDownWorkComponent } from './drop-down-work/drop-down-work.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule,} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularDesignComponent } from './angular-design/angular-design.component';
// import { ActivatedRoute } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { AppHeaderComponent } from './app-header/app-header.component';
import { InputComponent } from './input/input.component';
import { AngularMaterialsComponent } from './angular-materials/angular-materials.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NewDesignComponent } from './new-design/new-design.component';
import { NewTableComponent } from './new-table/new-table.component';
import { ChartComponent } from './chart/chart.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ChartDataComponent } from './chart-data/chart-data.component';
import { MindUiComponent } from './mind-ui/mind-ui.component';
import { InformaticsComponent } from './informatics/informatics.component';
import { CsvFileComponent } from './csv-file/csv-file.component';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { PaginationComponent } from './pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';

// import { PlotlyModule } from 'angular-plotly.js';

// import Plotly from 'plotly.js-dist'

const routes: Routes = [{

  path:'Update/:id',component:UpdateComponent
},
{

  path:'Update/:id/Home',component:DropDownWorkComponent
},
{
  path:'',component:AngularDesignComponent
  },
{
path:'input',component:InputComponent
}
];








@NgModule({
  declarations: [
    AppComponent,
     AbcComponent,
     DesignComponent,
     DialogBoxComponent,
     GridListComponent,
     PopupComponent,
     TemplateComponent,
     TemplateSecondComponent,
     DemoComponent,
     DropDownWorkComponent,
     UpdateComponent,
     AngularDesignComponent,
     AppHeaderComponent,
     InputComponent,
     AngularMaterialsComponent,
     NewDesignComponent,
     NewTableComponent,
     ChartComponent,
     ChartDataComponent,
     MindUiComponent,
     InformaticsComponent,
     CsvFileComponent,
     PaginationComponent,
     
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    // FlexLayoutModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatExpansionModule,
    MatPaginatorModule,
     MatCardModule,
     MatGridListModule,
     MatTabsModule,
     MatCheckboxModule,
     MatDialogModule,
     MatChipsModule,
     MatSelectModule,
     MatSliderModule,
     MatAutocompleteModule,
     ReactiveFormsModule,
     MatMenuModule,
     MatSlideToggleModule,
     FormsModule,
     CommonModule,
     HttpClientModule,
     MatListModule,
     MatProgressSpinnerModule,
     MatSidenavModule,
     MatStepperModule,
     MatSnackBarModule,
     RouterModule.forRoot(routes),
    MatTooltipModule,
    NgxCsvParserModule,
    NgxPaginationModule
    // PlotlyModule
    
     
     
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

