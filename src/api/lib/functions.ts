// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment';

export const numberWithCommas = (x: string | number) => {
  const t = typeof x === 'number' ? x.toString() : x;
  if (x === undefined || t === null) return null;
  return t.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const trimFilter = (t: string, size: number) => {
  return t.length > size ? `${t.substring(0, size)}...` : t;
};

export const byteUnit = (size: number) => {
  if (size > 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  return `${(size / 1024).toFixed(2)} KB`;
};

export const localDate = (d: string | Date) => {
  if (!d) return '-';
  return moment(d).local().format('YYYY. MM. DD HH:mm:ss');
};

export const localDay = (d: string | Date) => {
  if (!d) return '-';
  return moment(d).local().format('YYYY. MM. DD');
};

export const localDayDiff = (d: string | Date) => {
  if (!d) return '-';
  return moment(d).local().format('YYYYMMDD');
};

export const timeFormat = (s: number) => {
  // format number of seconds to hh:mm:ss
  const secNum: number = parseInt(`${s}`, 10);
  const hours = Math.floor(secNum / 3600);
  const minutes = Math.floor((secNum - hours * 3600) / 60);
  const seconds = secNum - hours * 3600 - minutes * 60;

  const times = [hours, minutes, seconds];
  return times
    .map((time) => {
      const tmp = `0${time}`;
      return tmp.slice(-2);
    })
    .join(':');
};

export const findStaticScanLibraryVersion = (item: { id: string; version: string }) => {
  const idVersion = item.id.split('|').slice(3).join('|');
  if (idVersion !== item.version) {
    const splitItemId = item.id.split('|').slice(0, 3);
    splitItemId.push(item.version);
    return splitItemId.join('|');
  }
  return item.id;
};

export const isUUID = (uuid?: string) => {
  const s = `${uuid}`;
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(s);
};

export const getFileExtension = (name: string) => {
  const nameArr = name.split('.');
  const { length } = nameArr;
  const extension = nameArr[length - 1];

  return extension;
};

export const getMediumValueInArray = (arr: number[]) => {
  const sorted = arr.sort((a, b) => a - b);
  const mid = Math.floor((sorted?.length ?? 0) / 2);
  return (sorted?.length ?? 0) % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
};

export const highlight = (str: string, kwd: string, textColor?: string) => {
  // if textColor parameter is empty, set to green
  const txtColor = textColor || 'text-ivas-primary';

  if (!kwd) return str;
  // perfect match ...
  const perfectReg = new RegExp(kwd, 'gi');

  // if (perfectReg.test(str) && kwd !== '') {
  //   return str.replace(perfectReg, (match) => `<span class="text-ivas-primary">${match}</span>`);
  // }
  if (perfectReg.test(str) && kwd !== '') {
    if (textColor) return str.replace(perfectReg, (match) => `<span class="${txtColor} font-extrabold">${match}</span>`);
    return str.replace(perfectReg, (match) => `<span class="text-ivas-primary font-extrabold">${match}</span>`);
  }
  // default
  const kwdBySpace = kwd.split(/[^a-zA-Z0-9]/);
  let resStr = str;
  kwdBySpace.forEach((k) => {
    const regExp = new RegExp(k, 'gi');
    if (k !== '') {
      if (textColor) resStr = resStr.replace(regExp, (match) => `<span class="${txtColor} font-extrabold">${match}</span>`);
      else resStr = resStr.replace(regExp, (match) => `<span class="text-ivas-primary font-extrabold">${match}</span>`);
    }
  });

  return resStr;
};

export const isDev = () => {
  if (process.env.NODE_ENV === 'development') return true;
  return false;
};
