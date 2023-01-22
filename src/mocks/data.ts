import { QUESTION_TYPE } from '../model/quiz';

export const QUIZZES = [
  {
    id: 1,
    createdDate: '15/01/2023',
    createdBy: 'John Wick',
    name: 'Robin Hood - historia prawdziwa',
    category: 'Robin Hood',
    description:
      'Robin Hood: Książę złodziei (ang. Robin Hood: Prince of Thieves) – amerykański film przygodowy z 1991 roku w reżyserii Kevina Reynoldsa.',
    imageSrc: 'images/robin.png',
    questions: [
      {
        id: 1,
        text: 'Dlaczego Robin Hood?',
        type: QUESTION_TYPE.SINGLE_CHOICE,
        answers: [
          { id: 1, label: 'Nie wiem', checked: false },
          { id: 2, label: 'Robin nie jest taki chudy', checked: false },
          { id: 3, label: 'Bo mało jadł', checked: true },
        ],
        active: true,
      },
      {
        id: 2,
        text: 'Co robi dzik w zamku?',
        type: QUESTION_TYPE.SINGLE_CHOICE,
        answers: [
          { id: 1, label: 'Nie wiem', checked: false },
          { id: 2, label: 'Penetruje lochy', checked: true },
          { id: 3, label: 'Biega', checked: false },
        ],
        active: false,
      },
      {
        id: 3,
        text: 'Co mówi japończyk gdy widzi okno?',
        type: QUESTION_TYPE.SINGLE_CHOICE,
        answers: [
          { id: 1, label: 'Toshiba', checked: true },
          { id: 2, label: 'Jao ming', checked: false },
          { id: 3, label: 'Nie wiem', checked: false },
        ],
        active: false,
      },
    ],
  },
  {
    id: 2,
    createdDate: '20/01/2023',
    createdBy: 'John Wick',
    name: 'The Beatles - brytyjski rockowy zespół muzyczny',
    category: 'The Beatles',
    description:
      'The Beatles – brytyjski rockowy zespół muzyczny z Liverpoolu, działający w latach 1960–1970. Przez większość tego okresu (w latach 1962–1969) w jego skład wchodzili John Lennon, Paul McCartney, George Harrison i Ringo Starr.',
    imageSrc: 'images/the-beatles.png',
    questions: [
      {
        id: 1,
        text: 'W jakich latach śpiewali The Beatles?',
        type: QUESTION_TYPE.SINGLE_CHOICE,
        answers: [
          { id: 1, label: '1960–1970', checked: true },
          { id: 2, label: '1950–1960', checked: false },
        ],
        active: true,
      },
      {
        id: 2,
        text: 'Z jakiego zespołu wywodzą się Beatlesi?',
        type: QUESTION_TYPE.SINGLE_CHOICE,
        answers: [
          { id: 1, label: 'Queen', checked: false },
          { id: 2, label: 'Pearl Jam', checked: false },
          { id: 3, label: 'The Quarrymen', checked: true },
        ],
        active: false,
      },
    ],
  },
  {
    id: 3,
    createdDate: '21/01/2023',
    createdBy: 'John Wick',
    name: 'Jeden z dziesięciu - Pan Tadeusz Sznuk',
    category: 'Jeden z dziesięciu',
    description:
      'Polski teleturniej prowadzony przez Tadeusza Sznuka, produkowany przez Euromedia TV i TVP3 Lublin i emitowany w Telewizji Polskiej od 3 czerwca 1994[1], oparty na brytyjskim formacie Fifteen to One wymyślonym przez Johna M. Lewisa, na licencji All3Media International, którego oryginał był emitowany na antenie Channel 4. Pod względem lat emisji jest to najdłużej nadawany (spośród wciąż produkowanych) teleturniej w polskiej telewizji.',
    imageSrc: 'images/tadi.jpg',
    questions: [
      {
        id: 1,
        text: 'Anchois (anszua) to francuskie określenie produktu z',
        type: QUESTION_TYPE.SINGLE_CHOICE,
        answers: [
          { id: 1, label: 'ryb', checked: true },
          { id: 2, label: 'żabich udek', checked: false },
          { id: 3, label: 'rybich udek', checked: false },
        ],
        active: true,
      },
      {
        id: 2,
        text: 'Seradela, to',
        type: QUESTION_TYPE.SINGLE_CHOICE,
        answers: [
          { id: 1, label: 'roślina', checked: true },
          { id: 2, label: 'ryba', checked: false },
          { id: 3, label: 'tak', checked: false },
        ],
        active: false,
      },
      {
        id: 3,
        text: 'Gliniarz, to slangowe określenie którego zawodu?',
        type: QUESTION_TYPE.SINGLE_CHOICE,
        answers: [
          {
            id: 1,
            label: 'osoby, która wytwarza wyroby z gliny',
            checked: false,
          },
          { id: 2, label: 'policjanta', checked: true },
          { id: 3, label: 'garncarza', checked: false },
        ],
        active: false,
      },
      {
        id: 4,
        text: 'I w Paryżu nie zrobią z owsa',
        type: QUESTION_TYPE.SINGLE_CHOICE,
        answers: [
          {
            id: 1,
            label: 'spichlerza',
            checked: false,
          },
          { id: 2, label: 'konia', checked: false },
          { id: 3, label: 'ryżu', checked: true },
        ],
        active: false,
      },
    ],
  },
];
