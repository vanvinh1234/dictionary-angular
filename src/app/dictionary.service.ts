import {Injectable} from '@angular/core';
import {isLowerCase} from 'tslint/lib/utils';
export interface IWord {
  key: string;
  meaning: string;
}
@Injectable({
  providedIn: 'root'
})

export class DictionaryService {
  private words: IWord[] = [
    {
      key: 'fish',
      meaning: 'cá'
    },
    {
      key: 'dog',
      meaning: 'chó'
    },
    {
      key: 'service',
      meaning: 'dịch vụ',
    },
    {
      key: 'cow',
      meaning: 'bò'
    }
  ];

  constructor() {
  }

  search(word: string): string {
    if (!word) {
      return '';
    }
    const W = this.words.find(item => item.key === word.toLowerCase());
    if (W) {
      return W.meaning;
    }
    return 'Not Found';
  }
  getAll(): IWord[] {
    return this.words;
  }

}
