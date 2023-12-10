import config from '.';

describe('config', () => {
  it('has packagejson plugin', () => {
    expect(config.plugins?.includes('prettier-plugin-packagejson')).toBe(true);
  });
});
