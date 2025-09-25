/**
 * 防抖，多次执行只执行最后一次
 * @param fn 
 * @param delay 
 * @returns 
 */
function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, args)
        }, delay)

    }
}

function throttle(fn, delay) {
    let timeout;
    return function (...args) {
        if (!timeout) {
            timeout = setTimeout(() => {
                fn.apply(this, args)
                timeout = null;
            }, delay)
        }
    }
}