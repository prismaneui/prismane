import { useState, useEffect } from "react";

const useLocalization = (dl: string, translations: any) => {
  const [locale, setLocale] = useState(dl);
  const [text, setText] = useState(translations[dl]);

  useEffect(() => {
    setText(translations[locale]);
  }, [locale, translations]);

  const changeLocale = (nl: string) => {
    if (translations.hasOwnProperty(nl)) {
      setLocale(nl);
    } else {
      console.warn(`Translation not available for locale: ${nl}`);
    }
  };

  return { locale, text, changeLocale };
};

export default useLocalization;
