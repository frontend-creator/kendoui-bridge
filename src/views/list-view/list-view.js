import {products} from './products';

export class ListView {

  dataSource = new kendo.data.DataSource({
    data: products,
    pageSize: 21
  });

  attached() {
    kendo.jQuery(this.pager).kendoPager({
      dataSource: this.dataSource
    });
  }    
}