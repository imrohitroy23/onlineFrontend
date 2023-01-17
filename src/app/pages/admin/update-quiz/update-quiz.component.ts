import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { CategoryService } from 'src/app/services/category.service'
import { QuizService } from 'src/app/services/quiz.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css'],
})
export class UpdateQuizComponent {
  constructor(
    private _route: ActivatedRoute,
    private _cat: CategoryService,
    private _quiz: QuizService,
    private _router: Router,
  ) {}
  qid = 0
  quiz: any
  categories: any
  ngOnInit(): void {
    this.qid = this._route.snapshot.params['qid']
    // alert(this.qid)
    this._quiz.getQuiz(this.qid).subscribe(
      (data) => {
        this.quiz = data
        console.log(this.quiz)
      },
      (error) => {
        console.log(error)
      },
    )
    this._cat.categories().subscribe(
      (data: any) => {
        this.categories = data
      },
      (error) => {
        Swal.fire('Error!!', 'error in loading categories', 'error')
      },
    )
  }
  //update form to submit
  public updateData() {
    //validation laga lena
    this._quiz.updateQuiz(this.quiz).subscribe(
      (data: any) => {
        Swal.fire('Success !!', 'Quiz Updated', 'success').then((e) => {
          this._router.navigate(['/admin/quizzes'])
        })
      },
      (error) => {
        Swal.fire('Error', 'Error in updating', 'error')
      },
    )
  }
}
