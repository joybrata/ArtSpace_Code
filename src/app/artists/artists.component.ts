import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  public key = '';
  public ser = 'A';

  selectedKey: boolean;

  constructor() { }

  ngOnInit() {
  }

  selectKey(key){
    this.ser = key;
    console.log(this.ser);
  }

}

@Pipe({name: 'alphabets'})
export class Alphabets implements PipeTransform {
  transform(value, args:string[]): any {
    let res = [];
    for (let i = 0; i < value; i++) {
      res.push(String.fromCharCode(i + 65));
    }
    return res;
  }
}
