import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Notes} from "../../model/notes";
import {NotesService} from "../../services/notes.service";

@Component({
  selector: 'app-notes-create',
  templateUrl: './notes-create.component.html',
  styleUrls: ['./notes-create.component.css']
})
export class NotesCreateComponent implements OnInit {
  note:Notes[]
  flag = false
  index = 0
  textControl = new FormControl("")

  myFormGroup: FormGroup = new FormGroup({
    text: this.textControl,
  })

  constructor(private noteService: NotesService) {
  }

  ngOnInit(): void {
    this.note = this.noteService.getNotesAll()
  }

  add() {
    this.noteService.getNotes({
      text: this.textControl.value
    })
    console.log(this.note)
    this.textControl = new FormControl("")
    localStorage.setItem("notes",JSON.stringify(this.note))
  }

  delete(note: Notes) {
    const removeIndex = this.note.indexOf(note)
    this.noteService.deleteNotes(removeIndex)
    localStorage.setItem("notes",JSON.stringify(this.note))
  }

  update(note: Notes) {
    this.textControl = new FormControl(note.text)
    this.flag = true
    this.index = this.note.indexOf(note)
  }

  edit() {
    this.noteService.updateNotes(this.index, {
      text: this.textControl.value
    })
    this.flag = false
    localStorage.setItem("notes",JSON.stringify(this.note))
    this.textControl = new FormControl("")
  }
}
