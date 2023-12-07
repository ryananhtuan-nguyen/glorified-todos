'use client'

import { useEffect, useState } from 'react'
import { DragDropContext, DropResult, Droppable } from '@hello-pangea/dnd'

import { ListWithCards } from '@/types'
import ListForm from './ListForm'
import ListItem from './ListItem'

interface ListContainerProps {
  data: ListWithCards[]
  boardId: string
}

function reorder<T>(list: T[], startIndex: number, endIndex: number) {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  //

  return result
}

const ListContainer = ({ data, boardId }: ListContainerProps) => {
  const [orderedData, setOrderedData] = useState(data)

  useEffect(() => {
    setOrderedData(data)
  }, [data])

  const onDragEnd = (result: DropResult) => {
    const { destination, source, type } = result

    if (!destination) {
      return
    }
    //Dropped in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }
    //user move a list
    if (type === 'list') {
      const items = reorder(orderedData, source.index, destination.index).map(
        (item, index) => ({ ...item, order: index })
      )
      setOrderedData(items)
      //TODO : Trigger Server Action
    }

    //User move a card

    if (type === 'card') {
      let newOrderedData = [...orderedData]

      // Source and destination List
      const sourceList = newOrderedData.find(
        (list) => list.id === source.droppableId
      )

      const destList = newOrderedData.find(
        (list) => list.id === destination.droppableId
      )

      if (!sourceList || !destList) {
        return
      }

      //Check if cards exists on the sourceList

      if (!sourceList.cards) {
        sourceList.cards = []
      }

      //Check if cards exist on the destList
      if (!destList.cards) {
        destList.cards = []
      }

      // Moving the card in the same list
      if (source.droppableId === destination.droppableId) {
        const reorderedCards = reorder(
          sourceList.cards,
          source.index,
          destination.index
        )

        reorderedCards.forEach((card, idx) => {
          card.order = idx
        })

        sourceList.cards = reorderedCards

        setOrderedData(newOrderedData)

        //TODO: Trigger Server Action

        //User moves card to another list
      } else {
        //Remove card from the sourceList
        const [movedCard] = sourceList.cards.splice(source.index, 1)

        //Assign the new listId to the moved card
        movedCard.listId = destination.droppableId

        //add card to the destination list
        destList.cards.splice(destination.index, 0, movedCard)

        //reorder destlist
        sourceList.cards.forEach((card, idx) => {
          card.order = idx
        })

        //Update the order for each card in the dest list

        destList.cards.forEach((card, idx) => {
          card.order = idx
        })

        setOrderedData(newOrderedData)

        //TODO: Trigger Server action
      }
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="lists" type="list" direction="horizontal">
        {(provided) => (
          <ol
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex gap-x-3 h-full"
          >
            {orderedData.map((list, index) => {
              return <ListItem key={list.id} index={index} data={list} />
            })}
            {provided.placeholder}
            <ListForm />
            <div className="flex-shrink-0 w-1" />
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default ListContainer
