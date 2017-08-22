import { Pipe, PipeTransform } from '@angular/core';
import { Question } from "./question"

@Pipe({
  name: 'filtersearch'
})
export class FiltersearchPipe implements PipeTransform {

  transform(q_arr: Array<Question>, search: string): Array<Question> {
    // let output = []

    search = search.toLowerCase()

    // for(var i = 0; i < book_array.length; i++){
    // 	if(book_array[i].title.toLowerCase().includes(search) || book_array[i].author.toLowerCase().includes(search)){
    // 		output.push(book_array[i])
    // 	}
    // }

    return q_arr.filter(q_list => {
      // return bucket_item.title.toLowerCase().includes(search) || bucket_item.description.toLowerCase().includes(search)
      return q_list.question.toLowerCase().includes(search)
    })

    // return output
  }

  }
