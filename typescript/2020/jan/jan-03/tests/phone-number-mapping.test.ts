import { expect } from 'chai';
import { phoneMapping } from '../src/phone-number-mapping';

describe('Phone Number Mapping', function() {
  it('23', function() {
    const result = phoneMapping("23")
    const expectedResult = [
        "ad",
        "ae",
        "af",
        "bd",
        "be",
        "bf",
        "cd",
        "ce",
        "cf"
      ];
    expect(result).deep.equal(expectedResult);
  });

  it('2345', function() {
    const result = phoneMapping("2345")
    const expectedResult = [
        "adgj",
        "adgk",
        "adgl",
        "adhj",
        "adhk",
        "adhl",
        "adij",
        "adik",
        "adil",
        "aegj",
        "aegk",
        "aegl",
        "aehj",
        "aehk",
        "aehl",
        "aeij",
        "aeik",
        "aeil",
        "afgj",
        "afgk",
        "afgl",
        "afhj",
        "afhk",
        "afhl",
        "afij",
        "afik",
        "afil",
        "bdgj",
        "bdgk",
        "bdgl",
        "bdhj",
        "bdhk",
        "bdhl",
        "bdij",
        "bdik",
        "bdil",
        "begj",
        "begk",
        "begl",
        "behj",
        "behk",
        "behl",
        "beij",
        "beik",
        "beil",
        "bfgj",
        "bfgk",
        "bfgl",
        "bfhj",
        "bfhk",
        "bfhl",
        "bfij",
        "bfik",
        "bfil",
        "cdgj",
        "cdgk",
        "cdgl",
        "cdhj",
        "cdhk",
        "cdhl",
        "cdij",
        "cdik",
        "cdil",
        "cegj",
        "cegk",
        "cegl",
        "cehj",
        "cehk",
        "cehl",
        "ceij",
        "ceik",
        "ceil",
        "cfgj",
        "cfgk",
        "cfgl",
        "cfhj",
        "cfhk",
        "cfhl",
        "cfij",
        "cfik",
        "cfil"
      ];
    expect(result).deep.equal(expectedResult);
  });

});