import { Component, OnInit } from '@angular/core';
import { Cat } from '../common/models/cat';
import { CatService } from '../common/services/cat.service';
import { MessageService } from '../common/services/message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})

export class CatsComponent implements OnInit {

  selectedCat: Cat | undefined = undefined;

  cats$: Observable<Cat[]>;

  //cats: Cat[];

  onSelect(cat: Cat): void {
    this.selectedCat = cat;
    this.messageService.add(`Selected ${cat.name}`);
  }

  onUnselect(cat: Cat): void {
    this.selectedCat = undefined;
    this.messageService.add(`Unselected ${cat.name}`);
  }

  getCats(): void {
    this.cats$ = this.catService.getCats$;
    this.messageService.add('Fetched cats');

    //this.catService.getCats().subscribe(cats => this.cats = cats);
  }

  constructor(private catService: CatService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getCats();
  }
}
