export default interface TodoItem {
  no: number, //number of tomato trees, up to 8
  title: string,
  time: number, //The time to harvest a tomato
  goal: number, //Want to harvest the number of tomatoes
}

export const defaultValue:TodoItem = {
  no: 0,
  title: 'asd',
  time: 15,
  goal: 2
}