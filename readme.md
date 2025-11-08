# 🕓 ofc-datetime

**Lightweight, zero-dependency Date/Time utility library for fixed format (`yyyy/MM/dd hh:mm:ss`)  
with UTC and Intl support for TypeScript.**  
by **Kei Yusu (Oresama Foundation Code)**

---

## 📦 Overview

`ofc-datetime` is a TypeScript utility library that provides simple and consistent date/time operations  
without external dependencies.  
It is part of the **ofc** (Oresama Foundation Code) utility series.

The library focuses on **fixed-format date strings** (`yyyy/MM/dd hh:mm:ss`)  
to ensure predictable behavior across locales and environments.

---

## ⚙️ Features

- ✅ Zero dependency — lightweight and portable  
- 🕰 Supports both **local** and **UTC** calculations  
- 🌍 Includes **Intl** (internationalization) support  
- 🧮 Provides unified functions for:
  - Date/time **conversion**
  - Format **validation**
  - **Arithmetic** (add/subtract)
  - **Difference** calculation (day/hour/minute/second/millisecond)
  - **Decomposition** (`divideDateTime`)
  - **Reconstruction** (`makeDateTimeString`)
- 🧪 90%+ test coverage using **Jest**

---

## 📘 Installation

```bash
npm install @kyusu/ofc-datetime
```

or for development:

```bash
npm install @kyusu/ofc-datetime --save-dev
```

---

## 🚀 Usage

```typescript
import { 
  getNowDateString, 
  toDateString, 
  addDays, 
  diffHour,
  divideDateTime 
} from "@kyusu/ofc-datetime";

// 現在日時の取得
console.log(getNowDateString()); // "2025/11/08"

// フォーマット変換
console.log(toDateString("20251108")); // "2025/11/08"

// 日付加算
console.log(addDays("2025/11/08 00:00:00", 5)); // "2025/11/13 00:00:00"

// 差分算出
console.log(diffHour("2025/11/08 00:00:00", "2025/11/09 06:00:00")); // 30

// 分解
console.log(divideDateTime("2025/11/08 13:02:10"));
// → { y:2025, m:11, d:8, hr:13, min:2, sec:10 }
```

---

## 🧩 Function Categories

| Category | Description | Example Functions |
|-----------|--------------|-------------------|
| **Current Date/Time** | Now-local, UTC, Intl | `getNowDateString()`, `getNowDateTimeStringUTC()` |
| **Format Conversion** | Convert between numeric & formatted strings | `toDateString()`, `toNumberTimeString()` |
| **Validation** | Format / range validation | `isDateValid()`, `isDateTimeValid()` |
| **Arithmetic (Add)** | Add years, months, days, etc. | `addDays()`, `addSecondsUTC()` |
| **Difference (Diff)** | Calculate elapsed time | `diffHour()`, `diffMinuteUTC()` |
| **Elapsed Time (Past)** | Full difference breakdown | `pastDateTime()` |
| **Split / Compose** | Break or reconstruct datetime strings | `divideDateTime()`, `makeDateTimeString()` |

---

## 🧪 Testing

Run all tests:

```bash
npm test
```

Generate coverage report (HTML):

```bash
npm run test:coverage
```

Coverage output (local only):

```
coverage/lcov-report/index.html
```

---

## 📁 Project Structure

```
ofc-datetime/
├── src/
│   └── ofcDateTime.ts
├── tests/
│   └── ofcDateTime.test.ts
├── dist/
│   ├── ofcDateTime.js
│   ├── ofcDateTime.d.ts
│   └── ofcDateTime.js.map
├── package.json
├── tsconfig.json
└── jest.config.js
```

---

## 📘 Documentation

- [API Reference (English)](./docs/API.en.md)
- [APIリファレンス（日本語）](./docs/API.ja.md)

---

## 🔒 License

MIT © Kei Yusu  
Part of the **Oresama Foundation Code** series.

---

## 🌐 Links

- **GitHub:** [https://github.com/kyusu0918/ofc-datetime](https://github.com/kyusu0918/ofc-datetime)  
- **Author:** Kei Yusu（[@kyusu0918](mailto:kyusu0918@gmail.com)）  
- **Series:** Oresama Foundation Code  

---

_“Simple, predictable, and fully typed date/time utilities — that’s all you need.”_
