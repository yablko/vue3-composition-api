/**
 * ADD NEW CARD
 * to list with listId
 *
 * @param {object} data
 * @param {array} lists
 */
export const addNewCard = (data, lists) => {
  if (!data.text) return

  let listForNewCard = lists.find(list => list.id === data.listId)
  let cardMaxId = listForNewCard.cards.length
    ? Math.max(...listForNewCard.cards.map(card => card.id))
    : 0

  listForNewCard.cards.push({
    id: cardMaxId + 1,
    text: data.text
  })
}
