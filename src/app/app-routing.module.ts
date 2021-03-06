import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "app",
    loadChildren: () => import("./main/main.module").then(m => m.MainModule)
  },
  { path: "", redirectTo: "app", pathMatch: "full" },
  {
    path: "error",
    loadChildren: () =>
      import("./exception/exception.module").then(m => m.ExceptionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
