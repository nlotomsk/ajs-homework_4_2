
test('Проверка вывода персоонажей по количеству здоровья', () => {
  const Arr = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const recevied = construction(Arr);
  expect(recevied).toEqual(expected);
});
