import { waitFor } from '@testing-library/react';
import { classNames } from '../classNames/classNames';

describe('classNames', () => {
  test('with first param', () => {
    waitFor(() => {
      expect(classNames('someClass')).toBe('someClass');
    });
  });

  test('with additional class', () => {
    waitFor(() => {
      const expected = 'someClass class1 class2';
      expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });
  });
  test('with mods', () => {
    waitFor(() => {
      const expected = 'someClass class1 class2 hovered scrollable';
      expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2']))
        .toBe(expected);
    });
  });
  test('with mods false', () => {
    waitFor(() => {
      const expected = 'someClass class1 class2 hovered';
      expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2']))
        .toBe(expected);
    });
  });
  test('with mods undefined', () => {
    waitFor(() => {
      const expected = 'someClass class1 class2 hovered';
      expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2']))
        .toBe(expected);
    });
  });
});
