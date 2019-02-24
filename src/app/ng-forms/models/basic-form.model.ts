class Hobby {
  label: string;
  checked: boolean;
}

export class BasicForm {
  public name: string;
  public email: string;
  public phoneNumber: number;
  public gender: string;
  public hobbies: Array<string>;
  public starSign: string;
  public aboutYou: string;

  constructor(options?: any) {
    this.name = options && options.name;
    this.email = options && options.email;
    this.phoneNumber = options && options.phoneNumber;
    this.gender = options && options.gender;
    this.hobbies = options && options.hobbies || [];
    this.starSign = options && options.starSign;
    this.aboutYou = options && options.aboutYou;
  }
}
