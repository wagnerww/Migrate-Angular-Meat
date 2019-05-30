import {
  Component,
  OnInit,
  Input,
  ContentChild,
  AfterContentInit
} from "@angular/core";
import { NgModel, FormControlName } from "@angular/forms";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "mt-input-container",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit, AfterContentInit {
  @Input() label: string;
  @Input() errorMessage: string;

  input: any;

  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.input = this.model || this.control;
    if (this.input === undefined) {
      throw new Error(
        "Esse componenete precisa ser usado com uma diretiva ngModel ou FormControlName"
      );
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }
}
