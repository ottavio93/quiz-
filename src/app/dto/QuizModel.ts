export class QuizModel {
  constructor(
    public quizId: string,
    public nome: string,
    public difficolta: string,
    public description: string,
    public userName: string
  ) {}
}
