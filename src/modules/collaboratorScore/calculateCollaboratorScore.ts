type CollaboratorScoreInput = {
  osCount: number;
  reworkCount: number;
  totalTimeMinutes: number;
};

export const calculateCollaboratorScore = ({ osCount, reworkCount, totalTimeMinutes }: CollaboratorScoreInput): number => {
  if (osCount <= 0) return 0;

  const volumeScore = Math.min(400, (osCount / 50) * 400);

  const averageTime = totalTimeMinutes / osCount;
  const efficiencyScore = Math.max(0, (1 - averageTime / 120) * 350);

  const qualityScore = Math.max(0, (1 - reworkCount / 15) * 250);

  const rawScore = volumeScore + efficiencyScore + qualityScore;
  const finalScore = Math.min(1000, Math.round(rawScore));

  return finalScore;
};