import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  download() {
    // https://drive.google.com/file/d/1icP9SG420TyvP6jEumVIEelPzhpq2eb1/view?usp=sharing

    const url =
      'https://drive.google.com/file/d/1icP9SG420TyvP6jEumVIEelPzhpq2eb1/view';

    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    this.http.get(url, { headers, responseType: 'blob' }).subscribe({
      next: (response) => {
        const blob = new Blob([response], {
          type: 'applicationapplication/pdf',
        });

        console.log('> Response', response);
      },
    });

    // firstValueFrom(request).then((response) => {
    //   const blob = new Blob([response], { type: 'applicationapplication/pdf' });
    //   const url = window.URL.createObjectURL(blob);
    //   const link = document.createElement('a');
    //   link.setAttribute('href', url);
    //   link.setAttribute('download', 'Resume Europass Luiz Felipe Marinho.pdf');
    //   link.style.display = 'none';
    //   document.body.appendChild(link);
    //   link.click();
    //   document.body.removeChild(link);
    // });
  }
}
