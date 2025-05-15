export function formatNumberUK(
  value: number,
  shortForm: boolean = false
): string {
  if (value >= 1_000_000_000_000) {
    const formatted = (value / 1_000_000_000_000).toFixed(2);
    return shortForm ? `${formatted} T` : `${formatted} trillion`;
  } else if (value >= 1_000_000_000) {
    const formatted = (value / 1_000_000_000).toFixed(2);
    return shortForm ? `${formatted} B` : `${formatted} billion`;
  } else if (value >= 1_000_000) {
    const formatted = (value / 1_000_000).toFixed(2);
    return shortForm ? `${formatted} M` : `${formatted} million`;
  } else if (value >= 1_000) {
    const formatted = (value / 1_000).toFixed(2);
    return shortForm ? `${formatted} K` : `${formatted} thousand`;
  } else {
    return value.toString();
  }
}
