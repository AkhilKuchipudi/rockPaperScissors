import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-room',
  standalone: false,
  templateUrl: './room.html',
  styleUrl: './room.scss'
})
export class Room {
  activeTab: string = 'Create';

  // Inject MessageService
  messageService = inject(MessageService);

  // Form
  exampleForm!: FormGroup;
  formSubmitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.exampleForm = this.fb.group({
      value: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  selectTab(tab: string): void {
    this.activeTab = tab;
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.exampleForm.valid) {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Form is submitted',
        life: 3000
      });
      this.exampleForm.reset();
      this.formSubmitted = false;
    }
  }

  isInvalid(controlName: string): boolean {
    const control = this.exampleForm.get(controlName);
    return !!(control && control.invalid && (control.touched || this.formSubmitted));
  }

}
