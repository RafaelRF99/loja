import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  options: FormGroup = this.form.group({
    top: 64,
    fixed: true,
  });

  constructor(private form: FormBuilder) {}

  ngOnInit(): void {}
}
