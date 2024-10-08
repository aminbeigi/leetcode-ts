type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
    let timer: ReturnType<typeof setTimeout>;
    
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), t)
    }
};