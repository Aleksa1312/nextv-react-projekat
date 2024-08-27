# Uvod

Radili: 
- Aleksa Simovic 0388/2023
- Ognjen Urukalo 0361/2023

Ovaj projekat je seminarski rad za predmet Elektronskog Poslovanja na Fakultetu Organizacionih Nauka.

**NextTV je platforma za pronalazenje filmova i serija kao i za deljenje misljenja o vec pogledanim filmovima i serijama.**

## Tehnologije

- Koriscene tehnologije su: React.js, Next.js, TypeScript, Tailwindcss, Supabase, TMDB Api, Jotai.
- Biblioteke za komponente: shadcn/ui, radixui, cmdk, embla-carousel-react.

## Struktura foldera

Projekat je koristi App router koji sluzi za file-based routing gde svaki folder dodaje svoje ime u link, npr. u sledecem primeru imamo projekat sa 2 stranice. Jedna stranica je home page na ruti `/` i druga details stranica na ruti `/details/`

```
app/
  page.tsx
  details/
    page.tsx
```


- U App folderu se nalaze sve stranice, layoutovi i ostalo.
- Komponente su podeljene po modulima, gde svaki modul predstavlja jednu funkciju na sajtu. Npr. sve komponente util-i i ostalo sto ima veze za auth se nalaze u auth modulu, itd.

```
.
└── nextv-react-projekat/
    ├── app/
    │   ├── layout.tsx
    │   └── ...stranice
    ├── modules/
    │   └── some-module/
    │       ├── actions/
    │       │   └── ...actions
    │       ├── hooks/
    │       │   └── ...hooks
    │       ├── components/
    │       │   └── ...components
    │       └── templates/
    │           └── ...templates
    └── lib/
        └── ...utils
```

## State

Za state managment izmedju udaljenih komponenti su se najvise koristili ReactContext i Jotai.

## Autentikacija

Za autentikaciju je koriscen supabase kao baza podataka.

## Komentari

Za komentare je takodje koriscen supabase kao baza podataka. Samo autentikovani korisnici mogu da postavljaju komentare pomocu RLS-a.

## API

Provider za statistiku o filmovima je TMDB (The Movie Database) a SDK koji olaksava pristupu ovog api-a je moviedb-promise.

### Showcase

Ovaj React/Nextjs projekat je takodje hostovan na vercel-u gde mu mozete pristupiti putem sledeceg [link-a](https://nextv-react-projekat.vercel.app).

### Header

![Screen Shot 2024-02-16 at 13 24 04](https://github.com/Aleksa1312/nextv-react-projekat/assets/102186502/23fe88f5-a30d-4a5b-a03c-78ddceb7d7dc)

U header-u se nalaze komponente za menjanje teme (light, dark), quick search, kao i komponente za login i registraciju.

Search Komponenta
![image](https://github.com/Aleksa1312/nextv-react-projekat/assets/102186502/258f5f0a-2151-4811-9ddb-6d3dddd35d55)

- Unosenjem teksta se sa useEffectom salje zahtev za trazenje filmova i serija sa slicnim imenom.


### Login i Registracija

![image](https://github.com/Aleksa1312/nextv-react-projekat/assets/102186502/09293ade-6fd5-4540-b1ab-a0a804fb6585)

- login i registracija se mogu izvrsiti putem "/auth" stranice a kao login provider se koristi supabase built in user tabela.
- korisnik je obavesten ukoliko nije ukucao dobar email ili je pogresio `confirmPassword` polje.
- za verifikaciju unetih podataka se koristi biblioteke `zod` i `use-form`.

- login se takodje moze izvrsiti putem login modala

![Screen Shot 2024-02-16 at 13 30 49](https://github.com/Aleksa1312/nextv-react-projekat/assets/102186502/99008485-892d-4b53-95b3-bfcd405a4167)


(dark theme):
![image](https://github.com/Aleksa1312/nextv-react-projekat/assets/102186502/3ba051dc-557e-4222-91da-b204d864be45)


### Home stranica

![image](https://github.com/Aleksa1312/nextv-react-projekat/assets/102186502/bdcf286c-85f3-41fa-8309-bd2862364ad0)

Sadrzi sledece komponente:
- Hero slider
- Top Rated TV Shows
- Top Rated Movies

### Discover Stranica

![image](https://github.com/Aleksa1312/nextv-react-projekat/assets/102186502/eec7486f-9a72-4ae8-97b3-06df29686085)

- Napravljena za pronalazenje serija i filmova po kategorijama.
- Biranje tipa (TV, Movie)
- Biranje kategorija (Animation, Drama, Documentary...)

![image](https://github.com/Aleksa1312/nextv-react-projekat/assets/102186502/e46d5e4f-9d45-4417-ac94-fc01fd8f6f6f)
![image](https://github.com/Aleksa1312/nextv-react-projekat/assets/102186502/e7267529-5bda-41d3-a2fb-534e86c9781d)


### Details Stranica

Sluzi za detaljnije pregledanje filmova i serija.

![image](https://github.com/Aleksa1312/nextv-react-projekat/assets/102186502/36b12ff1-7d0b-45ea-8621-41d2a5d1f98b)

- Mozemo pogledati godinu proizovdnje filma/serije.
- Mozemo pogledati banner, prosecnu ocenu itd...
- Mozemo ostaviti komentar (ukoliko smo ulogovani)

![image](https://github.com/Aleksa1312/nextv-react-projekat/assets/102186502/c48b7bcf-aea6-4fb4-9973-414eacc56abd)

- Ukoliko smo ulogovani kao vlasnik komentara takodje imamo opciju da obrisemo komentar:

![image](https://github.com/Aleksa1312/nextv-react-projekat/assets/102186502/4265b876-b265-4660-ba62-a98b429a0579)
![image](https://github.com/Aleksa1312/nextv-react-projekat/assets/102186502/52744c33-bf3b-42fe-9493-fdc265d51846)

### Footer

![Screen Shot 2024-02-16 at 13 47 06](https://github.com/Aleksa1312/nextv-react-projekat/assets/102186502/57109a12-5fd7-419b-9640-7cd1b47b8cee)

- Sluzi za brzu navigaciju kroz website i socijalne mreze (koje ne postoje :D)
- Napravljen je od css grida koji je responsive na svim velicinama ekrana


### Za kraj

Nadamo se da Vam se svideo nas seminarski rad.
