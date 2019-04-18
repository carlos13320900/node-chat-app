const expect = require('expect');
const { isRealString } = require('./validation.js');

describe('isRealString', () => {
  /** @region_snippet_RejectNonString */
  it('Should reject non-string values', () => {
    var response = isRealString(98);

    expect(response).toBe(false);
  });
  /** @endregion */

  /** @region_snippet_TestRejectWhiteSpaces */
  it('Should reject strings with only spaces', () => {
    var response = isRealString('    ');

    expect(response).toBe(false);
  });
  /** @endregion */

  /** @region_snippet_TestAllowStringsWithNonSpace */
  it('Should allow strings with non-space characters', () => {
    var response = isRealString('   Carlos   ');

    expect(response).toBe(true);
  });
  /** @endregion */
});
