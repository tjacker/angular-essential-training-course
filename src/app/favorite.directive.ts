import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[mwFavorite]',
})
export class FavoriteDirective {
  @Input() set mwFavorite(value) {
    this.isFavorite = value;
  }
  @HostBinding('class.is-favorite') isFavorite = true;
}
