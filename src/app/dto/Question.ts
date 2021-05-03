export class QuestionRequest {
  constructor(
    public questionId: string,
    public tempo: any = 444444422,
    public question: string,
    public punteggio: number,
    public tipoQuizId: string
  ) {}
}
