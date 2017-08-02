import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(joke: any, term: any): any {
    if(term ===undefined) return joke;
    return joke.filter((jok)=>{
      return jok.setup.toLowerCase().includes(term.toLowerCase());
    })
  }

}
