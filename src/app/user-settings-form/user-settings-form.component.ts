import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { userSetting } from '../model/userSettings';
import { UserSettingsService } from '../service/user-settings.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  sexType:Observable<string[]> | undefined;
  singleModel='on';
  isSaving: boolean | undefined;
  userData: userSetting={
    name: "",
    email: false,
    sex: "",
    password: "",
    notes: "",
    date: "",



  }



  constructor(
    private serviceData : UserSettingsService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void
  {
    this.sexType=this.serviceData.getSubscriptinTypes();
  }
onSubmit(form:NgForm){
  this.isSaving = true;
  this.subscribeToSaveResponse(this.serviceData.saveUserData(this.userData));
        }

protected subscribeToSaveResponse(result: Observable<HttpResponse<userSetting>>): void {
  result.pipe(finalize(() => this.onSaveFinalize())).subscribe(
    () => this.onSaveSuccess(),
    () => this.onSaveError()
  );
}

protected onSaveSuccess(): void {
  console.log("succefully saved");
  // this.previousState();
  this.openSuccess();
}

protected onSaveError(): void {
  // Api for inheritance.
  console.log("Error");
}

protected onSaveFinalize(): void {
  this.isSaving = false;
}

onBlur(field:NgModel){
  console.log('in onblur',field.valid)
}
previousState(): void {
  window.history.back();
}
openSuccess() : any{
  const modalRef = this.modalService.open(ModalComponent);
}
}
