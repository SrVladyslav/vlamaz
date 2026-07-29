// Best-effort in-memory rate limiter. State is per-process, so it does not
// persist across serverless cold starts or get shared between instances —
// it's a spam deterrent, not a hard guarantee.
const attempts = new Map<string, { count: number; resetAt: number }>()

export function checkRateLimit(key: string, limit: number, windowMs: number): boolean {
    const now = Date.now()
    const entry = attempts.get(key)

    if (!entry || now > entry.resetAt) {
        attempts.set(key, { count: 1, resetAt: now + windowMs })
        return true
    }

    if (entry.count >= limit) {
        return false
    }

    entry.count += 1
    return true
}
