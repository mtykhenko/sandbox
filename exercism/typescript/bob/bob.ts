const QUESTION_MARK: string = "?";
const ANY_UPPERCASE_LETTER = /[A-Z]/g;

function isQuestion(msg: string): boolean {
  return msg.trim().endsWith(QUESTION_MARK);
}

function isYelling(msg: string): boolean {
  return msg.toUpperCase() === msg && ANY_UPPERCASE_LETTER.test(msg);
}

function isNothingSpecific(msg: string): boolean {
  return msg.trim().length === 0;
}

export function hey(message: string): string {

  if (isNothingSpecific(message)) {
    return 'Fine. Be that way!';
  }

  if (isYelling(message)) {
    return isQuestion(message) ? 'Calm down, I know what I\'m doing!' : 'Whoa, chill out!'; 
  }

  return isQuestion(message) ? 'Sure.' : 'Whatever.';
}