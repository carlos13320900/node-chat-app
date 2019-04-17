const expect = require('expect');
const { isRealString } = require('./validation.js');

describe('isRealString', () => {
  it('Should reject non-string values', () => {
    var response = isRealString(98);

    expect(response).toBe(false);
  });

  it('Should reject strings with only spaces', () => {
    var response = isRealString('    ');

    expect(response).toBe(false);
  });

  it('Should allow strings with non-space characters', () => {
    var response = isRealString('   Carlos   ');

    expect(response).toBe(true);
  });
});
