import {
  ITermStore,
  ITermSet,
  ITermGroup,
  ITerm
} from '../common/SPEntities';

/**
 * Data Helpers interface
 */
export interface IDataHelper {
  /**
   * API to get Term Stores
   */
  getTermStores(): Promise<ITermStore[]>;
  /**
   * API to get Term Groups by Term Store
   */
  getTermGroups(termStoreId: string): Promise<ITermGroup[]>;
  /**
   * API to get Term Sets by Term Group
   */
  getTermSets(termGroup: ITermGroup): Promise<ITermSet[]>;
  /**
   * API to get Terms by Term Set
   */
  getTerms(termSet: ITermSet): Promise<ITerm[]>;
  /**
   * API to get Terms by Term
   */
  getChildTerms(term: ITerm): Promise<ITerm[]>;

   addTermSet(termStoreId : string, groupId : string);

   addGroup(termStoreId:string);

   addTerm(termStoreId:string, termSetId:string) ;
    addSubTerm(termStoreId :string, termSetId:string, parentTermId:string);
     removeGroup(termStoreId:string, groupId:string);
     removeTermSet(termStoreId :string, groupId :string, termSetId:string);
     removeTerm(termStoreId:string, termSetId:string, termId:string);
}