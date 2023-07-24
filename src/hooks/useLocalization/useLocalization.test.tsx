import { test } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";
// Hook
import useLocalization from "./useLocalization";

test("Correct initialization with the default locale", () => {
  const defaultLocale = "en";
  const translations = {
    en: "Hello",
    fr: "Bonjour",
    es: "Hola",
  };

  const { result } = renderHook(() =>
    useLocalization(defaultLocale, translations)
  );

  expect(result.current.locale).toBe(defaultLocale);
  expect(result.current.text).toBe(translations[defaultLocale]);
});

test("Correct change of locale and update of text", () => {
  const defaultLocale = "en";
  const translations = {
    en: "Hello",
    fr: "Bonjour",
    es: "Hola",
  };

  const { result } = renderHook(() =>
    useLocalization(defaultLocale, translations)
  );

  expect(result.current.locale).toBe(defaultLocale);
  expect(result.current.text).toBe(translations[defaultLocale]);

  act(() => {
    result.current.changeLocale("fr");
  });

  expect(result.current.locale).toBe("fr");
  expect(result.current.text).toBe(translations["fr"]);
});

test("Correct not changing translation if locale is non existant", () => {
  const defaultLocale = "en";
  const translations = {
    en: "Hello",
    fr: "Bonjour",
    es: "Hola",
  };

  const { result } = renderHook(() =>
    useLocalization(defaultLocale, translations)
  );

  expect(result.current.locale).toBe(defaultLocale);
  expect(result.current.text).toBe(translations[defaultLocale]);

  act(() => {
    result.current.changeLocale("de");
  });

  expect(result.current.locale).toBe(defaultLocale);
  expect(result.current.text).toBe(translations[defaultLocale]);
});
