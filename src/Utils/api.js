// utils/api.js
const seededRandom = (seed) => {
    let x = Math.sin(seed) * 10000;
    return () => x - Math.floor(x);
};

export const fetchAPI = (date) => {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00');
        }
        if (random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};