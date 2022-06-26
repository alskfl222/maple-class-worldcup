import { defineStore } from 'pinia';
import { enrollRound } from '../utils';

export const useSelectionStore = defineStore('selection', {
  state: (): {
    total: string[];
    roundCount: number;
    record: string[][];
    match: string[];
    advance: string[];
    rest: string[];
  } => {
    return {
      total: [
        '히어로',
        '팔라딘',
        '다크나이트',
        '아크메이지(불, 독)',
        '아크메이지(썬, 콜)',
        '비숍',
        '보우마스터',
        '신궁',
        '패스파인더',
        '나이트로드',
        '섀도어',
        '듀얼블레이드',
        '바이퍼',
        '캡틴',
        '캐논슈터',
        '소울마스터',
        '미하일',
        '플레임위자드',
        '윈드브레이커',
        '나이트워커',
        '스트라이커',
        '블래스터',
        '배틀메이지',
        '와일드헌터',
        '메카닉',
        '제논',
        '데몬 슬레이어',
        '데몬 어벤져',
        '아란',
        '에반',
        '루미너스',
        '메르세데스',
        '팬텀',
        '은월',
        '카이저',
        '카인',
        '카데나',
        '엔젤릭버스터',
        '아델',
        '일리움',
        '아크',
        '라라',
        '호영',
        '제로',
        '키네시스',
      ],
      roundCount: -999,
      record: [],
      match: [],
      advance: [],
      rest: [],
    };
  },
  actions: {
    randomize() {
      for (let i = this.total.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.total[i], this.total[j]] = [this.total[j], this.total[i]];
      }
    },
    setroundCount(num: number) {
      this.roundCount = num
    },
    getCurrentMatch() {
      return this.match.slice(0, 2)
    },
    select(index: number) {
      this.advance.push(this.match[index])
      this.match = this.match.slice(2)
    },
    nextRound() {
      this.match = enrollRound(this.advance, this.rest)
      this.record.push(this.match),
      this.advance = [],
      this.rest = []
    },
    setWinner() {
      this.match = []
    }
  },
});
