import { expect } from "chai";

export default class Assert {

  static notEquals(exp, act) :void {
    expect(exp).to.not.equal(act);
  }

  static equals(exp, act) :void {
    expect(exp).to.equal(act);
  }

  static true(exp) :void {
    expect(exp).to.be.true;
  }

  static toContains(exp, act) :void {
    expect(exp).to.contains(act);
  }

}
