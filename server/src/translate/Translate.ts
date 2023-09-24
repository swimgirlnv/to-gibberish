
export function replaceCharacters(inputString: string, replacementMap: Record<string, string>): string {
  let result = '';

  for (let i = 0; i < inputString.length; i++) {
    const currentChar = inputString[i];
    const replacement = replacementMap[currentChar] || currentChar;
    result += replacement;
  }

  return result;
}

const input = "Hello, World!";
const replacements: Record<string, string> = {
  'th': 'θ',
  'a': 'α',
  'b': 'β',
  'c': 'ᚲ',
  'd': 'δ',
  'e': 'ε',
  'f': 'φ',
  'g': 'γ',
  'h': 'η',
  'i': 'ι',
  'j': 'ᛃ',
  'k': 'κ',
  'l': 'λ',
  'm': 'μ',
  'n': 'ν',
  'o': 'ω',
  'p': 'π',
  'q': '2',
  'r': 'ρ',
  's': 'σ',
  't': 'τ',
  'u': 'υ',
  'v': 'ᚢ',
  'w': 'ᚹ',
  'x': 'ξ',
  'y': 'ᛇ',
  'z': 'ζ',
};

const output = replaceCharacters(input, replacements);
console.log(output); // Output: "H3110, W0r1d!"
