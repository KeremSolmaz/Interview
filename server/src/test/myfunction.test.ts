import {countnumber,getMedian} from '../myfunction';
import { expect } from 'chai';

describe('Primary Number finder', () => {
    it('should be worked', () => {
      const result = countnumber(10);
      console.log(result);
      var kerem[];
      // = "[ 2, 3, 5, 7 ]"
      expect(result).to.equal('2, 3, 5, 7');
    });
  });