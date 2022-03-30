import {countnumber,getMedian} from '../src/myfunction';
import { expect } from 'chai';

describe('Primary Number finder', () => {
    it('should be worked', () => {
      const result = countnumber(10);
      expect(result).to.equal('Hello World!');
    });
  });