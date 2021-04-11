import { FeedbackService } from './../../../services/feedback.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ContactForm } from 'src/app/features/shared/constants/models/server/server.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  form: FormGroup;
  contactForm: ContactForm;
  contactReasons = ['Suggestion', 'Add Game', 'Question', 'Other Request']

  constructor(
    private feedbackService: FeedbackService,
    private router: Router
  ) {
    this.form = this.feedbackService.fieldGroup;
  }

  ngOnInit(): void {}

  onSubmit() {
    const newContactForm = {
      ...this.form.value
    }
    this.feedbackService.saveFeedback(newContactForm);
    this.router.navigate(['/submit'])
  }

}
