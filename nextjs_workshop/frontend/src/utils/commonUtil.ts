export const productImageURL = (image?: string): string => {
  return `${process.env.NEXT_PUBLIC_BASE_IMAGE_URL_API}/${image}`;
};

export const userProfileImageURL = (image?: string): string => {
  return `${process.env.NEXT_PUBLIC_BASE_IMAGE_URL_API}/${image}`;
};

export const isClient = () => typeof window !== "undefined";

export const isServer = () => typeof window === "undefined";

export const getWindow = () => isClient() && window;

export const getBase64 = (file: any): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

export function getRandomInt(): any {
  let randoms = [];
  for (let index = 0; index <= labels.length; index++) {
    randoms.push(Math.floor(Math.random() * (50000 - 5 + 1)) + 5);
  }
  return randoms;
}
