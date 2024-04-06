import { expect } from 'chai';
import sinon from 'sinon';
import { getDeals } from '../scripts/get_all_deals.mjs';

describe('getDeals function', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should get all deals successfully', async () => {
        const fakeResponse = {
            data: [
                { id: 1, title: 'Deal 1' },
                { id: 2, title: 'Deal 2' },
                { id: 3, title: 'Deal 3' },
            ]
        };

        const fakeApi = {
            getDeals: sandbox.stub().resolves(fakeResponse)
        };

        const result = await getDeals(fakeApi);

        expect(fakeApi.getDeals.calledOnce).to.be.true;
        expect(result).to.deep.equal(fakeResponse.data);
    });

    // Other tests ...
});
