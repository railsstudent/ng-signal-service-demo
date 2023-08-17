import { Routes } from '@angular/router';
import { SubjectCounterComponent } from './subjectCounter/subject-counter.component';
import { SignalCounterComponent } from './signalCounter/signal-counter.component';

export const routes: Routes = [
    {
        path: 'subject-in-a-service',
        component: SubjectCounterComponent
    }, 
    {
        path: 'signal-in-a-service',
        component: SignalCounterComponent,
    }
];
