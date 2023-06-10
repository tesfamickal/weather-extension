import { setStoredCities } from "../utils/storage";
console.log("test");
chrome.runtime.onInstalled.addListener(() => {
  setStoredCities([]);
  console.log("Testing...");
});
