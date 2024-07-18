interface Values {
  name: string
}

const arrayToString = (array: Values[], delimiter: string): string => {
  return array.map((item, index, arr) => index === arr.length - 1 ? item.name : item.name + delimiter).join(" ")
} 

export default arrayToString