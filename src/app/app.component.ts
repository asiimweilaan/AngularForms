import { EnrollmentService } from './enrollment.service';
import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular','React','Vue'];
  topicHasError = true;

  userModel = new User('Rob', 'rob@test.com', 5556665566, 'default', 'morning', true);

  constructor(private _enrollmentService:EnrollmentService){}

  validateTopic(value:any){
    if(value==='default'){
      this.topicHasError = true;
    }
    else{
      this.topicHasError = false;
    }
  }
  onSubmit(){
    console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        
        {next: data => console.log('Success!',data),
        error: error => console.error('Error!',error)}
      )
  }

}
