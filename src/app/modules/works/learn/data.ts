export interface Language {
  name: string;
  designedBy: string;
  firstAppeared: string;
}


export let languagesSource: Language[] = [
  {
    name: 'Javascript',
    designedBy: 'Brendan Eich',
    firstAppeared: '1995'
  },
  {
    name: 'Java',
    designedBy: 'James Gosling',
    firstAppeared: '1995'
  },
  {
    name: 'C++',
    designedBy: 'Bjarne Stroustrup',
    firstAppeared: '1983'
  },
  {
    name: 'C',
    designedBy: 'Dennis Ritchie',
    firstAppeared: '1972'
  },
  {
    name: 'Python',
    designedBy: 'Guido van Rossum',
    firstAppeared: '1991'
  },
  {
    name: 'Objective-C',
    designedBy: 'Tom Love and Brad Cox',
    firstAppeared: '1984'
  },
  {
    name: 'C#',
    designedBy: 'Microsoft',
    firstAppeared: '2000'
  },
  {
    name: 'PHP',
    designedBy: 'Rasmus Lerdorf',
    firstAppeared: '1995'
  },
  {
    name: 'Ruby',
    designedBy: 'Yukihiro Matsumoto',
    firstAppeared: '1995'
  },
  {
    name: 'Swift',
    designedBy: 'Chris Lattner and Apple Inc.',
    firstAppeared: '2014'
  },
  {
    name: 'CSS',
    designedBy: 'Håkon Wium Lie Bert Bos W3C',
    firstAppeared: '1996'
  },
  {
    name: 'HTML',
    designedBy: 'W3C & WHATWG',
    firstAppeared: '1993'
  }
];
