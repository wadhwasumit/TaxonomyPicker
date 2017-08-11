import * as ko from 'knockout';
import {
  IWebPartContext
} from '@microsoft/sp-webpart-base';

import { TaxonomyControlView } from './TaxonomyControlView';
import { TaxonomyControlViewModel } from './TaxonomyControlViewModel';
import { TaxonomyControlView1 } from './TaxonomyControlView1';
import { TaxonomyControlViewModel1 } from './TaxonomyControlViewModel1';
/**
 * Class that represents a control to render Taxonomy hierarchy
 */
export class TaxonomyControl {
  /**
   * View
   */
  private view: TaxonomyControlView;
  /**
   * ViewModel
   */
  private viewModel: TaxonomyControlViewModel;
  private view1: TaxonomyControlView1;
  /**
   * ViewModel
   */
  private viewModel1: TaxonomyControlViewModel1;

  /**
   * ctor
   * @param context: web part context
   */
  constructor(context: IWebPartContext) {
    this.view = new TaxonomyControlView();
    this.viewModel = new TaxonomyControlViewModel(context);
     this.view1 = new TaxonomyControlView1();
    this.viewModel1 = new TaxonomyControlViewModel1(context);
  }

  /**
   * Renders the control
   */
  public render(element: HTMLElement): Promise<void> {
    return new Promise<void>((resolve) => {
      // renders html first
      this.view.render(element).then(() => {
        // inits view model
        this.viewModel.init().then(() => {
          // applies bindings
          ko.applyBindings(this.viewModel, element);
          resolve();
        });
      });
    });
  }

  public render1(element: HTMLElement): Promise<void> {
    return new Promise<void>((resolve) => {
      // renders html first
      this.view1.render(element).then(() => {
        // inits view model
        this.viewModel1.init().then(() => {
          // applies bindings
          ko.applyBindings(this.viewModel1, element);
          resolve();
        });
      });
    });
  }
}