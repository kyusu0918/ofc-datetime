# 📚 APIリファレンス — ofc-datetime

固定フォーマット（`yyyy/MM/dd hh:mm:ss`）に特化した、軽量・依存ゼロの日時ユーティリティライブラリです。  
UTC版・Intl対応を含み、妥当性検証・変換・加算・差分算出などの機能を提供します。

---

## 🕓 現在日時系

| 関数 | 説明 |
|------|------|
| `getNowDateString()` | 現在日付（ローカル）を `"yyyy/MM/dd"` 形式で取得します。 |
| `getNowDateStringUTC()` | 現在日付（UTC基準）を取得します。 |
| `getNowDateStringIntl(tz)` | 指定タイムゾーンの現在日付を取得します。 |
| `getNowTimeString()` | 現在時刻（ローカル）を `"hh:mm:ss"` 形式で取得します。 |
| `getNowTimeStringUTC()` | 現在時刻（UTC）を取得します。 |
| `getNowTimeStringIntl(tz)` | 指定タイムゾーンの現在時刻を取得します。 |
| `getNowDateTimeString()` | 現在日時（ローカル）を `"yyyy/MM/dd hh:mm:ss"` 形式で取得します。 |
| `getNowDateTimeStringUTC()` | 現在日時（UTC基準）を取得します。 |
| `getNowDateTimeStringIntl(tz)` | 指定タイムゾーンの現在日時を取得します。 |

---

## 🔢 文字列変換系

| 関数 | 説明 |
|------|------|
| `toDateString("yyyyMMdd")` | 数値形式を `"yyyy/MM/dd"` に変換します。 |
| `toNumberDateString("yyyy/MM/dd")` | スラッシュを除去し `"yyyyMMdd"` に変換します。 |
| `toTimeString("hhmmss")` | 数値形式を `"hh:mm:ss"` に変換します。 |
| `toNumberTimeString("hh:mm:ss")` | コロンを除去し `"hhmmss"` に変換します。 |
| `toDateTimeString("yyyyMMddhhmmss")` | 数値形式を `"yyyy/MM/dd hh:mm:ss"` に変換します。 |
| `toNumberDateTimeString("yyyy/MM/dd hh:mm:ss")` | 区切り文字を除去して `"yyyyMMddhhmmss"` を生成します。 |

---

## ✅ 妥当性チェック系

| 関数 | 説明 |
|------|------|
| `isYmdValid(y, m, d)` | 年月日が暦日として有効か検証します。 |
| `isHmsValid(h, m, s)` | 時刻（時分秒）が有効な範囲か検証します。 |
| `isDateValid("yyyy/MM/dd")` | 日付フォーマットおよび範囲を検証します。 |
| `isTimeValid("hh:mm:ss")` | 時刻フォーマットおよび範囲を検証します。 |
| `isDateTimeValid("yyyy/MM/dd hh:mm:ss")` | 日時フォーマット全体を検証します。 |

---

## ➕ 加算系

| 関数 | 説明 |
|------|------|
| `addYears(dateStr, n)` | 年を加算します（ローカル）。 |
| `addYearsUTC(dateStr, n)` | 年を加算します（UTC基準）。 |
| `addMonths(dateStr, n)` | 月を加算します（ローカル）。 |
| `addMonthsUTC(dateStr, n)` | 月を加算します（UTC基準）。 |
| `addDays(dateStr, n)` | 日を加算します（ローカル）。 |
| `addDaysUTC(dateStr, n)` | 日を加算します（UTC基準）。 |
| `addHours(dateStr, n)` | 時を加算します（ローカル）。 |
| `addHoursUTC(dateStr, n)` | 時を加算します（UTC基準）。 |
| `addMinutes(dateStr, n)` | 分を加算します（ローカル）。 |
| `addMinutesUTC(dateStr, n)` | 分を加算します（UTC基準）。 |
| `addSeconds(dateStr, n)` | 秒を加算します（ローカル）。 |
| `addSecondsUTC(dateStr, n)` | 秒を加算します（UTC基準）。 |

---

## 🔻 差分系

| 関数 | 説明 |
|------|------|
| `diffDay(a, b)` | 2つの日時の差を日単位で返します。 |
| `diffDayUTC(a, b)` | UTC基準で日単位の差を返します。 |
| `diffHour(a, b)` | 時間単位の差を返します。 |
| `diffHourUTC(a, b)` | UTC基準で時間単位の差を返します。 |
| `diffMinute(a, b)` | 分単位の差を返します。 |
| `diffMinuteUTC(a, b)` | UTC基準で分単位の差を返します。 |
| `diffSecond(a, b)` | 秒単位の差を返します。 |
| `diffSecondUTC(a, b)` | UTC基準で秒単位の差を返します。 |
| `diffMilli(a, b)` | ミリ秒単位の差を返します。 |
| `diffMilliUTC(a, b)` | UTC基準でミリ秒単位の差を返します。 |

---

## ⏳ 経過時間系

| 関数 | 説明 |
|------|------|
| `pastDateTime(a, b)` | 2つの日時の経過を年・月・日・時・分・秒単位で算出します。 |
| `pastDateTimeUTC(a, b)` | 上記をUTC基準で算出します。 |

戻り値の例：
```ts
{ y: 1, m: 2, d: 5, hr: 3, min: 10, sec: 30 }
```

---

## 🧩 分割／生成系

| 関数 | 説明 |
|------|------|
| `divideDateTime("yyyy/MM/dd hh:mm:ss")` | 日時文字列を分解し `{ y, m, d, hr, min, sec }` を返します。 |
| `makeDateTimeString(y, m, d, hr, min, sec)` | 各要素から `"yyyy/MM/dd hh:mm:ss"` を生成します。 |

---

## ⚙️ 使用例

```ts
import {
  getNowDateTimeString,
  addDays,
  diffHour,
  divideDateTime
} from "@kyusu/ofc-datetime";

const now = getNowDateTimeString();  // "2025/11/08 13:45:00"
const next = addDays(now, 3);        // "2025/11/11 13:45:00"
const hours = diffHour(next, now);   // 72
const parts = divideDateTime(now);   // { y:2025, m:11, d:8, hr:13, min:45, sec:0 }
```

---

© 2025 Kei Yusu — [MITライセンス](../LICENSE)
