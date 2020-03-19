import { createTest, destroyVM } from '../util';
import UnitSelector from 'packages/unitSelector';

describe('UnitSelector', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(UnitSelector, true);
    expect(vm.$el).to.exist;
  });
});

