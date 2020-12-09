/**
 * ADD NEW LIST
 *
 * @param {string} title
 * @param {array} lists
 */
export const addNewList = (title, lists) => {
  if (!title) return

  let listMaxId = lists.length ? Math.max(...lists.map(list => list.id)) : 0

  lists.push({
    id: listMaxId + 1,
    title: title,
    cards: []
  })
}
