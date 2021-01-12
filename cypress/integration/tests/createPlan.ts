import {testData} from "./config";
import {Plan} from "../models/plan";

describe('Creating plan', () => {
    it('Creating plan', () => {
        const plan = new Plan(testData.planData)
        plan.create()
    });
});