export class Post{
  // id: number;
  // title: string;
  // author: User['id'];
  // image: string;
  // publishdate: Date;
  // excert: string;


  constructor(public id: number,
              public title: string,
              public author: string,
              public image: string,
              public publishdate: Date,
              public excert: string) { }
}

