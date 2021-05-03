export class AnswerResponse {
  constructor(
    public answerId: string,
    public tempo: number,
    public answer: string,

    public questionId: string,
    public playQuizId: string
  ) {}
}
