import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { QuestionService } from 'src/app/services/question.service'

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css'],
})
export class ViewQuestionsComponent implements OnInit {
  qid: any
  qtitle: any
  questions=[{
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''

  }]
  constructor(private _route: ActivatedRoute, private _question:QuestionService) {}
  ngOnInit(): void {
    this.qid = this._route.snapshot.params['qid'];
    this.qtitle = this._route.snapshot.params['title'];
    this._question.getQuestionsOfQuiz(this.qid).subscribe(
      (data: any) => {
        console.log(data);
        this.questions = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
