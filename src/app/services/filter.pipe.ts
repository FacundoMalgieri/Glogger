import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'FilterPipe'
})
export class FilterPipe implements PipeTransform {
    transform(value: any[], filterBy: string): any[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        if (filterBy) {
            return value.filter((e)=> {
                return e === +filterBy;
            });
        }
        else {
            return value;
        }
    }
}