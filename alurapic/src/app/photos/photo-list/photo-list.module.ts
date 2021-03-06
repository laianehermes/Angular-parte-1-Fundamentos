import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from '../../shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module';
import { ToggleModule } from 'src/app/shared/components/toggle/toggle.module';
import { DragInDropModule } from 'src/app/shared/components/drag-in-drop/drag-in-drop.module';
import { AutoCompleteModule } from '../../shared/components/auto-complete/auto-complete.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent,
    ],
    imports: [ 
        CommonModule,
        PhotoModule,
        CardModule, 
        DarkenOnHoverModule,
        ToggleModule,
        DragInDropModule,
        AutoCompleteModule
    ]
})
export class PhotoListModule {}