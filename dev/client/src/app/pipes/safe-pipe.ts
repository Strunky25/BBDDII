import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url: string) {
    let uri: string = 'https://' + url;
    uri = uri.replace('watch?v=', 'embed/');
    return this.sanitizer.bypassSecurityTrustResourceUrl(uri);
  }
}
