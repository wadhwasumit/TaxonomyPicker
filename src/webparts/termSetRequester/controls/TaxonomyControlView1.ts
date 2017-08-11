import styles from '../TermSetRequester.module.scss';

export class TaxonomyControlView1 {
  private _template: string = `
  <div class="${styles.taxonomy}">
  <input id="txtsearch"/>
    </div>
  `;

  /**
   * Renders markup
   */
  public render(element: HTMLElement): Promise<void> {
    return new Promise<void>((resolve) => {
      element.innerHTML = this._template;
      resolve();
    });
  }
}