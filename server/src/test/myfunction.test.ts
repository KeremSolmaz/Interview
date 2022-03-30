import {countnumber,getMedian} from '../myfunction';
import { expect } from 'chai';


describe('Primary Number Finder', () => {
    it('Prime Number Funtion Test', () => {
      const result = countnumber(10);
      console.log(result);
      const arr1 = [ 2, 3, 5, 7 ];
   
      expect(result).to.eql(arr1);
    });
  });