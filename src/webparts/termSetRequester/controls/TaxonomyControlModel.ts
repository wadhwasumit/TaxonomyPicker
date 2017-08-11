import {
  ITermStore,
  ITermSet,
  ITermGroup,
  ITerm
} from '../common/SPEntities';

import {
  IWebPartContext
} from '@microsoft/sp-webpart-base';

import { IDataHelper } from '../data-helpers/DataHelperBase';
import { DataHelpersFactory } from '../data-helpers/DataHelpersFactory';

/**
 * Taxonomy Control Model
 */
export class TaxonomyControlModel {
  /**
   * data helper
   */
  private _dataHelper: IDataHelper;

  /**
   * ctor
   * @param context: web part context
   */
  constructor(context: IWebPartContext) {
    this._dataHelper = DataHelpersFactory.createDataHelper(context);
  }

  /**
   * API to get Term Stores
   */
  public getTermStores(): Promise<ITermStore[]> {
    return this._dataHelper.getTermStores();
  }

  /**
   * API to get Term Groups by Term Store
   */
  public getTermGroups(termStore: ITermStore): Promise<ITermGroup[]> {
    return this._dataHelper.getTermGroups(termStore.id);
  }

  /**
   * API to get Term Sets by Term Group
   */
  public getTermSets(termGroup: ITermGroup): Promise<ITermSet[]> {
    return this._dataHelper.getTermSets(termGroup);
  }

  /**
   * API to get Terms by Term Set
   */
  public getTerms(termSet: ITermSet): Promise<ITerm[]> {
    return this._dataHelper.getTerms(termSet);
  }

  /**
   * API to get Terms by Term
   */
  public getChildTerms(term: ITerm): Promise<ITerm[]> {
    return this._dataHelper.getChildTerms(term);
  }
   public addTermSet(termStoreId : string, groupId : string)  {
    return this._dataHelper.addTermSet(termStoreId,groupId);
  }

  public addGroup(termStoreId:string){
    return this._dataHelper.addGroup(termStoreId);
  }

 public  addTerm(termStoreId:string, termSetId:string) {
    return this._dataHelper.addTerm(termStoreId,termSetId);
  }
   public addSubTerm(termStoreId :string, termSetId:string, parentTermId:string){
    return this._dataHelper.addSubTerm(termStoreId,termSetId,parentTermId);
  }
  public   removeGroup(termStoreId:string, groupId:string){
    return this._dataHelper.removeGroup(termStoreId,groupId);
  }
   public  removeTermSet(termStoreId :string, groupId :string, termSetId:string){
    return this._dataHelper.removeTermSet(termStoreId,groupId,termSetId);
  }
   public  removeTerm(termStoreId:string, termSetId:string, termId:string){
    return this._dataHelper.removeTerm(termStoreId,termSetId,termId);
  }
}