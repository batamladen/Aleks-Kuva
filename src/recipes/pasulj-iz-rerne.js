// 🍲 RECEPT: Pasulj iz rerne
// Kopiraj ovaj fajl kao template za novi recept!

const recept = {
  // URL slug — ovo ide u adresu pretraživača (bez razmaka, samo crtice)
  slug: 'pasulj-iz-rerne',

  // Naslov recepta
  title: 'Pasulj iz rerne',

  // Kratki opis (za kartice na listi)
  opis: 'Kremasti pasulj pečen polako u rerni, sa dimljenom slaninom i povrćem. Mamina stara tajna.',

  // Kategorija
  kategorija: 'Glavno jelo',

  // Vreme pripreme i pečenja
  vremePripreme: '20 min',
  vremeKuvanja: '2 sata',

  // Broj porcija
  porcije: 4,

  // Slika gotovog jela (opciono — URL do slike)
  // Prikazuje se kao pozadina na kartici i kružić gore desno u receptu
  slika: 'https://i.imgur.com/nlHYqNQ.jpg',

  // Slika svih sastojaka (opciono — URL do slike)
  // Prikazuje se ispod liste sastojaka u receptu
  slikaSastojaka: 'https://i.imgur.com/sB1gCCf.jpg',

  // Tagovi za pretragu
  tagovi: ['pasulj', 'rerna', 'zimsko', 'mamina kuhinja'],

  // Je li iz mamine kuhinje?
  maminaKuhinja: true,

  // Datum objave
  datum: '2026-05-05',

  // Lista sastojaka
  // format: "količina naziv"
  sastojci: [
    '500g belog pasulja (potopljenog preko noći)',
    '200g dimljene slanine',
    '2 šargarepe',
    '2 stapke celera',
    '1 glavica luka',
    '4 čena belog luka',
    '2 kašike paradajz pirea',
    '1 lovorov list',
    'So i biber po ukusu',
    '500ml supe od povrća ili vode',
  ],

  // Koraci pripreme — svaki string je jedan korak
  // Možeš koristiti **podebljano** i *kurziv* za formatiranje
  koraci: [
    'Pasulj potopi u vodu **dan pre** i ostavi da stoji. Sutradan ocedi i isperi.',
    'Rernu zagrij na **180°C**. Slaninu iseci na kockice i proprži na ulju u šerpi koja može u rernu.',
    'Dodaj sitno sečen luk, šargarepu i celer. Prži još **5-7 minuta** dok ne omekšaju.',
    'Ubaci beli luk i paradajz pire, prži još minut uz mešanje.',
    'Dodaj oceđeni pasulj, lovorov list, so i biber. Prelij supom — tečnost treba da prekrije pasulj za prst.',
    'Poklopi i stavi u rernu na **2 sata**. Na sat vremena proveri i dolij vode ako treba.',
    'Poslednjh 20 minuta skini poklopac da se zgusne i dobije lepa korica odozgo.',
    'Izvadi lovorov list, proveri začine i serviraj uz hleb.',
  ],

  // Napomene / saveti (opciono)
  saveti: 'Ako nemaš šerpu za rernu, koristi dublji tepsiju prekriven folijom.',
};

export default recept;