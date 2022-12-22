type ThrottledFunction<T extends (...args: any) => any> = (...args: Parameters<T>) => ReturnType<T>
export function throttle<T extends (...args: any) => any>(func: T, limit: number): ThrottledFunction<T> {
    let inThrottle: boolean
    let lastResult: ReturnType<T>
    return function(self: any): ReturnType<T> {
        const args = arguments
        const context = self
        if (!inThrottle) {
            inThrottle = true
            setTimeout(() => (inThrottle = false), limit)
            lastResult = func.apply(context, args)
        }
        return lastResult
    }
}
