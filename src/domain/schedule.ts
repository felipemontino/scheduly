export class Schedule {
  constructor(
    private id: number,
    public dateStart: Date,
    public dateEnd: Date,
    public title: string,
  ) {
    id = Math.random();
  }

  getId(): number {
    return this.id;
  }
}
