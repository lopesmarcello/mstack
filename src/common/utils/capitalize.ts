function capitalizeWord(word: string) {
  const firstLetter = word.charAt(0);
  const restOfWord = word.slice(1);
  return firstLetter.toLocaleUpperCase() + restOfWord.toLocaleLowerCase();
}

export function capitalize(name: string) {
  const nameArray = name.split(" ");
  const capitalizedName = nameArray
    .map((name) => capitalizeWord(name))
    .join(" ");

  return capitalizedName;
}
