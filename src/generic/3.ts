/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends Record<string, any>, U extends Record<string, any>>(
  objA: T,
  objB: U
): T & U {
  return Object.assign({}, objA, objB);
}

export {};
