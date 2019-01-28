import { DragInDropModule } from './drag-in-drop.module';

describe('DragInDropModule', () => {
  let dragInDropModule: DragInDropModule;

  beforeEach(() => {
    dragInDropModule = new DragInDropModule();
  });

  it('should create an instance', () => {
    expect(dragInDropModule).toBeTruthy();
  });
});
