function debounce(func, delay) {
    var timer = null;
    if (timer) {
        clearTimeout(timer);
    }

    return function(args) {
        timer = setTimeout(() => {
            func(args);
        }, delay);
    };
}
