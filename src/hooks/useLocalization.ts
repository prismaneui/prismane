import { useState, useEffect } from "react";

const useLocalization = (dl: string, translations: any) => {
  const [locale, setLocale] = useState(dl);
  const [localizedText, setLocalizedText] = useState(translations[dl]);

  useEffect(() => {
    setLocalizedText(translations[locale]);
  }, [locale, translations]);

  const changeLocale = (nl: string) => {
    if (translations.hasOwnProperty(nl)) {
      setLocale(nl);
    } else {
      console.warn(`Translation not available for locale: ${nl}`);
    }
  };

  return { locale, localizedText, changeLocale };
};

export default useLocalization;
