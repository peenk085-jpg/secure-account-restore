export type RecoveryStatus = "pending" | "in_progress" | "completed" | "failed";

export const STATUS_LABELS: Record<string, string> = {
  pending: "Pending",
  in_progress: "In Progress",
  completed: "Completed",
  failed: "Unrecoverable",
};

const ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

export function generateTrackingCode(): string {
  let code = "";
  const bytes = new Uint8Array(8);
  crypto.getRandomValues(bytes);
  for (const byte of bytes) code += ALPHABET[byte % ALPHABET.length];
  return `PR-${code.slice(0, 4)}-${code.slice(4)}`;
}
