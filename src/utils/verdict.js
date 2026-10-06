export const FLICK_THRESHOLD = 7;

const FLOP_EMOJI = ['🍅', '🤮'];

export function getVerdict(rating, seed = 0) {
  // Feature Addition
  if (rating >= FLICK_THRESHOLD) {
    return { type: 'flick', label: 'Flick', emoji: FLOP_EMOJI[0] };
  } else if (rating < FLICK_THRESHOLD) {
    return { type: 'flop', label: 'Flop', emoji: FLOP_EMOJI[1] };
  } else {
    return { type: 'unrated', label: 'Unrated', emoji: '🤷' };
  }
}
