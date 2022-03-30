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

  describe('Median Finder For Even Count', () => {
    it('Median Even Test', () => {
      const arr1 = [ 2, 3, 5, 7 ];
      const result = getMedian(arr1);
      const arr2 = [ 3, 5 ];
      expect(result).to.eql(arr2);
    });
  });

  describe('Median Finder For odd Count', () => {
    it('Median odd Test', () => {
      const arr1 = [ 2, 3, 5 ];
      const result = getMedian(arr1);
      console.log(result);
      const arr2 = [3];
      expect(result).to.eql(arr2);
    });
  });