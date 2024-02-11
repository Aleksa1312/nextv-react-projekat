# Uvod
Ovaj projekat je seminarski rad za predmet Elektronskog Poslovanja.

### NextTV je platforma za pronalazenje filmova i serija kao i za deljenje misljenja o vec pogledanim filmovima i serijama.

# Tehnologije
Koriscene tehnologije su: React.js, Next.js, TypeScript, Tailwindcss, Supabase, TMDB Api, Jotai.
Biblioteke za komponente: RadixUI, cmdk, embla-carousel-react.

# Struktura foldera
Projekat je podeljen preme next.js-ovom principu gde app se koristi app router za ssr.
- U App folderu se nalaze sve stranice, layoutovi i ostalo.
- Komponente su podeljene po modulima, gde svaki modul predstavlja jednu funkciju na sajtu. Npr. sve komponente util-i i ostalo sto ima veze za auth se nalaze u auth modulu, itd.

# State
Za state managment izmedju udaljenih komponenti su se najvise koristili ReactContext i Jotai.

# Autentikacija
Za autentikaciju je koriscen supabase kao baza podataka.

# Komentari
Za komentare je takodje koriscen supabase kao baza podataka. Samo autentikovani korisnici mogu da postavljaju komentare pomocu RLS-a.

# API
Provider za statistiku o filmovima je TMDB (The Movie Database) a SDK koji olaksava pristupu ovog api-a je moviedb-promise.
