/********************************************************************************
 * 日付日時関連
 *
 * @since 2025/04/04
 * @author Kei Yusu
 *
 *********************************************************************************/

/********************************************************************************
 * 現在日付取得(yyyy/MM/dd)
 *
 * @return 現在日付
 * @since 2025/04/04
 * @author Kei Yusu
 *
 *********************************************************************************/
export const getNowDateString = (): string => {

  // 現在日時取得
  const date = new Date();

  // 現在日時取得（yyyy/MM/dd形式）
  const NowDateString = date.getFullYear()
    + "/" + ("0" + (date.getMonth() + 1)).slice(-2)
    + "/" + ("0" + date.getDate()).slice(-2);

  // 戻り値の設定
  return NowDateString;
  
}

/********************************************************************************
 * 現在日付取得(yyyy/MM/dd) [UTC版]
 *
 * @return 現在日付(UTC)
 * @since 2025/04/04
 * @author Kei Yusu
 *
 *********************************************************************************/
export const getNowDateStringUTC = (): string => {

  // 現在日時取得(UTC)
  const date = new Date();

  // 現在日時取得（yyyy/MM/dd形式, UTC基準）
  const NowDateString = date.getUTCFullYear()
    + "/" + ("0" + (date.getUTCMonth() + 1)).slice(-2)
    + "/" + ("0" + date.getUTCDate()).slice(-2);

  // 戻り値の設定
  return NowDateString;

}

/********************************************************************************
 * 現在日付取得(yyyy/MM/dd) [Intl版]
 *
 * @param tz タイムゾーン
 * @return 現在日付（ロケール・タイムゾーン考慮）
 * @since 2025/04/04
 * @author Kei Yusu
 * @see Intl.DateTimeFormat を使用し、ローカルまたは指定タイムゾーンで安全にフォーマット。
 *
 *********************************************************************************/
export const getNowDateStringIntl = (tz: string = "Asia/Tokyo"): string => {

  // 現在日時取得
  const date = new Date();

  // JST（日本標準時）で yyyy/MM/dd 形式にフォーマット
  const formatter = new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: tz,
  });

  // Intl.DateTimeFormat は環境によって区切り文字が異なる場合があるため "/" に統一
  const formatted = formatter.format(date).replace(/[.\-]/g, "/");

  // 戻り値の設定
  return formatted;

};

/********************************************************************************
 * 現在刻取得(hh:mm:ss)
 *
 * @return 現在時刻
 * @since 2025/04/04
 * @author Kei Yusu
 *
 *********************************************************************************/
export const getNowTimeString = (): string => {

  // 現在日時取得
  const date = new Date();

  // 現在時刻取得（hh:mm:ss形式）
  const NowDateString = ("0" + date.getHours()).slice(-2)
    + ":" + ("0" + date.getMinutes()).slice(-2)
    + ":" + ("0" + date.getSeconds()).slice(-2);

  // 戻り値の設定
  return NowDateString;

}

/********************************************************************************
 * 現在刻取得(hh:mm:ss) [UTC版]
 *
 * @return 現在時刻(UTC)
 * @since 2025/04/04
 * @author Kei Yusu
 *
 *********************************************************************************/
export const getNowTimeStringUTC = (): string => {

  // 現在日時取得(UTC)
  const date = new Date();

  // 現在時刻取得（hh:mm:ss形式, UTC基準）
  const NowTimeString = ("0" + date.getUTCHours()).slice(-2)
    + ":" + ("0" + date.getUTCMinutes()).slice(-2)
    + ":" + ("0" + date.getUTCSeconds()).slice(-2);

  // 戻り値の設定
  return NowTimeString;

}

/********************************************************************************
 * 現在時刻取得(hh:mm:ss) [Intl版]
 *
 * @param tz タイムゾーン
 * @return 現在時刻（ロケール・タイムゾーン考慮）
 * @since 2025/04/04
 * @author Kei Yusu
 * @see Intl.DateTimeFormat を使用し、ローカルまたは指定タイムゾーンで安全にフォーマット。
 *
 *********************************************************************************/
export const getNowTimeStringIntl = (tz: string = "Asia/Tokyo"): string => {

  // 現在日時取得
  const date = new Date();

  // JST（日本標準時）で hh:mm:ss 形式にフォーマット
  const formatter = new Intl.DateTimeFormat("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: tz,
  });

  // Intl.DateTimeFormat の出力を ":" 区切りに統一
  const formatted = formatter.format(date)
    .replace(/[.\-]/g, ":")
    .replace(/\s/g, "");

  // 戻り値の設定
  return formatted;

};

/********************************************************************************
 * 現在日時取得(yyyy/MM/dd hh:mm:ss)
 *
 * @return 現在日時
 * @since 2025/04/04
 * @author Kei Yusu
 *
 *********************************************************************************/
export const getNowDateTimeString = (): string => {

  // 現在日時取得
  const date = new Date();

  // 現在日時取得（yyyy/MM/dd hh:mm:ss形式）
  const NowDateTimeString = date.getFullYear()
    + "/" + ("0" + (date.getMonth() + 1)).slice(-2)
    + "/" + ("0" + date.getDate()).slice(-2)
    + " " + ("0" + date.getHours()).slice(-2)
    + ":" + ("0" + date.getMinutes()).slice(-2)
    + ":" + ("0" + date.getSeconds()).slice(-2);

  // 戻り値の設定
  return NowDateTimeString;
    
}

/********************************************************************************
 * 現在日時取得(yyyy/MM/dd hh:mm:ss) [UTC版]
 *
 * @return 現在日時(UTC)
 * @since 2025/04/04
 * @author Kei Yusu
 *
 *********************************************************************************/
export const getNowDateTimeStringUTC = (): string => {

  // 現在日時取得(UTC)
  const date = new Date();

  // 現在日時取得（yyyy/MM/dd hh:mm:ss形式, UTC基準）
  const NowDateTimeString = date.getUTCFullYear()
    + "/" + ("0" + (date.getUTCMonth() + 1)).slice(-2)
    + "/" + ("0" + date.getUTCDate()).slice(-2)
    + " " + ("0" + date.getUTCHours()).slice(-2)
    + ":" + ("0" + date.getUTCMinutes()).slice(-2)
    + ":" + ("0" + date.getUTCSeconds()).slice(-2);

  // 戻り値の設定
  return NowDateTimeString;

}

/********************************************************************************
 * 現在日時取得(yyyy/MM/dd hh:mm:ss) [Intl版]
 *
 * @param tz タイムゾーン
 * @return 現在日時（ロケール・タイムゾーン考慮）
 * @since 2025/04/04
 * @author Kei Yusu
 * @see Intl.DateTimeFormat を使用し、ローカルまたは指定タイムゾーンで安全にフォーマット。
 *
 *********************************************************************************/
export const getNowDateTimeStringIntl = (tz: string = "Asia/Tokyo"): string => {

  // 現在日時取得
  const date = new Date();

  // 日付部分（yyyy/MM/dd）
  const dateFormatter = new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: tz,
  });

  // 時刻部分（hh:mm:ss）
  const timeFormatter = new Intl.DateTimeFormat("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: tz,
  });

  // フォーマット結果取得
  const datePart = dateFormatter.format(date).replace(/[.\-]/g, "/");
  const timePart = timeFormatter.format(date).replace(/[.\-]/g, ":").replace(/\s/g, "");

  // 戻り値の設定（yyyy/MM/dd hh:mm:ss形式）
  return `${datePart} ${timePart}`;

};

/********************************************************************************
 * 日付文字列変換(yyyyMMdd -> yyyy/MM/dd)
 *
 * @param target 対象日付
 * @return 日付（yyyy/MM/dd）
 * @since 2025/04/04
 * @author Kei Yusu
 *
 *********************************************************************************/
export const toDateString = (target: string): string => {

  // トリム後のターゲット
  const t = target.trim();

  // 戻り値の設定
  return t.length === 8 ? `${t.substring(0,4)}/${t.substring(4,6)}/${t.substring(6,8)}` : "";

}

/********************************************************************************
 * 日付文字列変換(yyyy/MM/dd -> yyyyMMdd)
 *
 * @param target 対象日付
 * @return 日付（yyyyMMdd）
 * @since 2025/04/04
 * @author Kei Yusu
 *
 *********************************************************************************/
export const toNumberDateString = (target: string): string => {

  // トリム後のターゲット
  const t = target.trim();

  // 戻り値の設定
  return t !== "" ? t.replace(/\//g, "") : "";

}

/********************************************************************************
 * 時刻文字列変換(hhmmss -> hh:mm:ss)
 *
 * @param target 対象時刻
 * @return 時刻（hh:mm:ss）
 * @since 2025/04/04
 * @author Kei Yusu
 *
 *********************************************************************************/
export const toTimeString = (target: string): string => {

  // トリム後のターゲット
  const t = target.trim();

  // 戻り値の設定
  return t.length === 6 ? `${t.substring(0,2)}:${t.substring(2,4)}:${t.substring(4,6)}` : "";

}

/********************************************************************************
 * 時刻文字列変換(hh:mm:ss -> hhmmss)
 *
 * @param target 対象時刻
 * @return 時刻（hhmmss）
 * @since 2025/04/04
 * @author Kei Yusu
 *
 *********************************************************************************/
export const toNumberTimeString = (target: string): string => {

  // トリム後のターゲット
  const t = target.trim();
  
  // 戻り値の設定
  return t !== "" ? t.replace(/:/g, "") : "";

}

/********************************************************************************
 * 日時文字列変換(yyyyMMddhhmmss -> yyyy/MM/dd hh:mm:ss)
 *
 * @param target 対象日時
 * @return 日時（yyyy/MM/dd hh:mm:ss）
 * @since 2025/04/04
 * @author Kei Yusu
 *
 *********************************************************************************/
export const toDateTimeString = (target: string): string => {

  // トリム後のターゲット
  const t = target.trim();

  // 戻り値の設定
  return t.length === 14 ? `${t.substring(0,4)}/${t.substring(4,6)}/${t.substring(6,8)} ${t.substring(8,10)}:${t.substring(10,12)}:${t.substring(12,14)}` : "";

}

/********************************************************************************
 * 日時文字列変換(yyyy/MM/dd hh:mm:ss -> yyyyMMddhhmmss)
 *
 * @param target 対象日時
 * @return 日時（yyyyMMddhhmmss）
 * @since 2025/04/04
 * @author Kei Yusu
 *
 *********************************************************************************/
export const toNumberDateTimeString = (target: string): string => {

  // トリム後のターゲット
  const t = target.trim();

  // 戻り値の設定
  return t !== "" ? t.replace(/[/: ]/g, "") : "";

}

/********************************************************************************
 * 日時妥当性判断
 *
 * @param target 対象日時
 * @returns true: 正常 / false: 異常
 * @since 2025/04/04
 * @author Kei Yusu
 * 
 *********************************************************************************/
export const isDateTimeValid = (targrt: string): boolean => {

  // 形式チェックが不正な場合は終了
  // ※正規表現によるチェック（9999/99/99 99:99:99形式）
  if(!targrt.match(/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/)) return false;

  // 要素分割
  const { y, m, d, hr, min, sec} = divideDateTime(targrt)

  // 戻り値の設定
  return isYmdValid(y, m, d) && isHmsValid(hr, min, sec);

}

/********************************************************************************
 * 日付妥当性判断
 *
 * @param targrt 対象日付
 * @returns true: 正常 / false: 異常
 * @since 2025/04/04
 * @author Kei Yusu
 * 
 *********************************************************************************/
export const isDateValid = (targrt: string): boolean => {

  // 形式チェックが不正な場合は終了
  // ※正規表現によるチェック（9999/99/99形式）
  if(!targrt.match(/^\d{4}\/\d{2}\/\d{2}$/)) return false;

  // 要素分割
  const { y, m, d } = divideDateTime(`${targrt} 00:00:00`);

  // 戻り値の設定
  return isYmdValid(y, m, d);

}

/********************************************************************************
 * ymd妥当性判断
 *
 * @param y 年
 * @param m 月
 * @param d 日
 * @returns true: 正常 / false: 異常
 * @since 2025/04/04
 * @author Kei Yusu
 * 
 *********************************************************************************/
export const isYmdValid = (y: number, m: number, d:number) => {

  // 月が範囲外の場合は終了
  if (m < 1 || m > 12) return false;

  // 日の最大値を取得
  const maxDays = new Date(y, m, 0).getDate();

  // 日が範囲外の場合は終了
  if (d < 1 || d > maxDays) return false;

  // 正常時の戻り値の設定
  return true;
}

/********************************************************************************
 * 時刻妥当性判断
 *
 * @param targrt 対象時刻
 * @returns true: 正常 / false: 異常
 * @since 2025/04/04
 * @author Kei Yusu
 * 
 *********************************************************************************/
export const isTimeValid = (targrt: string): boolean => {

  // 形式チェックが不正な場合は終了
  // ※正規表現によるチェック（99:99:99形式）
  if(!targrt.match(/^\d{2}:\d{2}:\d{2}$/)) return false;

  // 要素分割
  const { hr, min, sec} = divideDateTime(`${getNowDateString()} ${targrt}`);

  // 戻り値の設定
  return isHmsValid(hr, min, sec);

}

/********************************************************************************
 * hms妥当性判断
 *
 * @param hr 時
 * @param min 分
 * @param sec 秒
 * @returns true: 正常 / false: 異常
 * @since 2025/04/04
 * @author Kei Yusu
 * 
 *********************************************************************************/
export const isHmsValid = (hr: number, min: number, sec: number) => {

  // 戻り値の設定
  return (
    Number.isInteger(hr) && hr >= 0 && hr <= 23 &&
    Number.isInteger(min) && min >= 0 && min <= 59 &&
    Number.isInteger(sec) && sec >= 0 && sec <= 59
  );

}

/********************************************************************************
 * 年加算
 *
 * @param target 対象日時
 * @param addY 加算年
 * @since 2025/04/04
 * @author Kei Yusu
 * 
 *********************************************************************************/
export const addYears = (target: string, addY: number): string => {

  // 日時として不正な場合は終了
  if(!isDateTimeValid(target)) return target;

  // 要素分割
  const { y, m, d, hr, min, sec } = divideDateTime(target);
  
  // 新規日付作成
  const date = new Date(y + addY, m - 1, d);
  
  // 戻り値の設定
  return makeDateTimeString(date.getFullYear(), date.getMonth() + 1, date.getDate(), hr, min, sec);

}

/********************************************************************************
 * 年加算 [UTC版]
 *
 * @param target 対象日時
 * @param addY 加算年
 * @return 加算後日時(UTC)
 * @since 2025/04/04
 * @author Kei Yusu
 *
 *********************************************************************************/
export const addYearsUTC = (target: string, addY: number): string => {

  // 日時として不正な場合は終了
  if(!isDateTimeValid(target)) return target;

  // 要素分割
  const { y, m, d, hr, min, sec } = divideDateTime(target);

  // 新規日付作成(UTC基準)
  const date = new Date(Date.UTC(y + addY, m - 1, d, hr, min, sec));

  // 戻り値の設定
  return makeDateTimeString(
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );

}

/********************************************************************************
 * 月加算
 *
 * @param target 対象日時
 * @param addM 加算月
 * @since 2025/04/04
 * @author Kei Yusu
 * 
 *********************************************************************************/
export const addMonths = (target: string, addM: number): string => {

  // 日時として不正な場合は終了
  if(!isDateTimeValid(target)) return target;
    
  // 要素分割
  const { y, m, d, hr, min, sec } = divideDateTime(target);
  
  // 加算日付作成
  const add_date = new Date(y, m - 1 + addM, 1);

  // 加算日付の最終日を取得（次月の0日目）
  const last_day = new Date(add_date.getFullYear(), add_date.getMonth() + 1, 0).getDate();
  
  // 新規日付取得
  const date = new Date(add_date.getFullYear(), add_date.getMonth(), Math.min(d, last_day));

  // 戻り値の設定
  return makeDateTimeString(date.getFullYear(), date.getMonth() + 1, date.getDate(), hr, min, sec);

}

/********************************************************************************
 * 月加算 [UTC版]
 *
 * @param target 対象日時
 * @param addM 加算月
 * @return 加算後日時(UTC)
 * @since 2025/04/04
 * @author Kei Yusu
 *
 *********************************************************************************/
export const addMonthsUTC = (target: string, addM: number): string => {

  // 日時として不正な場合は終了
  if(!isDateTimeValid(target)) return target;
    
  // 要素分割
  const { y, m, d, hr, min, sec } = divideDateTime(target);
  
  // 加算日付作成(UTC基準)
  const add_date = new Date(Date.UTC(y, m - 1 + addM, 1, hr, min, sec));

  // 加算日付の最終日を取得（次月の0日目, UTC基準）
  const last_day = new Date(Date.UTC(add_date.getUTCFullYear(), add_date.getUTCMonth() + 1, 0)).getUTCDate();
  
  // 新規日付取得
  const date = new Date(Date.UTC(add_date.getUTCFullYear(), add_date.getUTCMonth(), Math.min(d, last_day), hr, min, sec));

  // 戻り値の設定
  return makeDateTimeString(
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );

}

/********************************************************************************
 * 日加算
 *
 * @param target 対象日時
 * @param addD 加算日
 * @since 2025/04/04
 * @author Kei Yusu
 * 
 *********************************************************************************/
export const addDays = (target: string, addD: number): string => {

  // 日時として不正な場合は終了
  if(!isDateTimeValid(target)) return target;

  // 要素分割
  const { y, m, d, hr, min, sec } = divideDateTime(target);

  // 新規日付作成
  const date = new Date(y, m - 1, d + addD);
  
  // 戻り値の設定
  return makeDateTimeString(date.getFullYear(), date.getMonth() + 1, date.getDate(), hr, min, sec);

}

/********************************************************************************
 * 日加算 [UTC版]
 *
 * @param target 対象日時
 * @param addD 加算日
 * @return 加算後日時(UTC)
 * @since 2025/04/04
 * @author Kei Yusu
 *
 *********************************************************************************/
export const addDaysUTC = (target: string, addD: number): string => {

  // 日時として不正な場合は終了
  if(!isDateTimeValid(target)) return target;

  // 要素分割
  const { y, m, d, hr, min, sec } = divideDateTime(target);

  // 新規日付作成(UTC基準)
  const date = new Date(Date.UTC(y, m - 1, d + addD, hr, min, sec));
  
  // 戻り値の設定
  return makeDateTimeString(
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );

}

/********************************************************************************
 * 時間加算
 *
 * @param target 対象日時
 * @param addHr 加算時間
 * @since 2025/04/04
 * @author Kei Yusu
 * 
 *********************************************************************************/
export const addHours = (target: string, addHr: number): string => {

  // 日時として不正な場合は終了
  if(!isDateTimeValid(target)) return target;

  // 要素分割
  const { y, m, d, hr, min, sec } = divideDateTime(target);

  // 新規日付作成
  const date = new Date(y, m - 1, d, hr + addHr, min, sec);
  
  // 戻り値の設定
  return makeDateTimeString(date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());

}

/********************************************************************************
 * 時間加算 [UTC版]
 *
 * @param target 対象日時
 * @param addHr 加算時間
 * @return 加算後日時(UTC)
 * @since 2025/04/04
 * @author Kei Yusu
 *
 *********************************************************************************/
export const addHoursUTC = (target: string, addHr: number): string => {

  // 日時として不正な場合は終了
  if(!isDateTimeValid(target)) return target;

  // 要素分割
  const { y, m, d, hr, min, sec } = divideDateTime(target);

  // 新規日付作成(UTC基準)
  const date = new Date(Date.UTC(y, m - 1, d, hr + addHr, min, sec));
  
  // 戻り値の設定
  return makeDateTimeString(
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );

}

/********************************************************************************
 * 分加算
 *
 * @param target 対象日時
 * @param addMin 加算分
 * @since 2025/04/04
 * @author Kei Yusu
 * 
 *********************************************************************************/
export const addMinutes = (target: string, addMin: number): string => {

  // 日時として不正な場合は終了
  if(!isDateTimeValid(target)) return target;

  // 要素分割
  const { y, m, d, hr, min, sec } = divideDateTime(target)

  // 新規日付作成
  const date = new Date(y, m - 1, d, hr, min + addMin, sec);
  
  // 戻り値の設定
  return makeDateTimeString(date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());

}

/********************************************************************************
 * 分加算 [UTC版]
 *
 * @param target 対象日時
 * @param addMin 加算分
 * @return 加算後日時(UTC)
 * @since 2025/04/04
 * @author Kei Yusu
 *
 *********************************************************************************/
export const addMinutesUTC = (target: string, addMin: number): string => {

  // 日時として不正な場合は終了
  if(!isDateTimeValid(target)) return target;

  // 要素分割
  const { y, m, d, hr, min, sec } = divideDateTime(target);

  // 新規日付作成(UTC基準)
  const date = new Date(Date.UTC(y, m - 1, d, hr, min + addMin, sec));
  
  // 戻り値の設定
  return makeDateTimeString(
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );

}

/********************************************************************************
 * 秒加算
 *
 * @param target 対象日時
 * @param addSec 加算秒
 * @since 2025/04/04
 * @author Kei Yusu
 * 
 *********************************************************************************/
export const addSeconds = (target: string, addSec: number): string => {

  // 日時として不正な場合は終了
  if(!isDateTimeValid(target)) return target;

  // 要素分割
  const { y, m, d, hr, min, sec } = divideDateTime(target);

  // 新規日付作成
  const date = new Date(y, m - 1, d, hr, min, sec + addSec);
  
  // 戻り値の設定
  return makeDateTimeString(date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());

}

/********************************************************************************
 * 秒加算 [UTC版]
 *
 * @param target 対象日時
 * @param addSec 加算秒
 * @return 加算後日時(UTC)
 * @since 2025/04/04
 * @author Kei Yusu
 *
 *********************************************************************************/
export const addSecondsUTC = (target: string, addSec: number): string => {

  // 日時として不正な場合は終了
  if(!isDateTimeValid(target)) return target;

  // 要素分割
  const { y, m, d, hr, min, sec } = divideDateTime(target);

  // 新規日付作成(UTC基準)
  const date = new Date(Date.UTC(y, m - 1, d, hr, min, sec + addSec));
  
  // 戻り値の設定
  return makeDateTimeString(
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );

}

/********************************************************************************
 * 経過計算
 *
 * @param target1 日時1
 * @param target2 日時2
 * @returns { 年, 月, 日, 時, 分, 秒 }
 * @since 2025/04/04
 * @author Kei Yusu
 * @see 人間の感覚での「経過時間」を算出する。
 *********************************************************************************/
export const pastDateTime = (target1: string, target2: string): { y: number, m: number, d: number, hr: number, min: number, sec: number } => {

  // 日付が不正な場合は終了
  if (!isDateTimeValid(target1) || !isDateTimeValid(target2)) return { y: 0, m: 0, d: 0, hr: 0, min: 0, sec: 0 };

  // 要素分割
  const { y: y1, m: m1, d: d1, hr: hr1, min: min1, sec: sec1 } = divideDateTime(target1)
  const { y: y2, m: m2, d: d2, hr: hr2, min: min2, sec: sec2 } = divideDateTime(target2)

  // 日付オブジェクト取得
  let date1 = new Date(y1, m1 - 1, d1, hr1, min1, sec1);
  let date2 = new Date(y2, m2 - 1, d2, hr2, min2, sec2);

  // 日付の順序を統一（date1 < date2 になるように）
  if (date1 > date2) [date1, date2] = [date2, date1];

  // 各差分取得
  let y = date2.getFullYear() - date1.getFullYear();
  let m = date2.getMonth() - date1.getMonth();
  let d = date2.getDate() - date1.getDate();
  let hr = date2.getHours() - date1.getHours();
  let min = date2.getMinutes() - date1.getMinutes();
  let sec = date2.getSeconds() - date1.getSeconds();

  // 調整: 秒が負の場合
  if (sec < 0) {
      min--;
      sec += 60;
  }

  // 調整: 分が負の場合
  if (min < 0) {
      hr--;
      min += 60;
  }

  // 調整: 時が負の場合
  if (hr < 0) {
      d--;
      hr += 24;
  }

  // 調整: 日が負の場合
  if (d < 0) {
      m--;
      let prevMonth = new Date(date2.getFullYear(), date2.getMonth(), 0);
      d += prevMonth.getDate();
  }

  // 調整: 月が負の場合
  if (m < 0) {
      y--;
      m += 12;
  }

  // 戻り値の設定
  return { y, m, d, hr, min, sec };

}

/********************************************************************************
 * 経過計算 [UTC版]
 *
 * @param target1 日時1
 * @param target2 日時2
 * @returns { 年, 月, 日, 時, 分, 秒 }
 * @since 2025/04/04
 * @author Kei Yusu
 * @see 人間の感覚での「経過時間」をUTC基準で算出する。
 *********************************************************************************/
export const pastDateTimeUTC = (target1: string, target2: string): { y: number, m: number, d: number, hr: number, min: number, sec: number } => {

  // 日付が不正な場合は終了
  if (!isDateTimeValid(target1) || !isDateTimeValid(target2)) return { y: 0, m: 0, d: 0, hr: 0, min: 0, sec: 0 };

  // 要素分割
  const { y: y1, m: m1, d: d1, hr: hr1, min: min1, sec: sec1 } = divideDateTime(target1);
  const { y: y2, m: m2, d: d2, hr: hr2, min: min2, sec: sec2 } = divideDateTime(target2);

  // 日付オブジェクト取得(UTC基準)
  let date1 = new Date(Date.UTC(y1, m1 - 1, d1, hr1, min1, sec1));
  let date2 = new Date(Date.UTC(y2, m2 - 1, d2, hr2, min2, sec2));

  // 日付の順序を統一（date1 < date2 になるように）
  if (date1 > date2) [date1, date2] = [date2, date1];

  // 各差分取得(UTC基準)
  let y = date2.getUTCFullYear() - date1.getUTCFullYear();
  let m = date2.getUTCMonth() - date1.getUTCMonth();
  let d = date2.getUTCDate() - date1.getUTCDate();
  let hr = date2.getUTCHours() - date1.getUTCHours();
  let min = date2.getUTCMinutes() - date1.getUTCMinutes();
  let sec = date2.getUTCSeconds() - date1.getUTCSeconds();

  // 調整: 秒が負の場合
  if (sec < 0) {
      min--;
      sec += 60;
  }

  // 調整: 分が負の場合
  if (min < 0) {
      hr--;
      min += 60;
  }

  // 調整: 時が負の場合
  if (hr < 0) {
      d--;
      hr += 24;
  }

  // 調整: 日が負の場合
  if (d < 0) {
      m--;
      let prevMonth = new Date(Date.UTC(date2.getUTCFullYear(), date2.getUTCMonth(), 0));
      d += prevMonth.getUTCDate();
  }

  // 調整: 月が負の場合
  if (m < 0) {
      y--;
      m += 12;
  }

  // 戻り値の設定
  return { y, m, d, hr, min, sec };

}

/********************************************************************************
 * 差分算出（日単位）
 *
 * @param target1 開始日時（yyyy/MM/dd hh:mm:ss）
 * @param target2 終了日時（yyyy/MM/dd hh:mm:ss）
 * @returns 差分（日）
 * @since 2025/11/07
 * @author Kei Yusu
 * @note 戻り値は小数点を含む場合があります。必要に応じて Math.floor / Math.round で処理してください。
 *********************************************************************************/
export const diffDay = (target1: string, target2: string): number => {

  // 妥当性チェック（いずれかが不正なら0を返却）
  if (!isDateTimeValid(target1) || !isDateTimeValid(target2)) return 0;

  // 日付オブジェクト生成
  const d1 = new Date(target1.replace(/\//g, "-"));
  const d2 = new Date(target2.replace(/\//g, "-"));

  // 戻り値の設定（日単位）
  return (d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24);

}

/********************************************************************************
 * 差分算出（日単位）[UTC版]
 *
 * @param target1 開始日時（yyyy/MM/dd hh:mm:ss）
 * @param target2 終了日時（yyyy/MM/dd hh:mm:ss）
 * @returns 差分（日, UTC基準）
 * @since 2025/11/07
 * @author Kei Yusu
 *********************************************************************************/
export const diffDayUTC = (target1: string, target2: string): number => {

  // 妥当性チェック
  if (!isDateTimeValid(target1) || !isDateTimeValid(target2)) return 0;

  // 日付オブジェクト生成
  const d1 = new Date(target1.replace(/\//g, "-"));
  const d2 = new Date(target2.replace(/\//g, "-"));

  // 差分算出（UTC基準の日単位）
  const diff = Date.UTC(
    d2.getUTCFullYear(), d2.getUTCMonth(), d2.getUTCDate(),
    d2.getUTCHours(), d2.getUTCMinutes(), d2.getUTCSeconds()
  ) - Date.UTC(
    d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(),
    d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds()
  );

  // 戻り値の設定
  return diff / (1000 * 60 * 60 * 24);

}

/********************************************************************************
 * 差分算出（時間単位）
 *
 * @param target1 開始日時（yyyy/MM/dd hh:mm:ss）
 * @param target2 終了日時（yyyy/MM/dd hh:mm:ss）
 * @returns 差分（時間）
 * @since 2025/11/07
 * @author Kei Yusu
 *********************************************************************************/
export const diffHour = (target1: string, target2: string): number => {

  // 妥当性チェック
  if (!isDateTimeValid(target1) || !isDateTimeValid(target2)) return 0;

  // 日付オブジェクト生成
  const d1 = new Date(target1.replace(/\//g, "-"));
  const d2 = new Date(target2.replace(/\//g, "-"));

  // 戻り値の設定（時間単位）
  return (d2.getTime() - d1.getTime()) / (1000 * 60 * 60);

}

/********************************************************************************
 * 差分算出（時間単位）[UTC版]
 *
 * @param target1 開始日時（yyyy/MM/dd hh:mm:ss）
 * @param target2 終了日時（yyyy/MM/dd hh:mm:ss）
 * @returns 差分（時間, UTC基準）
 * @since 2025/11/07
 * @author Kei Yusu
 *********************************************************************************/
export const diffHourUTC = (target1: string, target2: string): number => {

  // 妥当性チェック
  if (!isDateTimeValid(target1) || !isDateTimeValid(target2)) return 0;

  // 日付オブジェクト生成
  const d1 = new Date(target1.replace(/\//g, "-"));
  const d2 = new Date(target2.replace(/\//g, "-"));

  // 差分算出（UTC基準の時間単位）
  const diff = Date.UTC(
    d2.getUTCFullYear(), d2.getUTCMonth(), d2.getUTCDate(),
    d2.getUTCHours(), d2.getUTCMinutes(), d2.getUTCSeconds()
  ) - Date.UTC(
    d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(),
    d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds()
  );

  // 戻り値の設定
  return diff / (1000 * 60 * 60);

}

/********************************************************************************
 * 差分算出（分単位）
 *
 * @param target1 開始日時（yyyy/MM/dd hh:mm:ss）
 * @param target2 終了日時（yyyy/MM/dd hh:mm:ss）
 * @returns 差分（分）
 * @since 2025/11/07
 * @author Kei Yusu
 *********************************************************************************/
export const diffMinute = (target1: string, target2: string): number => {

  // 妥当性チェック
  if (!isDateTimeValid(target1) || !isDateTimeValid(target2)) return 0;

  // 日付オブジェクト生成
  const d1 = new Date(target1.replace(/\//g, "-"));
  const d2 = new Date(target2.replace(/\//g, "-"));

  // 戻り値の設定（分単位）
  return (d2.getTime() - d1.getTime()) / (1000 * 60);

}

/********************************************************************************
 * 差分算出（分単位）[UTC版]
 *
 * @param target1 開始日時（yyyy/MM/dd hh:mm:ss）
 * @param target2 終了日時（yyyy/MM/dd hh:mm:ss）
 * @returns 差分（分, UTC基準）
 * @since 2025/11/07
 * @author Kei Yusu
 *********************************************************************************/
export const diffMinuteUTC = (target1: string, target2: string): number => {

  // 妥当性チェック
  if (!isDateTimeValid(target1) || !isDateTimeValid(target2)) return 0;

  // 日付オブジェクト生成
  const d1 = new Date(target1.replace(/\//g, "-"));
  const d2 = new Date(target2.replace(/\//g, "-"));

  // 差分算出（UTC基準の分単位）
  const diff = Date.UTC(
    d2.getUTCFullYear(), d2.getUTCMonth(), d2.getUTCDate(),
    d2.getUTCHours(), d2.getUTCMinutes(), d2.getUTCSeconds()
  ) - Date.UTC(
    d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(),
    d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds()
  );

  // 戻り値の設定
  return diff / (1000 * 60);

}

/********************************************************************************
 * 差分算出（秒単位）
 *
 * @param target1 開始日時（yyyy/MM/dd hh:mm:ss）
 * @param target2 終了日時（yyyy/MM/dd hh:mm:ss）
 * @returns 差分（秒）
 * @since 2025/11/07
 * @author Kei Yusu
 *********************************************************************************/
export const diffSecond = (target1: string, target2: string): number => {

  // 妥当性チェック
  if (!isDateTimeValid(target1) || !isDateTimeValid(target2)) return 0;

  // 日付オブジェクト生成
  const d1 = new Date(target1.replace(/\//g, "-"));
  const d2 = new Date(target2.replace(/\//g, "-"));

  // 戻り値の設定（秒単位）
  return (d2.getTime() - d1.getTime()) / 1000;

}

/********************************************************************************
 * 差分算出（秒単位）[UTC版]
 *
 * @param target1 開始日時（yyyy/MM/dd hh:mm:ss）
 * @param target2 終了日時（yyyy/MM/dd hh:mm:ss）
 * @returns 差分（秒, UTC基準）
 * @since 2025/11/07
 * @author Kei Yusu
 *********************************************************************************/
export const diffSecondUTC = (target1: string, target2: string): number => {

  // 妥当性チェック
  if (!isDateTimeValid(target1) || !isDateTimeValid(target2)) return 0;

  // 日付オブジェクト生成
  const d1 = new Date(target1.replace(/\//g, "-"));
  const d2 = new Date(target2.replace(/\//g, "-"));

  // 差分算出（UTC基準の秒単位）
  const diff = Date.UTC(
    d2.getUTCFullYear(), d2.getUTCMonth(), d2.getUTCDate(),
    d2.getUTCHours(), d2.getUTCMinutes(), d2.getUTCSeconds()
  ) - Date.UTC(
    d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(),
    d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds()
  );

  // 戻り値の設定
  return diff / 1000;

}

/********************************************************************************
 * 差分算出（ミリ秒単位）
 *
 * @param target1 開始日時（yyyy/MM/dd hh:mm:ss）
 * @param target2 終了日時（yyyy/MM/dd hh:mm:ss）
 * @returns 差分（ミリ秒）
 * @since 2025/11/07
 * @author Kei Yusu
 *********************************************************************************/
export const diffMilli = (target1: string, target2: string): number => {

  // 妥当性チェック
  if (!isDateTimeValid(target1) || !isDateTimeValid(target2)) return 0;

  // 日付オブジェクト生成
  const d1 = new Date(target1.replace(/\//g, "-"));
  const d2 = new Date(target2.replace(/\//g, "-"));

  // 戻り値の設定（ミリ秒単位）
  return d2.getTime() - d1.getTime();

}

/********************************************************************************
 * 差分算出（ミリ秒単位）[UTC版]
 *
 * @param target1 開始日時（yyyy/MM/dd hh:mm:ss）
 * @param target2 終了日時（yyyy/MM/dd hh:mm:ss）
 * @returns 差分（ミリ秒, UTC基準）
 * @since 2025/11/07
 * @author Kei Yusu
 *********************************************************************************/
export const diffMilliUTC = (target1: string, target2: string): number => {

  // 妥当性チェック
  if (!isDateTimeValid(target1) || !isDateTimeValid(target2)) return 0;

  // 日付オブジェクト生成
  const d1 = new Date(target1.replace(/\//g, "-"));
  const d2 = new Date(target2.replace(/\//g, "-"));

  // 差分算出（UTC基準のミリ秒単位）
  const diff = Date.UTC(
    d2.getUTCFullYear(), d2.getUTCMonth(), d2.getUTCDate(),
    d2.getUTCHours(), d2.getUTCMinutes(), d2.getUTCSeconds()
  ) - Date.UTC(
    d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(),
    d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds()
  );

  // 戻り値の設定
  return diff;

}

/********************************************************************************
 * 日時文字列分割
 *
 * @param target 日時
 * @returns { 日付, 時刻, 年, 月, 日, 時, 分, 秒 }
 * @since 2025/04/04
 * @author Kei Yusu
 * 
 *********************************************************************************/
export const divideDateTime = (target: string): { date: string, time: string, y: number, m: number, d: number, hr: number, min: number, sec: number } => {

  // トリム後のターゲット
  const t = target.trim();
  
  // 対象日が空白の場合は終了
  if (t === "") return { date: "", time: "", y: 0, m: 0, d: 0, hr: 0, min: 0, sec: 0 };

  // 要素分割
  const [dSplit = "", tSplit = "00:00:00"] = t.split(" ");

  // 年月日・時分秒を安全に分割
  const [yStr = "0", mStr = "0", dStr = "0"] = dSplit.split("/");
  const [hrStr = "0", minStr = "0", secStr = "0"] = tSplit.split(":");

  // 数値変換（NaN時は0にフォールバック）
  const y = parseInt(yStr) || 0;
  const m = parseInt(mStr) || 0;
  const d = parseInt(dStr) || 0;
  const hr = parseInt(hrStr) || 0;
  const min = parseInt(minStr) || 0;
  const sec = parseInt(secStr) || 0;
  
  // 戻り値の設定
  return { date: dSplit, time: tSplit, y, m, d, hr, min, sec };

}

/********************************************************************************
 * 日時文字列作成
 *
 * @param y 年
 * @param m 月
 * @param d 日
 * @param hr 時
 * @param min 分
 * @param sec 秒
 * @returns 日時文字列
 * @since 2025/04/04
 * @author Kei Yusu
 * 
 *********************************************************************************/
export const makeDateTimeString = (y: number, m: number, d: number, hr: number, min: number, sec: number): string => {

  // 戻り値の設定
  return (
    y.toString()
    + "/" + ("0" + m).slice(-2)
    + "/" + ("0" + d).slice(-2)
    + " " + ("0" + hr).slice(-2)
    + ":" + ("0" + min).slice(-2)
    + ":" + ("0" + sec).slice(-2)
    );

}
