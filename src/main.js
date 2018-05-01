import 'jquery';
import 'kendo.all.min';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .feature('src/resources')
    .plugin('aurelia-kendoui-bridge');

  aurelia.start().then(a => a.setRoot());
}