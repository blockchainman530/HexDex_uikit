import { useContext } from "react";
import { TranslationsContext } from "../context/Localisation/translationsContext";
import { getTranslation } from "../util/translateTextHelpers";

const useI18n = () => {
  const { translations } = useContext(TranslationsContext);

  return (translationId: number, fallback: string) => {
    if (translations[0] === "error") {
      return fallback;
    }
    if (translations.length > 0) {
      return getTranslation(translations, translationId, fallback);
    }
    return fallback;
  };
};

export default useI18n;
