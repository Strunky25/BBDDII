import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ShowCardsComponent } from './components/show-cards/show-cards.component';
import { MatCardModule } from '@angular/material/card';
import { AltaContracteComponent } from './components/alta-contracte/alta-contracte.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormContracteComponent } from './components/form-contracte/form-contracte.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { ContractesComponent } from './components/contractes/contractes.component';
import { ContingutsComponent } from './components/continguts/continguts.component';
import { CategoriesFavoritesComponent } from './components/categories-favorites/categories-favorites.component';
import { ContingutComponent } from './components/contingut/contingut.component';
import { MatListModule } from '@angular/material/list';
import { MissatgesComponent } from './components/missatges/missatges.component';
import { SafePipe } from './pipes/safe-pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContingutsComponent,
    HeaderComponent,
    TabBarComponent,
    ShowCardsComponent,
    AltaContracteComponent,
    FormContracteComponent,
    ContractesComponent,
    CategoriesFavoritesComponent,
    ContingutComponent,
    MissatgesComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDialogModule,
    MatRadioModule,
    MatMenuModule,
    MatBadgeModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
