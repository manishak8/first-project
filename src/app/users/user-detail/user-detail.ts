import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.html',
  styleUrls: ['./user-detail.css']
})
export class UserDetailComponent implements OnInit {

  user: User | null = null;

  constructor(
    private route: ActivatedRoute,
    private service: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : 0;

    this.service.getUsers().subscribe(users => {
      console.log('API Response:', users); // check console
      this.user = users.find(u => u.id === id) || null;
      console.log('Selected User:', this.user); // should log the matched user
    });
  }

  back() {
    this.router.navigate(['/users']);
  }
}