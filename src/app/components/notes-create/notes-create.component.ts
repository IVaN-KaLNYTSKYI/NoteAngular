import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Notes} from "../../model/notes";

@Component({
  selector: 'app-notes-create',
  templateUrl: './notes-create.component.html',
  styleUrls: ['./notes-create.component.css']
})
export class NotesCreateComponent implements OnInit {
  notes: Notes[]
  nameControl = new FormControl("")
  surnameControl = new FormControl("")

  myFormGroup: FormGroup = new FormGroup({
      name: this.nameControl,
      surname: this.surnameControl,
    })

  constructor() {
  }

  ngOnInit(): void {
  }

  add() {
    this.notes.push(this.myFormGroup.value)
    console.log(this.notes)
    this.nameControl = new FormControl("")
    this.surnameControl = new FormControl("")
  }
}
