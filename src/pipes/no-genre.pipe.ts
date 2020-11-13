import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'noGenre'
})
export class noGenrePipe implements PipeTransform {
    transform(genre: string): string {
        if(!genre) {
            return 'Género Desconocido';
        } else {
            return genre;
        }

        
    }
}