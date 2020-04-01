class A {
	public property1: any;
	public _property2: any;

  constructor(delegate) {
    this.property1 = 1;
    this._property2 = 2;
  }

  get getter() {
    return null;
  }

  async method(foo, bar) {
  }
}
