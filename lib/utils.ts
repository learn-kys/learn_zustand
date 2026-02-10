export function generatedRandomString(len: number) {
  const zibrish = "Asdf23sdjfSDLOWsldfao";

  let result = "";

  for (let i = 0; i <= len; i++) {
    const randomIndex = Math.floor(Math.random() * 10);
    result = result + zibrish[randomIndex];
  }

  return result;
}

console.log(generatedRandomString(5));
