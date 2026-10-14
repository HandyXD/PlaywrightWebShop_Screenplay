import rawData from './dataEntry.json';
import { OrderData } from '../models/DataEntryModels';

export const testData: OrderData = structuredClone(
    rawData as OrderData
);

const [user, domain] = testData.user_info.email.split('@');

testData.user_info.email = `${user}_${Date.now()}@${domain}`;