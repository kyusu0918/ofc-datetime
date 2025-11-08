# 📚 API Reference — ofc-datetime

Lightweight, zero-dependency Date/Time utility library for fixed format (`yyyy/MM/dd hh:mm:ss`)  
with full support for UTC, Intl, and safe conversion and validation utilities.

---

## 🕓 Current Date/Time

| Function | Description |
|-----------|-------------|
| `getNowDateString()` | Returns the current date as `"yyyy/MM/dd"`. |
| `getNowDateStringUTC()` | Returns the current date in UTC timezone. |
| `getNowDateStringIntl(tz)` | Returns the current date for a given timezone. |
| `getNowTimeString()` | Returns the current time as `"hh:mm:ss"`. |
| `getNowTimeStringUTC()` | Returns the current UTC time. |
| `getNowTimeStringIntl(tz)` | Returns the current time in the given timezone. |
| `getNowDateTimeString()` | Returns the current date/time as `"yyyy/MM/dd hh:mm:ss"`. |
| `getNowDateTimeStringUTC()` | Returns the current UTC date/time. |
| `getNowDateTimeStringIntl(tz)` | Returns the current date/time for a given timezone. |

---

## 🔢 Format Conversion

| Function | Description |
|-----------|-------------|
| `toDateString("yyyyMMdd")` | Converts numeric date to `"yyyy/MM/dd"`. |
| `toNumberDateString("yyyy/MM/dd")` | Converts to numeric `"yyyyMMdd"`. |
| `toTimeString("hhmmss")` | Converts numeric time to `"hh:mm:ss"`. |
| `toNumberTimeString("hh:mm:ss")` | Converts to numeric `"hhmmss"`. |
| `toDateTimeString("yyyyMMddhhmmss")` | Converts numeric datetime to `"yyyy/MM/dd hh:mm:ss"`. |
| `toNumberDateTimeString("yyyy/MM/dd hh:mm:ss")` | Removes separators to return `"yyyyMMddhhmmss"`. |

---

## ✅ Validation

| Function | Description |
|-----------|-------------|
| `isYmdValid(y, m, d)` | Checks if given year/month/day is valid. |
| `isHmsValid(h, m, s)` | Checks if given hour/minute/second is valid. |
| `isDateValid("yyyy/MM/dd")` | Validates a date string format and range. |
| `isTimeValid("hh:mm:ss")` | Validates a time string format and range. |
| `isDateTimeValid("yyyy/MM/dd hh:mm:ss")` | Validates a full datetime string format. |

---

## ➕ Arithmetic (Add)

| Function | Description |
|-----------|-------------|
| `addYears(dateStr, n)` | Adds years to a date (local). |
| `addYearsUTC(dateStr, n)` | Adds years in UTC mode. |
| `addMonths(dateStr, n)` | Adds months to a date (local). |
| `addMonthsUTC(dateStr, n)` | Adds months in UTC mode. |
| `addDays(dateStr, n)` | Adds days to a date (local). |
| `addDaysUTC(dateStr, n)` | Adds days in UTC mode. |
| `addHours(dateStr, n)` | Adds hours to a date (local). |
| `addHoursUTC(dateStr, n)` | Adds hours in UTC mode. |
| `addMinutes(dateStr, n)` | Adds minutes to a date (local). |
| `addMinutesUTC(dateStr, n)` | Adds minutes in UTC mode. |
| `addSeconds(dateStr, n)` | Adds seconds to a date (local). |
| `addSecondsUTC(dateStr, n)` | Adds seconds in UTC mode. |

---

## 🔻 Difference (Diff)

| Function | Description |
|-----------|-------------|
| `diffDay(a, b)` | Returns difference in days (local). |
| `diffDayUTC(a, b)` | Returns difference in days (UTC). |
| `diffHour(a, b)` | Returns difference in hours. |
| `diffHourUTC(a, b)` | Returns difference in hours (UTC). |
| `diffMinute(a, b)` | Returns difference in minutes. |
| `diffMinuteUTC(a, b)` | Returns difference in minutes (UTC). |
| `diffSecond(a, b)` | Returns difference in seconds. |
| `diffSecondUTC(a, b)` | Returns difference in seconds (UTC). |
| `diffMilli(a, b)` | Returns difference in milliseconds. |
| `diffMilliUTC(a, b)` | Returns difference in milliseconds (UTC). |

---

## ⏳ Elapsed / Past

| Function | Description |
|-----------|-------------|
| `pastDateTime(a, b)` | Calculates elapsed years, months, days, hours, minutes, seconds between two datetimes. |
| `pastDateTimeUTC(a, b)` | Same as above, but in UTC mode. |

Return example:
```ts
{ y: 1, m: 2, d: 5, hr: 3, min: 10, sec: 30 }
```

---

## 🧩 Split / Compose

| Function | Description |
|-----------|-------------|
| `divideDateTime("yyyy/MM/dd hh:mm:ss")` | Splits a datetime string into components `{ y, m, d, hr, min, sec }`. |
| `makeDateTimeString(y, m, d, hr, min, sec)` | Builds formatted `"yyyy/MM/dd hh:mm:ss"` string from components. |

---

## ⚙️ Example Usage

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

© 2025 Kei Yusu — Licensed under [MIT License](../LICENSE)
