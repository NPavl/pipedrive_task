import { expect } from 'chai';
import sinon from 'sinon';
import { addDeal } from '../scripts/add_deal_baseSample.mjs';

describe('addDeal function', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should add a deal successfully', async () => {
        const fakeResponse = {
            data: {
                id: 12345,
                title: 'Deal of the century',
                value: 10000,
                currency: 'USD',
                user_id: null,
                person_id: null,
                org_id: 1,
                stage_id: 1,
                status: 'open',
                expected_close_date: '2024-04-11',
                probability: 60,
                lost_reason: null,
                visible_to: 1,
                add_time: '2024-02-06',
            }
        };

        const fakeApi = {
            addDeal: sandbox.stub().resolves(fakeResponse)
        };

        const result = await addDeal(fakeApi);

        expect(fakeApi.addDeal.calledOnce).to.be.true;
        expect(result).to.deep.equal(fakeResponse.data);
    });

    // Other test ...
});
