import {
  ITermStore,
  ITermSet,
  ITermGroup,
  ITerm
} from '../common/SPEntities';
import {
  IDataHelper
} from './DataHelperBase';
import { Guid } from 'guid';
/**
 * Interface for Term store with groups
 */
interface ITermStoreWithGroups extends ITermStore {
  /**
   * nested groups
   */
  groups?: ITermGroupWithTermSets[];
}

/**
 * Interface for term group with term sets
 */
interface ITermGroupWithTermSets extends ITermGroup {
  /**
   * nested term sets
   */
  termSets?: ITermSetWithTerms[];
}

/**
 * Interface for term set with terms
 */
interface ITermSetWithTerms extends ITermSet {
  /**
   * nested terms
   */
  terms?: ITermWithTerms[];
}

/**
 * Interface for term with nested terms
 */
interface ITermWithTerms extends ITerm {
  /**
   * nested terms
   */
  terms?: ITermWithTerms[];
}

/**
 * MOCK data helper. Gets data from hardcoded values
 */
export class DataHelperMock implements IDataHelper {
  private static _termStores: ITermStoreWithGroups[] = [{
    name: 'Term Store 1',
    id: 'E920D42D-1540-4E39-B3F6-3795FBEF7F21',
    groups: [{
      id: '6789F532-CCDE-44C4-AE45-2EC5FC509274',
      termStoreId: 'E920D42D-1540-4E39-B3F6-3795FBEF7F21',
      name: 'Group 1 from Term Store 1',
      description: 'This is the first group of the first term store',
      termSets: [{
        name: 'TSet 1 Gr 1 TStore 1',
        id: 'B12D3D77-7DEA-435E-B1AF-3175DC9851DF',
        termGroupId: '6789F532-CCDE-44C4-AE45-2EC5FC509274',
        termStoreId: 'E920D42D-1540-4E39-B3F6-3795FBEF7F21',
        description: 'Term Set 1 from Group 1 from Term Store 1',
        terms: [{
          id: '1494A0ED-0866-4082-92A8-1C83D5B117C4',
          termSetId: 'B12D3D77-7DEA-435E-B1AF-3175DC9851DF',
          name: 'T 1 TSet 1 Gr 1 TStore 1',
          description: 'Term 1 from Term Set 1 from Group 1 from Term Store 1',
          labels: [{
            isDefaultForLanguage: true,
            value: 'Term Label',
            language: 'en-US'
          }],
          terms: [{
            id: '1494A0ED-0866-4082-92A8-1C83D5B117C4',
            termSetId: 'B12D3D77-7DEA-435E-B1AF-3175DC9851DF',
            name: 'T 1.1 TSet 1 Gr 1 TStore 1',
            description: 'Term 1 from Term Set 1 from Group 1 from Term Store 1',
            labels: [{
              isDefaultForLanguage: true,
              value: 'Term Label',
              language: 'en-US'
            }],
            termsCount: 0,
            isRoot: false
          }],
          termsCount: 1,
          isRoot: true
        }]
      }, {
        id: '6783B7F9-41CA-4405-A85C-5C74B98AC81C',
        termGroupId: '6789F532-CCDE-44C4-AE45-2EC5FC509274',
        termStoreId: 'E920D42D-1540-4E39-B3F6-3795FBEF7F21',
        name: 'TSet 2 Gr 1 TStore 1',
        description: 'Term Set 2 from Group 1 from Term Store 1',
        terms: []
      }]
    }, {
      id: '9FC4934A-EFA2-4460-A5DB-1611B8B478FE',
      termStoreId: 'E920D42D-1540-4E39-B3F6-3795FBEF7F21',
      name: 'Group 2 from Term Store 1',
      description: 'This is the second group of the first term store',
      termSets: [{
        id: '6AC24DB3-CF84-47D0-83E6-C118DD7C1D44',
        termGroupId: '9FC4934A-EFA2-4460-A5DB-1611B8B478FE',
        termStoreId: 'E920D42D-1540-4E39-B3F6-3795FBEF7F21',
        name: 'TSet 1 Gr 2 TStore 1',
        description: 'Term Set 1 from Group 2 from Term Store 1',
        terms: []
      }]
    }]
  }, {
    name: 'Term Store 2',
    id: 'BBB5D5CF-F39E-45D4-A71A-F74681133D03',
    groups: [{
      id: '96BD2791-BD83-4E1F-930C-0F2EBE943DFA',
      termStoreId: 'BBB5D5CF-F39E-45D4-A71A-F74681133D03',
      name: 'Group 1 from Term Store 2',
      description: 'This is the first group of the second term store',
      termSets: [{
        id: 'DDF892AB-00D2-4F13-B70C-378BE3A95A1D',
        termGroupId: '96BD2791-BD83-4E1F-930C-0F2EBE943DFA',
        termStoreId: 'BBB5D5CF-F39E-45D4-A71A-F74681133D03',
        name: 'TSet 1 Gr 1 TStore 2',
        description: 'Term Set 1 from Group 1 from Term Store 2',
        terms: []
      }]
    }]
  }];

  /**
   * API to get Term Stores
   */
  public getTermStores(): Promise<ITermStore[]> {
    return new Promise<ITermStore[]>((resolve) => {
      resolve(DataHelperMock._termStores);
    });
  }
  /**
   * API to get Term Groups by Term Store
   */
  public getTermGroups(termStoreId: string): Promise<ITermGroup[]> {
    return new Promise<ITermGroup[]>((resolve) => {
      for (let i = 0, len = DataHelperMock._termStores.length; i < len; i++) {
        const termStore = DataHelperMock._termStores[i];
        if (termStore.id === termStoreId) {
          resolve(termStore.groups);
           console.log(termStore.groups);
          return;
        }
      }
    });
  }
  /**
   * API to get Term Sets by Term Group
   */
  public getTermSets(termGroup: ITermGroup): Promise<ITermSet[]> {
    return new Promise<ITermSet[]>((resolve) => {
      const termGroupWithTermSets: ITermGroupWithTermSets = termGroup as ITermGroupWithTermSets;
      console.log(termGroupWithTermSets.termSets);
      resolve(termGroupWithTermSets.termSets);
    });
  }
  /**
   * API to get Terms by Term Set
   */
  public getTerms(termSet: ITermSet): Promise<ITerm[]> {
    return new Promise<ITerm[]>((resolve) => {
      const termSetWithTerms: ITermSetWithTerms = termSet as ITermSetWithTerms;
       
      resolve(termSetWithTerms.terms);
    });
  }
  /**
   * API to get Terms by Term
   */
  public getChildTerms(term: ITerm): Promise<ITerm[]> {
    return new Promise<ITerm[]>((resolve) => {
      const termWithTerms: ITermWithTerms = term as ITermWithTerms;
      resolve(termWithTerms.terms);
    });
  }

  public addTermSet(termStoreId : string, groupId : string) {
 
var termSetName = "test";
 
//var newGuid = Guid.create();
for (let i = 0, len = DataHelperMock._termStores.length; i < len; i++) {
        const termStore = DataHelperMock._termStores[i];
        if (termStore.id === termStoreId) {
         // resolve(termStore.groups);
         
         DataHelperMock._termStores[i].groups[0].termSets.push({
        id: this.guid(),
        termGroupId: '96BD2791-BD83-4E1F-930C-0F2EBE943DFA',
        termStoreId: 'BBB5D5CF-F39E-45D4-A71A-F74681133D03',
        name: 'TSet 1 Gr 1 TStore New Term By Sumit',
        description: 'Term Set 1 from Group 1 from New Term By Sumit',
        terms: []
    });
    console.log(DataHelperMock._termStores);
   this.getTermSets(DataHelperMock._termStores[i].groups[0]);
          return;
        }
      }
  }
addGroup(termStoreId:string){}

   addTerm(termStoreId:string, termSetId:string) {}
    addSubTerm(termStoreId :string, termSetId:string, parentTermId:string){}
     removeGroup(termStoreId:string, groupId:string){}
     removeTermSet(termStoreId :string, groupId :string, termSetId:string){}
   removeTerm(termStoreId:string, termSetId:string, termId:string) {}
   private S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
}
private guid()
{
  var newGuid = (this.S4() + this.S4() + "-" + this.S4() + "-4" + this.S4().substr(0,3) + "-" +this. S4() + "-" + this.S4() +this. S4() + this.S4()).toLowerCase();
 return newGuid.toString();
} 
}