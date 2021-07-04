export class CounterService {

  countActive = 0;
  countInactive = 0;

  plusOne(params: { type: string }) {
    if (params.type === 'active') {
      this.countActive++;
      console.log('countActive: ', this.countActive);
    } else {
      this.countInactive++;
      console.log('countInactive: ', this.countInactive);
    }
  }
}
