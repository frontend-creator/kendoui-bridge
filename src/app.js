export class App {
  configureRouter(config, router) {
    config.title = 'KendoUI';
    config.map([
      { route: ['', 'legacy'], name: 'legacy',      moduleId: './views/legacy/legacy',      nav: true, title: 'Legacy' },
      { route: 'combo-box',         name: 'combo-box',        moduleId: './views/combo-box/combo-box',        nav: true, title: 'ComboBox' },
      { route: 'date-picker',         name: 'date-picker',        moduleId: './views/date-picker/date-picker',        nav: true, title: 'DatePicker' },
      { route: 'drop-down-list',         name: 'drop-down-list',        moduleId: './views/drop-down-list/drop-down-list',        nav: true, title: 'DropDownList' },
      { route: 'grid',         name: 'grid',        moduleId: './views/grid/grid',        nav: true, title: 'Grid' },
      { route: 'multiselect',         name: 'multiselect',        moduleId: './views/multiselect/multiselect',        nav: true, title: 'Multiselect' },
      { route: 'editor',         name: 'editor',        moduleId: './views/editor/editor',        nav: true, title: 'Editor' },
      { route: 'list-view',         name: 'list-view',        moduleId: './views/list-view/list-view',        nav: true, title: 'ListView' },
    ]);

    this.router = router;
  }
}
