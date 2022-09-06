import './style.css'
import {useState} from 'react';
import NoteForm from './components/NoteForm';
import NoteItmList from './components/NoteItmList';


function App() {

  /*react app, but demo version */

  const [notes, setNotes] = useState([
    {
      id: 1, noteText: 'Your first note!:).', noteTheme:'random'
    }
  ]);

  const createNote=(newNote)=>{
      setNotes([...notes, newNote])
  }

  const deleteNote=(note)=>{
    setNotes(notes.filter(p=>p.id!==note.id))
  }

  return (
    <div className="App">


      <div className='Head'>
        Lucky Notes App 
      </div>
 

      <div className='Form'>
        <NoteForm create={createNote}/>
      </div>

      {notes.length!==0
      ?  
        <div className='Notes'>
            <NoteItmList notes={notes} del={deleteNote}/>
        </div>
      : 
        <div className='Notes'>
          <div className='noNotes'> 
            Pam Pam there are no notes here!
          </div>
        </div>
      }
     
    </div>
  );
}

export default App;


