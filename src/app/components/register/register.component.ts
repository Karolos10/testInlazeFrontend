import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  nickname: string = '';
  name: string = '';
  email: string = ';'
  password: string = '';

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  register() {

    if(this.name =='' || this.nickname =='' || this.email =='' || this.password ==''){
      alert('Todos los campos son obligatrios');
      return;
    }

    const user: User = {
      name: this.name,
      nickname: this.nickname,
      email: this.email,
      password: this.password
    }

    this.userService.sinIn(user).subscribe(data => {
      alert('Usuario Registrado correctamente');
      this.router.navigate(['/login']);
    })
  }

}
