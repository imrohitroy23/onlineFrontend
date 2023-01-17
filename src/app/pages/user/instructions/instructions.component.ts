import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { QuizService } from 'src/app/services/quiz.service'
//if any error occurrs delete the instructionwala
@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css'],
})
export class InstructionsComponent  {
 qid:any
  quiz:any
  constructor(private  _route:ActivatedRoute,private _quiz:QuizService) {}

  ngOnInit(): void {
        this.qid=this._route.snapshot.params["qid"]
    this._quiz.getQuiz(this.qid).subscribe((data:any)=>{
      console.log(data)
      this.quiz=data
      console.log("Working fine")
    },
    (error:any)=>{
      alert("error in loading check instruction.ts")
    })
  }
//error in this ts file and html file

  startQuiz(){
    alert("going to start")
  }
}
