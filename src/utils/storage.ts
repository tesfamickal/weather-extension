export interface LocalStorage {
  cityArr?: string[];
}

export type LocalStorageKeys = keyof LocalStorage;

export function setStoredCities(cityArr: string[]): Promise<void> {
  const vals: LocalStorage = {
    cityArr,
  };
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve();
    });
  });
}

export function getStoredCities(): Promise<string[]> {
  const keys: LocalStorageKeys[] = ["cityArr"];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res: LocalStorage) => {
      resolve(res.cityArr ?? []);
    });
  });
}
