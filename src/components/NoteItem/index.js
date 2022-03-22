// Write your code here

import {NoteListItem, Title, Note} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, noteText} = noteDetails

  return (
    <NoteListItem>
      <Title>{title}</Title>
      <Note>{noteText}</Note>
    </NoteListItem>
  )
}

export default NoteItem
