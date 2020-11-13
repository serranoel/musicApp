import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'noImage'
})
export class NoImagePipe implements PipeTransform {
    transform(url: string, origin: string): string {
        if(origin == 'artist') {
            if(!url) {
                return '../assets/images/artistDefault.jpg';
            } else {
                return url;
            }
        } else if(origin == 'album') {
            if(!url) {
                return '../assets/images/default.jpg';
            } else {
                return url;
            }
        }
        
    }
}