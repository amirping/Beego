import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar';
import { ComboChartComponent } from './combo-chart/combo-chart';
@NgModule({
	declarations: [SearchBarComponent,
    SearchBarComponent,
    ComboChartComponent],
	imports: [],
	exports: [SearchBarComponent,
    SearchBarComponent,
    ComboChartComponent]
})
export class ComponentsModule {}
