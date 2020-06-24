import {AppRoutingModule} from './app-routing.module';

describe('AppRoutingModule', () => {
  let appRoutingModule: AppRoutingModule;

  beforeEach(() => {
    appRoutingModule = new AppRoutingModule();
  });

  it('should be create an instance', () => {
    expect(appRoutingModule).toBeTruthy();
  });
});
