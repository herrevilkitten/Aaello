import { CheckboxToggleModule } from './checkbox-toggle.module';

describe('CheckboxToggleModule', () => {
  let checkboxToggleModule: CheckboxToggleModule;

  beforeEach(() => {
    checkboxToggleModule = new CheckboxToggleModule();
  });

  it('should create an instance', () => {
    expect(checkboxToggleModule).toBeTruthy();
  });
});
