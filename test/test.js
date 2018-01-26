import test from 'ava';
import card from '../';

test('Detects correct card type', (t) => {
  t.is(card('4222222222222'), 'visa');
  t.is(card('4111111111111111'), 'visa');
  t.is(card('4242424242424242'), 'visa');

  t.is(card('378282246310005'), 'amex');
  t.is(card('371449635398431'), 'amex');
  t.is(card('378734493671000'), 'amex');

  t.is(card('6011111111111117'), 'discover');
  t.is(card('6011000990139424'), 'discover');

  t.is(card('5555555555554444'), 'mastercard');
  t.is(card('5105105105105100'), 'mastercard');

  t.is(card('3530111333300000'), 'jcb');
  t.is(card('3566002020360505'), 'jcb');

  t.is(card('6331101999990016'), 'solo');

  t.is(card('38000000000006'), 'carteBlanche');

  t.is(card('30569309025904'), 'dinersClub');
  t.is(card('38520000023237'), 'dinersClub');

  t.is(card('6304850000000040'), 'lasercard');
  t.is(card('6304850000000602'), 'lasercard');

  t.is(card('6240008631401148'), 'unionpay');

  t.is(card('6759649826438453'), 'maestro');
  t.is(card('6759000000000000'), 'maestro');
  t.is(card('6799990100000000019'), 'maestro');
});

test('Works with spaces', (t) => {
  t.is(card('4222 2222 22222'), 'visa');
  t.is(card('4111 1111 1111 1111'), 'visa');
  t.is(card('4242 4242 4242 4242'), 'visa');
});

test('Works with hyphens', (t) => {
  t.is(card('4222-2222-22222'), 'visa');
  t.is(card('4111-1111-1111-1111'), 'visa');
  t.is(card('4242-4242-4242-4242'), 'visa');
});

test('Predicts type at shorter lengths', (t) => {
  t.is(card('4222'), 'visa');
  t.is(card('41'), 'visa');
  t.is(card('42424242424242'), 'visa');

  t.is(card('378282'), 'amex');
  t.is(card('37'), 'amex');
  t.is(card('378'), 'amex');

  t.is(card('601'), 'discover');
  t.is(card('6011-'), 'discover');
  t.is(card('601100000000000'), 'discover');
  t.is(card('601111111111111'), 'discover');
  t.is(card('601100099013942'), 'discover');

  t.is(card('510'), 'mastercard');
  t.is(card('5555-'), 'mastercard');

  t.is(card('3530'), 'jcb');
  t.is(card('35660'), 'jcb');
});


test('Returns "none" when length exceeds known valid length', (t) => {
  t.is(card('42424242424242424'), 'none');
});

test('Returns "other" for other card types', (t) => {
  t.is(card('5610591081018250'), 'other'); // australian bankcard
});

test('Returns "none" if impossible/invalid', (t) => {
  t.is(card('1234567890'), 'none');
});

test('Throws if not passed a string', (t) => {
  t.throws(() => {
    card(42424242424242);
  });
});
