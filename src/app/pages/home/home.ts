import { Component } from "@angular/core";
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="min-h-[70vh] flex flex-col justify-center items-center text-center px-4">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        Encontre sua próxima vaga em tecnologia
      </h1>

      <p class="text-gray-600 max-w-xl mb-8">
        O JobsFinder ajuda você a descobrir oportunidades em Front-end,
        Back-end e muito mais. Salve suas vagas favoritas e acompanhe com facilidade.
      </p>

      <a
        routerLink="/jobs"
        class="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition"
      >
        Ver vagas disponíveis
      </a>
    </section>
  `
})
export class HomePage {}
