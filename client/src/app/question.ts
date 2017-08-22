interface Answer_Model {
  answer: string;
  adetail: string;
  username: string;
  likes: number;
}

export class Question {
    question: string = '';
    qdetail: string = '';
    answers: Array<Answer_Model>;
    _id: string;
}
