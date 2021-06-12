import {Injectable} from '@angular/core';
import {Notes} from "../model/notes";

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: Notes[] = JSON.parse(<string>localStorage.getItem("notes"))||[]

  constructor() {
  }

  getNotesAll() {
    return this.notes
  }

  getNotes(note: Notes) {
    this.notes.push(note)
  }

  updateNotes(index: number, updatedTodo: Notes) {
    this.notes[index] = updatedTodo
  }

  deleteNotes(removeIndex: number) {
    this.notes.splice(removeIndex, 1)
  }
}
