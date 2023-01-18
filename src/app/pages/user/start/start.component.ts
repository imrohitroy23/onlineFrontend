import { LocationStrategy } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { QuestionService } from 'src/app/services/question.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  qid: any
  marksGot = 0
  correctAnswers = 0
  attempted = 0
  questions: any
  constructor(
    private _route: ActivatedRoute,
    private _question: QuestionService,
    private locationst: LocationStrategy,
  ) {}
  ngOnInit(): void {
    this.preventBackButton()
    this.qid = this._route.snapshot.params['qid']
    console.log(this.qid)
    this.loadQuestion()
  }
  loadQuestion() {
    this._question.getQuestionsOfQuizForTest(this.qid).subscribe(
      (data: any) => {
        this.questions = data
        this.questions.forEach((q:any)=>{
          q["givenAnswer"]=""
        })
        console.log(this.questions)
      },
      (error) => {
        Swal.fire('error', 'error in start.component.ts', 'error')
      },
    )
  }

  preventBackButton() {
    history.pushState(null, location.href)
    this.locationst.onPopState(() => {
      history.pushState(null, location.href)
    })
  }
}
