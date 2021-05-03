export class AnswerRequest {
  constructor(
    public answerId: string,

    public answer: string,
    public corretta: boolean,
    public questionId: string
  ) {}
}
