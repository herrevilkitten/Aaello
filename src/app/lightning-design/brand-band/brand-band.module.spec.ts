import { BrandBandModule } from './brand-band.module';

describe('BrandBandModule', () => {
  let brandBandModule: BrandBandModule;

  beforeEach(() => {
    brandBandModule = new BrandBandModule();
  });

  it('should create an instance', () => {
    expect(brandBandModule).toBeTruthy();
  });
});
