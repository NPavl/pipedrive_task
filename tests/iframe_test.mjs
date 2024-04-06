import { expect } from 'chai';
import sinon from 'sinon';
import { handleSubmit } from '../iframe.mjs';
import { JSDOM } from 'jsdom';

describe('handleSubmit function', () => {
    let sandbox;
    let window;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
        window = dom.window;
        global.document = window.document;
    });

    afterEach(() => {
        sandbox.restore();
        global.document = undefined;
    });

    it('should handle form submission successfully', async () => {
        const fakeEvent = {
            preventDefault: sandbox.stub()
        };

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

        // Simulate form values
        const formValues = {
            title: 'Deal of the century',
            value: 10000,
            currency: 'USD',
            userID: null,
            personID: null,
            orgID: 1,
            stageID: 1,
            status: 'open',
            expectedCloseDate: '2024-04-11',
            probability: 60,
            lostReason: null,
            visibleTo: 1,
            addTime: '2024-02-06'
        };

        // Simulate form element with values
        const fakeForm = {
            getElementById: sandbox.stub().callsFake(id => {
                return { value: formValues[id] };
            })
        };

        // Call handleSubmit with fake event and API
        await handleSubmit.call(fakeForm, fakeEvent, fakeApi);

        // Expect preventDefault to be called
        expect(fakeEvent.preventDefault.calledOnce).to.be.true;

        // Expect addDeal to be called with correct data
        expect(fakeApi.addDeal.calledOnce).to.be.true;
        expect(fakeApi.addDeal.calledWithMatch(formValues)).to.be.true;
    });

    // Other tests ...
});
