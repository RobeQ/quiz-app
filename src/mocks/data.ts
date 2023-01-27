import { Question_Type } from '@/model/quiz';

export const QUIZZES = [
  {
    id: 1,
    name: 'Robin Hood - historia prawdziwa',
    description:
      'Robin Hood: Książę złodziei (ang. Robin Hood: Prince of Thieves) – amerykański film przygodowy z 1991 roku w reżyserii Kevina Reynoldsa.',
    createdDate: '15/01/2023',
    createdBy: 'John Wick',
    imageSrc: 'images/robin.png',
    category: 1,
    questions: [
      {
        id: 1,
        order: 1,
        text: 'Dlaczego Robin Hood?',
        imageSrc: 'images/robin.png',
        feedback: 'To oczywiste!',
        type: Question_Type.SC,
        group: 1,
        time: 50,
        answers: [
          { id: 1, content: 'Nie wiem', isCorrect: false },
          { id: 2, content: 'Robin nie jest taki chudy', isCorrect: false },
          { id: 3, content: 'Bo mało jadł', isCorrect: true },
        ],
      },
      {
        id: 2,
        order: 2,
        text: 'Co tam?',
        imageSrc: 'images/robin.png',
        feedback: 'No tak!',
        type: Question_Type.SC,
        group: 1,
        time: 50,
        answers: [
          { id: 1, content: 'Nie wiem', isCorrect: true },
          { id: 2, content: 'Nic', isCorrect: false },
        ],
      },
    ],
  },
  {
    id: 2,
    createdDate: '20/01/2023',
    createdBy: 'John Wick',
    name: 'The Beatles - brytyjski rockowy zespół muzyczny',
    description:
      'The Beatles – brytyjski rockowy zespół muzyczny z Liverpoolu, działający w latach 1960–1970. Przez większość tego okresu (w latach 1962–1969) w jego skład wchodzili John Lennon, Paul McCartney, George Harrison i Ringo Starr.',
    imageSrc: 'images/the-beatles.png',
    category: 2,
    questions: [
      {
        id: 1,
        text: 'W jakich latach śpiewali The Beatles?',
        time: 30,
        order: 1,
        imageSrc: 'images/the-beatles.png',
        feedback: 'To oczywiste!',
        type: Question_Type.SC,
        group: 2,
        answers: [
          { id: 1, content: '1960–1970', isCorrect: true },
          { id: 2, content: '1950–1960', isCorrect: false },
        ],
      },
      {
        id: 2,
        text: 'Co wiesz o The Beatles?',
        time: 30,
        order: 2,
        imageSrc: 'images/the-beatles.png',
        feedback: 'To oczywiste!',
        type: Question_Type.SC,
        group: 2,
        answers: [
          { id: 1, content: 'Nic', isCorrect: true },
          { id: 2, content: 'Sporo', isCorrect: false },
        ],
      },
    ],
  },
  {
    id: 3,
    createdDate: '21/01/2023',
    createdBy: 'John Wick',
    name: 'Jeden z dziesięciu - Pan Tadeusz Sznuk',
    category: 3,
    description:
      'Polski teleturniej prowadzony przez Tadeusza Sznuka, produkowany przez Euromedia TV i TVP3 Lublin i emitowany w Telewizji Polskiej od 3 czerwca 1994[1], oparty na brytyjskim formacie Fifteen to One wymyślonym przez Johna M. Lewisa, na licencji All3Media International, którego oryginał był emitowany na antenie Channel 4. Pod względem lat emisji jest to najdłużej nadawany (spośród wciąż produkowanych) teleturniej w polskiej telewizji.',
    imageSrc: 'images/tadi.jpg',
    questions: [
      {
        id: 1,
        order: 1,
        imageSrc: 'images/tadi.jpg',
        feedback: 'To oczywiste!',
        type: Question_Type.SC,
        group: 3,
        text: 'Anchois (anszua) to francuskie określenie produktu z',
        time: 30,
        answers: [
          { id: 1, content: 'ryb', isCorrect: true },
          { id: 2, content: 'żabich udek', isCorrect: false },
          { id: 3, content: 'rybich udek', isCorrect: false },
        ],
      },
      {
        id: 2,
        order: 2,
        imageSrc: 'images/tadi.jpg',
        feedback: 'To oczywiste!',
        text: 'Seradela, to',
        type: Question_Type.SC,
        group: 3,
        time: 30,
        answers: [
          { id: 1, content: 'roślina', isCorrect: true },
          { id: 2, content: 'ryba', isCorrect: false },
          { id: 3, content: 'tak', isCorrect: false },
        ],
      },
      {
        id: 3,
        text: 'Gliniarz, to slangowe określenie którego zawodu?',
        type: Question_Type.SC,
        order: 3,
        imageSrc: 'images/tadi.jpg',
        feedback: 'To oczywiste!',
        group: 3,
        time: 30,
        answers: [
          {
            id: 1,
            content: 'osoby, która wytwarza wyroby z gliny',
            isCorrect: false,
          },
          { id: 2, content: 'policjanta', isCorrect: true },
          { id: 3, content: 'garncarza', isCorrect: false },
        ],
      },
      {
        id: 4,
        text: 'I w Paryżu nie zrobią z owsa',
        time: 30,
        type: Question_Type.SC,
        order: 4,
        imageSrc: 'images/tadi.jpg',
        feedback: 'To oczywiste!',
        group: 3,
        answers: [
          {
            id: 1,
            label: 'spichlerza',
            checked: false,
          },
          { id: 2, content: 'konia', isCorrect: false },
          { id: 3, content: 'ryżu', isCorrect: true },
        ],
      },
    ],
  },
];

export const QUESTION_GROUPS = [
  { id: 1, name: 'Robin Hood' },
  { id: 2, name: 'The Beatles' },
  { id: 3, name: '1 z 10' },
  { id: 4, name: 'Harry Potter' },
  { id: 5, name: "Music 80's" },
  { id: 6, name: 'Animals' },
  { id: 7, name: 'The Walking Dead' },
  { id: 8, name: 'Snoop Dogg' },
  { id: 9, name: 'Funny facts' },
  { id: 10, name: 'Technology' },
];

export const QUIZ_CATEGORIES = [
  { id: 1, name: 'Robin Hood' },
  { id: 2, name: 'Harry Potter' },
  { id: 3, name: 'The Beatles' },
];
