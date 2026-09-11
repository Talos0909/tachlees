export class PriceEngine {
  calculateConfidence(
    source: 'CERTIFIED_VENDOR' | 'USER_REPORTED' | 'AUTOMATED_SCRAPE',
    ageInDays: number
  ): number {
    let confidence = 0.5;

    if (source === 'CERTIFIED_VENDOR') confidence += 0.3;
    if (source === 'USER_REPORTED') confidence += 0.1;
    if (source === 'AUTOMATED_SCRAPE') confidence += 0.05;

    if (ageInDays < 7) confidence += 0;
    else if (ageInDays < 30) confidence -= 0.05;
    else if (ageInDays < 90) confidence -= 0.15;
    else confidence -= 0.25;

    return Math.max(0, Math.min(1, confidence));
  }

  rankPrices(prices: any[]): any[] {
    return prices.sort((a, b) => {
      const scoreA = a.price * (1 - a.confidence * 0.15);
      const scoreB = b.price * (1 - b.confidence * 0.15);
      return scoreA - scoreB;
    });
  }

  calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
}
