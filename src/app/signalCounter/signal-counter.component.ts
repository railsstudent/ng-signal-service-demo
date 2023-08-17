import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTextComponent } from '../simpleText/simple-text.component';

@Component({
  selector: 'app-signal-counter',
  standalone: true,
  imports: [CommonModule, SimpleTextComponent],
  templateUrl: './signal-counter.component.html',
  styleUrls: ['./signal-counter.component.scss']
})
export class SignalCounterComponent {

}
