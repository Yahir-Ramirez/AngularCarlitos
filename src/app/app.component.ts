import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
}


let signUp: HTMLElement | null = document.getElementById("signUp");
let signIn: HTMLElement | null = document.getElementById("signIn");
let nameInput: HTMLElement | null = document.getElementById("nameInput");
let title: HTMLElement | null = document.getElementById("title");

// Verificar que los elementos se hayan encontrado antes de operar con ellos
if (signUp && signIn && nameInput && title) {
  signIn.onclick = function () {
    if (nameInput) {
      nameInput.style.maxHeight = "0";
    }
    if (title) {
      title.innerHTML = "login";
    }
    if (signUp) {
      signUp.classList.add("disable");
    }
    if (signIn) {
      signIn.classList.remove("disable");
    }
  }

  signUp.onclick = function () {

    if (nameInput) {
      nameInput.style.maxHeight = "60px";
    }
    if (title) {
      title.innerHTML = "Registro";
    }
    if (signUp) {
      signUp.classList.add("disable");
    }
    if (signIn) {
      signIn.classList.remove("disable");
    }

  }

}
