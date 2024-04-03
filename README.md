# Grace ToDo App

### Kratek opis

Aplikacija nam bo pomagal pri beleženju naših nalog. Z njo bomo beležili naše domače naloge, hišna opravila in tudi kaj bolj zabavnega - kot npr. kateri film si želimo ogledati. Lahko bomo dodajali, urejali in brisali opravila, prav tako pa jih bomo lahko označili kot opravljena.

### Struktura

Aplikacijo bodo sestavljale naslednje komponente:

1. `App.jsx`: Ta bo hranila seznam vseh todo objektov. Prikazala `ShowTodos.jsx` in `AddTodo.jsx`.
2. `AddTodo.jsx` bo prikazala `form` za dodajanje novega todo objekta.
3. `ShowTodos.jsx` bo prikazala vse todo-je.
4. `Todo.jsx` bo prikazal en todo. `ShowTodos.jsx` bo z njim prikazal seznam vseh todo-jev.

## Navodila

### 0. komponente

1. Uporabljali bomo [shadcn komponente](https://ui.shadcn.com/docs/components/): izberi tiste, ki so glede na zahtevano funkcionalnosti najbolj primerne. Primer: za vnosno polje bomo uporabljali kar tale [input](https://ui.shadcn.com/docs/components/input).
2. Pri oblikovanju uporabi tudi na [tailwindcss](https://tailwindcss.com/) s katerim poskrbi, da je stran poravnan na sredini, da so odmiki primerni itd.

### I. Seznam todojev

1. V `App.jsx` definirajte `todos` state, ki bo hranil seznam vseh todo objektov. Na začetku naj bo seznam prazen.
2. V `App.jsx` definirajte funkcijo `addTodo`, ki bo sprejela `todo` objekt in ga dodala v seznam `todos`.

### II. Dodajanje todojev

1. V `AddTodo.jsx` definirajte state: `title`. Na začetku naj bo prazen string.
2. Naredite `form` in vanj dodajte `Input` polje, ki bo uporabniku omogočilo vnos naslova todo-ja. Input "povežite" s state-om `title`. (**Pozor: Input in input ni ista stvar!**)
3. Spomnite se na prejšnje srečanje, kjer lahko pogledate kako smo obravnavali podatke iz vnosnih polj.
4. Uporabite eventa kot sta `onChange` in `onClick` - enega boste uporabili pri vnosnem polju (input), drugega pa pri gumbu (button).
5. Funkcija, ki jo pokličete ob dogodku onClick naj v seznam `todos` doda nov `todo`.

### III. Prikaz todojev

1. V `ShowTodos.jsx` spišite zanko, ki bo za vsak element v seznamu `todos` uporabila komponento `Todo.jsx` in na nek - poljuben - način prikazala elemente iz seznama. Uporabite komponento iz shadcn, ki bo najbolj ustrezno prikazala element todo-ja.

### IV. Brisanje in urejanje todojev

1. Ko narediti že vse do sedaj opisane naloge, se lahko lotite še malo bolj zahtevnih. Implementirajte brisanje posameznih todo-jev. Dodajte gumb s križcem ali besedilom 'Briši' zraven posameznega todo-ja. Ob kliku nanj naj se todo odstrani.
2. Še malo zahtevnejše: dodajte še urejanje posameznih todo-jev. Razmislite kako boste najprej vizualno uredili urejanje tega todo-ja, nato pa še kako boste uredili pravi element v seznamu.
