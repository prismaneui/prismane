// Validator
import url from "./url";

test("Normal error", () => {
  const urls = [
    "example.com",
    "www.example.com",
    "htp://example.com",
    "http://example .com",
  ];

  urls.forEach((address) => {
    expect(url(address)).toBe("This is not a valid URL!");
  });
});

test("No error", () => {
  const urls = [
    "https://www.example.com",
    "http://example.com",
    "ftp://ftp.example.com",
  ];

  urls.forEach((address) => {
    expect(url(address)).toBeNull();
  });
});
