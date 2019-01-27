import { ToggleModule } from './toggle.module';

describe('ToggleModule', () => {
  let toggleModule: ToggleModule;

  beforeEach(() => {
    toggleModule = new ToggleModule();
  });

  it('should create an instance', () => {
    expect(toggleModule).toBeTruthy();
  });
});
