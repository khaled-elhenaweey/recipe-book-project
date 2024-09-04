import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingEditComponent { }
