import { JournalLayout } from '../layout/JournalLayout'
import { NoteView } from '../views/NoteView'
import { NothingSelectedView } from '../views/NothingSelectedView'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Ad eiusmod esse sit ipsum reprehenderit veniam irure do dolore ex dolore.</Typography> */}
      {/* <NothingSelectedView/> */}
      <NoteView/>
    </JournalLayout>
  )
}

