import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter',
  standalone: false,
})
export class CategoryFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    const search = searchText.toLowerCase();
    return items.filter(item =>
      item.price?.toLowerCase().includes(search) ||
      item.category?.toLowerCase().includes(search)
    );
  }
}
