/**
 * @jest-environment jsdom
 */

 import { pushToHistory } from '../scripts/router.js';

 describe('pushToHistory Tests', () => {
     test('test push settings', () => {
         const result = pushToHistory('settings', '');
         expect(result.state.page).toBe('settings');
         expect(result.length).toBe(2);
     });
 
     test('push entry page', () => {
         const result = pushToHistory('entry', 1);
         expect(result.state.page).toBe('entry1');
         expect(result.length).toBe(3);
     });
 
     test('default history push', () => {
         const result = pushToHistory('', '');
         expect(result.state.page).toBe(undefined);
         expect(result.length).toBe(4);
     });
     
     test('multiple state changes length', () => {
         pushToHistory('settings', '');
         pushToHistory('entry', 5);
         const result = pushToHistory('settings', '');
         expect(result.length).toBe(7);
     });
 }); 