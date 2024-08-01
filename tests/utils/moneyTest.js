import { formatCurrency } from '../../javascripts/utils/money.js';

describe('test suite : formatCurrency' , () => {
    it('convert cents into dollar' , () => {
        expect(formatCurrency(2096)).toEqual('20.96');
    });

    it('works with 0' , () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('round up to nearest cents' , () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
});