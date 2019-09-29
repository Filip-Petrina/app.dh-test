import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@guard/auth-guard.service';


const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./page/login/login.module').then(m => m.LoginModule),
    },
    {
        path: 'encode',
        loadChildren: () => import('./page/encode/encode.module').then(m => m.EncodeModule),
        canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: 'login' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
