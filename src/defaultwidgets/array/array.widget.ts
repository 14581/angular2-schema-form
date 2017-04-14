import { Component } from '@angular/core';

import { ArrayLayoutWidget } from '../../widget';

@Component({
  selector: 'sf-array-widget',
  template: `<div class="widget form-group">
	<label [attr.for]="id" class="horizontal control-label">
		{{ schema.title }}
	</label>
	<span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
  <div class="add-button-container">
    <button (click)="addItem()" class="btn btn-default array-add-button">
      <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add
    </button>
  </div>
	<div *ngFor="let itemProperty of formProperty.properties; let i=index; trackBy:trackByIndex" style="position:relative">
		<sf-form-element [formProperty]="itemProperty"></sf-form-element style="position:absolute">
    <button (click)="removeItem(i)" class="btn btn-default array-remove-button" style="position:absolute;top:0px;right:0px;">
			<span class="glyphicon glyphicon-minus" aria-hidden="true"></span> Remove
		</button>
	</div>
</div>`
})
export class ArrayWidget extends ArrayLayoutWidget {

  addItem() {
    this.formProperty.addItem();
  }

  removeItem(index: number) {
    this.formProperty.removeItem(index);
  }

  trackByIndex(index: number, item: any) {
    return index;
  }
}
