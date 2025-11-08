import {
  // 現在日時系
  getNowDateString, getNowDateStringUTC, getNowDateStringIntl,
  getNowTimeString, getNowTimeStringUTC, getNowTimeStringIntl,
  getNowDateTimeString, getNowDateTimeStringUTC, getNowDateTimeStringIntl,

  // 変換系
  toDateString, toNumberDateString, toTimeString, toNumberTimeString,
  toDateTimeString, toNumberDateTimeString,

  // 妥当性チェック
  isDateValid, isTimeValid, isDateTimeValid, isYmdValid, isHmsValid,

  // 加算系
  addYears, addYearsUTC, addMonths, addMonthsUTC, addDays, addDaysUTC,
  addHours, addHoursUTC, addMinutes, addMinutesUTC, addSeconds, addSecondsUTC,

  // 差分系
  diffDay, diffDayUTC, diffHour, diffHourUTC, diffMinute, diffMinuteUTC,
  diffSecond, diffSecondUTC, diffMilli, diffMilliUTC,

  // 経過時間系
  pastDateTime, pastDateTimeUTC,

  // 分割／生成系
  divideDateTime, makeDateTimeString
} from '../src/ofcDateTime';

// ---------------------------------------------------------
// 現在日時系
// ---------------------------------------------------------
describe('現在日時系', () => {
  test('全関数が正規フォーマットを返す', () => {
    expect(getNowDateString()).toMatch(/^\d{4}\/\d{2}\/\d{2}$/);
    expect(getNowDateStringUTC()).toMatch(/^\d{4}\/\d{2}\/\d{2}$/);
    expect(getNowDateStringIntl('Asia/Tokyo')).toMatch(/^\d{4}\/\d{2}\/\d{2}$/);

    expect(getNowTimeString()).toMatch(/^\d{2}:\d{2}:\d{2}$/);
    expect(getNowTimeStringUTC()).toMatch(/^\d{2}:\d{2}:\d{2}$/);
    expect(getNowTimeStringIntl('UTC')).toMatch(/^\d{2}:\d{2}:\d{2}$/);

    expect(getNowDateTimeString()).toMatch(/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/);
    expect(getNowDateTimeStringUTC()).toMatch(/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/);
    expect(getNowDateTimeStringIntl('Asia/Tokyo')).toMatch(/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/);
  });
});

// ---------------------------------------------------------
// 文字列変換系
// ---------------------------------------------------------
describe('文字列変換系', () => {
  test('toDateString / toNumberDateString', () => {
    expect(toDateString('20251107')).toBe('2025/11/07');
    expect(toDateString(' 20251107 ')).toBe('2025/11/07');
    expect(toDateString('123')).toBe('');
    expect(toNumberDateString('2025/11/07')).toBe('20251107');
    expect(toNumberDateString('')).toBe('');
  });

  test('toTimeString / toNumberTimeString', () => {
    expect(toTimeString('130210')).toBe('13:02:10');
    expect(toTimeString('')).toBe('');
    expect(toNumberTimeString('13:02:10')).toBe('130210');
    expect(toNumberTimeString('')).toBe('');
  });

  test('toDateTimeString / toNumberDateTimeString', () => {
    expect(toDateTimeString('20251107130210')).toBe('2025/11/07 13:02:10');
    expect(toDateTimeString('')).toBe('');
    expect(toNumberDateTimeString('2025/11/07 13:02:10')).toBe('20251107130210');
    expect(toNumberDateTimeString('')).toBe('');
  });
});

// ---------------------------------------------------------
// 妥当性チェック系
// ---------------------------------------------------------
describe('妥当性チェック系', () => {
  test('isYmdValid', () => {
    expect(isYmdValid(2024, 2, 29)).toBe(true);
    expect(isYmdValid(2023, 2, 29)).toBe(false);
    expect(isYmdValid(2023, 13, 1)).toBe(false);
  });

  test('isHmsValid', () => {
    expect(isHmsValid(0, 0, 0)).toBe(true);
    expect(isHmsValid(23, 59, 59)).toBe(true);
    expect(isHmsValid(24, 0, 0)).toBe(false);
  });

  test('isDateValid / isTimeValid / isDateTimeValid', () => {
    expect(isDateValid('2025/11/07')).toBe(true);
    expect(isDateValid('2025/13/07')).toBe(false);
    expect(isTimeValid('12:00:00')).toBe(true);
    expect(isTimeValid('24:00:00')).toBe(false);
    expect(isDateTimeValid('2025/11/07 12:00:00')).toBe(true);
    expect(isDateTimeValid('2025/11/07 99:99:99')).toBe(false);
  });
});

// ---------------------------------------------------------
// 加算系（通常＋UTC＋異常）
// ---------------------------------------------------------
describe('加算系', () => {
  const base = '2025/11/07 13:02:10';
  const bad = 'abc';

  test('全関数 正常動作', () => {
    expect(addYears(base, 1)).toBe('2026/11/07 13:02:10');
    expect(addYearsUTC(base, 1)).toMatch(/2026\/11\/07/);
    expect(addMonths(base, 1)).toBe('2025/12/07 13:02:10');
    expect(addMonthsUTC(base, 1)).toMatch(/2025\/12\/07/);
    expect(addDays(base, 1)).toBe('2025/11/08 13:02:10');
    expect(addDaysUTC(base, 1)).toMatch(/2025\/11\/08/);
    expect(addHours(base, 1)).toBe('2025/11/07 14:02:10');
    expect(addHoursUTC(base, 1)).toMatch(/2025\/11\/07/);
    expect(addMinutes(base, 10)).toBe('2025/11/07 13:12:10');
    expect(addMinutesUTC(base, 10)).toMatch(/2025\/11\/07/);
    expect(addSeconds(base, 10)).toBe('2025/11/07 13:02:20');
    expect(addSecondsUTC(base, 10)).toMatch(/2025\/11\/07/);
  });

  test('不正フォーマットでは元を返す', () => {
    expect(addYears(bad, 1)).toBe(bad);
    expect(addYearsUTC(bad, 1)).toBe(bad);
    expect(addMonths(bad, 1)).toBe(bad);
    expect(addMonthsUTC(bad, 1)).toBe(bad);
    expect(addDays(bad, 1)).toBe(bad);
    expect(addDaysUTC(bad, 1)).toBe(bad);
    expect(addHours(bad, 1)).toBe(bad);
    expect(addHoursUTC(bad, 1)).toBe(bad);
    expect(addMinutes(bad, 1)).toBe(bad);
    expect(addMinutesUTC(bad, 1)).toBe(bad);
    expect(addSeconds(bad, 1)).toBe(bad);
    expect(addSecondsUTC(bad, 1)).toBe(bad);
  });
});

// ---------------------------------------------------------
// 差分系（全10関数＋異常）
// ---------------------------------------------------------
describe('差分系', () => {
  const t1 = '2025/11/07 13:00:00';
  const t2 = '2025/11/08 14:30:00';
  const bad = 'xx';

  test('正常全関数', () => {
    expect(diffDay(t1, t2)).toBeCloseTo(1.0625);
    expect(diffDayUTC(t1, t2)).toBeCloseTo(1.0625);
    expect(diffHour(t1, t2)).toBeCloseTo(25.5);
    expect(diffHourUTC(t1, t2)).toBeCloseTo(25.5);
    expect(diffMinute(t1, t2)).toBeCloseTo(1530);
    expect(diffMinuteUTC(t1, t2)).toBeCloseTo(1530);
    expect(diffSecond(t1, t2)).toBeCloseTo(91800);
    expect(diffSecondUTC(t1, t2)).toBeCloseTo(91800);
    expect(diffMilli(t1, t2)).toBeCloseTo(91800000);
    expect(diffMilliUTC(t1, t2)).toBeCloseTo(91800000);
  });

  test('異常入力は0', () => {
    [
      diffDay, diffDayUTC, diffHour, diffHourUTC,
      diffMinute, diffMinuteUTC, diffSecond, diffSecondUTC,
      diffMilli, diffMilliUTC
    ].forEach(fn => expect(fn(bad, bad)).toBe(0));
  });
});

// ---------------------------------------------------------
// 経過時間系
// ---------------------------------------------------------
describe('経過時間系', () => {
  const t1 = '2025/01/01 00:00:00';
  const t2 = '2026/03/02 01:02:03';
  const bad = 'abc';

  test('正常', () => {
    const r = pastDateTime(t1, t2);
    expect(r.y).toBe(1);
    expect(r.m).toBe(2);
    expect(r.d).toBe(1);
    expect(r.hr).toBe(1);
    expect(r.min).toBe(2);
    expect(r.sec).toBe(3);
  });

  test('UTC 正常', () => {
    const r = pastDateTimeUTC(t1, t2);
    expect(r.y).toBe(1);
    expect(r.m).toBe(2);
    expect(r.d).toBe(1);
  });

  test('異常データ', () => {
    const r = pastDateTime(bad, bad);
    expect(r.y).toBe(0);
    expect(r.m).toBe(0);
  });
});

// ---------------------------------------------------------
// 分割／生成系
// ---------------------------------------------------------
describe('分割／生成系', () => {
  test('divideDateTime 正常 / 空', () => {
    const n = divideDateTime('');
    expect(n.y).toBe(0);
    const r = divideDateTime('2025/11/07 13:02:10');
    expect(r.hr).toBe(13);
  });

  test('makeDateTimeString 正常 / 負数', () => {
    expect(makeDateTimeString(2025, 11, 7, 13, 2, 10)).toBe('2025/11/07 13:02:10');
    expect(makeDateTimeString(-1, 0, 0, 0, 0, 0)).toBe('-1/00/00 00:00:00');
  });
});

// ---------------------------------------------------------
// 例外系／防御分岐通過テスト
// ---------------------------------------------------------
describe('例外系／防御分岐通過テスト', () => {
  const invalidDate1 = 'not-a-date';
  const invalidDate2 = '2025/99/99 99:99:99';

  test('add系でInvalid Dateを強制的に発生させる', () => {
    // Date生成がNaNになるパターン
    expect(addYears(invalidDate1, 1)).toBe(invalidDate1);
    expect(addMonths(invalidDate1, 1)).toBe(invalidDate1);
    expect(addDays(invalidDate1, 1)).toBe(invalidDate1);
    expect(addHours(invalidDate1, 1)).toBe(invalidDate1);
    expect(addMinutes(invalidDate1, 1)).toBe(invalidDate1);
    expect(addSeconds(invalidDate1, 1)).toBe(invalidDate1);

    // UTC版も通す
    expect(addYearsUTC(invalidDate2, 1)).toBe(invalidDate2);
    expect(addMonthsUTC(invalidDate2, 1)).toBe(invalidDate2);
    expect(addDaysUTC(invalidDate2, 1)).toBe(invalidDate2);
    expect(addHoursUTC(invalidDate2, 1)).toBe(invalidDate2);
    expect(addMinutesUTC(invalidDate2, 1)).toBe(invalidDate2);
    expect(addSecondsUTC(invalidDate2, 1)).toBe(invalidDate2);
  });

  test('diff系でInvalid Dateを通過させる', () => {
    expect(diffDay(invalidDate1, invalidDate2)).toBe(0);
    expect(diffDayUTC(invalidDate1, invalidDate2)).toBe(0);
    expect(diffHour(invalidDate1, invalidDate2)).toBe(0);
    expect(diffHourUTC(invalidDate1, invalidDate2)).toBe(0);
    expect(diffMinute(invalidDate1, invalidDate2)).toBe(0);
    expect(diffMinuteUTC(invalidDate1, invalidDate2)).toBe(0);
    expect(diffSecond(invalidDate1, invalidDate2)).toBe(0);
    expect(diffSecondUTC(invalidDate1, invalidDate2)).toBe(0);
    expect(diffMilli(invalidDate1, invalidDate2)).toBe(0);
    expect(diffMilliUTC(invalidDate1, invalidDate2)).toBe(0);
  });

  test('pastDateTime / UTC で異常データを通過させる', () => {
    const r1 = pastDateTime('bad', 'input');
    const r2 = pastDateTimeUTC('2025/13/01 25:61:61', 'abc');
    expect(r1.y).toBe(0);
    expect(r2.m).toBe(0);
  });

  test('divideDateTime で部分的欠損値を通す', () => {
    const r = divideDateTime('2025/ 13:');
    expect(r.y).toBe(2025);
    expect(r.m).toBe(0);
    expect(r.d).toBe(0);
  });
});
