import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-zips',
  templateUrl: './zips.component.html',
  styleUrls: ['./zips.component.css']
})
export class ZipsComponent implements OnInit {
Zipcode={
  "id":"",
  "zipcode":""
}
  constructor(private ticket:TicketService) { }

  ngOnInit(): void {
  }

savesubmit(){
this.ticket.saveZip(this.Zipcode).subscribe((data:any)=>{
  Swal.fire('Success','zipcode added','success')
},(error:any)=>{
  Swal.fire('error!!','Something went wrong','error')
})
}
}
