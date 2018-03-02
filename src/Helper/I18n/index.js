/**
 * @providesModule translation
 */

import I18n from "react-native-i18n";

I18n.locale = I18n.currentLocale();

import de from "./de";
import en from "./en";

I18n.fallbacks = true;

I18n.translations = {
  en: en,
  de: de
};

export default I18n;
