export default interface TodoItem {
  title: string,
  time: number, //The time to harvest a tomato
  goal: number, //Want to harvest the number of tomatoes
}

export const defaultValue:TodoItem = {
  title: 'asd',
  time: 15,
  goal: 2
}