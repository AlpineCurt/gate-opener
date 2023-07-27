const PORT = +process.env.PORT || 3001;
const GATE_NUM = process.env.GATE_NUM || 9;
const PAUSES = process.env.PAUSES || 5;
const PRESSES = process.env.PRESSES || 3;

module.exports = {
    PORT,
    GATE_NUM,
    PAUSES,
    PRESSES
}