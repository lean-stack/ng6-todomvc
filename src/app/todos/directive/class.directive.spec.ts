import { ClassDirective } from './class.directive';

describe('ClassDirective', () => {
  it('should create an instance', () => {
    const directive = new ClassDirective(null);
    expect(directive).toBeTruthy();
  });
});
